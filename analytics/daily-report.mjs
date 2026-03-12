import { BetaAnalyticsDataClient } from "@google-analytics/data";
import nodemailer from "nodemailer";

function requireEnv(name) {
  const value = process.env[name];
  if (!value || value.trim() === "") {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function parsePrivateKey(raw) {
  return raw.replace(/\\n/g, "\n");
}

function yesterdayInTimeZone(timeZone) {
  const now = new Date();
  const localNow = new Date(now.toLocaleString("en-US", { timeZone }));
  const d = new Date(localNow);
  d.setDate(localNow.getDate() - 1);
  return d;
}

function fmtDateHuman(date, timeZone) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "short",
    day: "2-digit"
  }).format(date);
}

function tableRowsToText(rows, headers, maxRows = 10) {
  const sliced = rows.slice(0, maxRows);
  if (sliced.length === 0) return "(no data)";
  const lines = [headers.join(" | "), headers.map(() => "---").join(" | ")];
  for (const row of sliced) {
    lines.push(row.join(" | "));
  }
  return lines.join("\n");
}

async function run() {
  const gaPropertyId = requireEnv("GA_PROPERTY_ID");
  const gaClientEmail = requireEnv("GA_CLIENT_EMAIL");
  const gaPrivateKey = parsePrivateKey(requireEnv("GA_PRIVATE_KEY"));

  const reportToEmail = requireEnv("REPORT_TO_EMAIL");
  const reportFromEmail = requireEnv("REPORT_FROM_EMAIL");
  const smtpHost = requireEnv("SMTP_HOST");
  const smtpPort = Number(requireEnv("SMTP_PORT"));
  const smtpSecure = String(process.env.SMTP_SECURE || "true").toLowerCase() === "true";
  const smtpUser = requireEnv("SMTP_USER");
  const smtpPass = requireEnv("SMTP_PASS");

  const siteName = process.env.SITE_NAME || "Portfolio Site";
  const siteUrl = process.env.SITE_URL || "";
  const reportTimeZone = process.env.REPORT_TIMEZONE || "UTC";

  const reportDate = yesterdayInTimeZone(reportTimeZone);
  const reportDateHuman = fmtDateHuman(reportDate, reportTimeZone);

  const analyticsDataClient = new BetaAnalyticsDataClient({
    credentials: {
      client_email: gaClientEmail,
      private_key: gaPrivateKey
    }
  });

  const [summary] = await analyticsDataClient.runReport({
    property: `properties/${gaPropertyId}`,
    dateRanges: [{ startDate: "yesterday", endDate: "yesterday" }],
    metrics: [
      { name: "screenPageViews" },
      { name: "activeUsers" },
      { name: "newUsers" },
      { name: "sessions" }
    ]
  });

  const [hourly] = await analyticsDataClient.runReport({
    property: `properties/${gaPropertyId}`,
    dateRanges: [{ startDate: "yesterday", endDate: "yesterday" }],
    dimensions: [{ name: "hour" }],
    metrics: [{ name: "screenPageViews" }],
    orderBys: [{ dimension: { dimensionName: "hour" } }]
  });

  const [who] = await analyticsDataClient.runReport({
    property: `properties/${gaPropertyId}`,
    dateRanges: [{ startDate: "yesterday", endDate: "yesterday" }],
    dimensions: [{ name: "country" }, { name: "city" }, { name: "deviceCategory" }],
    metrics: [{ name: "activeUsers" }, { name: "screenPageViews" }],
    orderBys: [{ metric: { metricName: "activeUsers" }, desc: true }],
    limit: 15
  });

  const [topPages] = await analyticsDataClient.runReport({
    property: `properties/${gaPropertyId}`,
    dateRanges: [{ startDate: "yesterday", endDate: "yesterday" }],
    dimensions: [{ name: "pagePath" }],
    metrics: [{ name: "screenPageViews" }],
    orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
    limit: 10
  });

  const summaryMetrics = summary.metricHeaders?.map((h, idx) => ({
    name: h.name,
    value: summary.rows?.[0]?.metricValues?.[idx]?.value || "0"
  })) || [];

  const summaryMap = Object.fromEntries(summaryMetrics.map((m) => [m.name, m.value]));

  const hourlyRows = (hourly.rows || []).map((r) => {
    const h = r.dimensionValues?.[0]?.value || "0";
    const views = r.metricValues?.[0]?.value || "0";
    return [`${String(h).padStart(2, "0")}:00`, views];
  });

  const whoRows = (who.rows || []).map((r) => [
    r.dimensionValues?.[0]?.value || "(unknown)",
    r.dimensionValues?.[1]?.value || "(unknown)",
    r.dimensionValues?.[2]?.value || "(unknown)",
    r.metricValues?.[0]?.value || "0",
    r.metricValues?.[1]?.value || "0"
  ]);

  const topPageRows = (topPages.rows || []).map((r) => [
    r.dimensionValues?.[0]?.value || "(unknown)",
    r.metricValues?.[0]?.value || "0"
  ]);

  const subject = `[Daily Analytics] ${siteName} - ${reportDateHuman}`;

  const textBody = [
    `Daily analytics report for ${siteName}`,
    siteUrl ? `Site: ${siteUrl}` : "",
    `Date: ${reportDateHuman} (${reportTimeZone})`,
    "",
    "Summary:",
    `- Page Views: ${summaryMap.screenPageViews || "0"}`,
    `- Active Users: ${summaryMap.activeUsers || "0"}`,
    `- New Users: ${summaryMap.newUsers || "0"}`,
    `- Sessions: ${summaryMap.sessions || "0"}`,
    "",
    "Hourly views:",
    tableRowsToText(hourlyRows, ["Hour", "Views"], 24),
    "",
    "Who viewed (aggregated):",
    tableRowsToText(whoRows, ["Country", "City", "Device", "Users", "Views"], 15),
    "",
    "Top pages:",
    tableRowsToText(topPageRows, ["Path", "Views"], 10)
  ].filter(Boolean).join("\n");

  const htmlBody = `
    <h2>Daily analytics report for ${siteName}</h2>
    ${siteUrl ? `<p><strong>Site:</strong> ${siteUrl}</p>` : ""}
    <p><strong>Date:</strong> ${reportDateHuman} (${reportTimeZone})</p>
    <h3>Summary</h3>
    <ul>
      <li>Page Views: ${summaryMap.screenPageViews || "0"}</li>
      <li>Active Users: ${summaryMap.activeUsers || "0"}</li>
      <li>New Users: ${summaryMap.newUsers || "0"}</li>
      <li>Sessions: ${summaryMap.sessions || "0"}</li>
    </ul>
    <h3>Hourly Views</h3>
    <pre>${tableRowsToText(hourlyRows, ["Hour", "Views"], 24)}</pre>
    <h3>Who Viewed (Aggregated)</h3>
    <pre>${tableRowsToText(whoRows, ["Country", "City", "Device", "Users", "Views"], 15)}</pre>
    <h3>Top Pages</h3>
    <pre>${tableRowsToText(topPageRows, ["Path", "Views"], 10)}</pre>
  `;

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  });

  await transporter.sendMail({
    from: reportFromEmail,
    to: reportToEmail,
    subject,
    text: textBody,
    html: htmlBody
  });

  console.log(`Report sent to ${reportToEmail} for ${reportDateHuman}.`);
}

run().catch((err) => {
  console.error("Failed to generate/send daily report:", err);
  process.exit(1);
});
