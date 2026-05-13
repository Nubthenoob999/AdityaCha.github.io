import fs from "node:fs";
import path from "node:path";

function extractEmailFromContact(contactText) {
  const mailtoMatch = contactText.match(/mailto:([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/i);
  if (mailtoMatch?.[1]) {
    return mailtoMatch[1].trim();
  }

  // Prefer email listed under the "Email" section.
  const sectionMatch = contactText.match(/\nEmail\s*\r?\n\s*-\s*(?:\[.+?\]\()?([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/i);
  if (sectionMatch?.[1]) {
    return sectionMatch[1].trim();
  }

  // Fallback to first email-like token anywhere in contact.md.
  const genericMatch = contactText.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  return genericMatch?.[0]?.trim() || "";
}

function syncReportEmail() {
  const repoRoot = path.resolve(process.cwd(), "..");
  const contactPath = path.join(repoRoot, "contact.md");
  const configPath = path.join(repoRoot, "_config.yml");

  const contact = fs.readFileSync(contactPath, "utf8");
  const config = fs.readFileSync(configPath, "utf8");

  const email = extractEmailFromContact(contact);
  if (!email) {
    throw new Error("No email found in contact.md");
  }

  const reportLineRegex = /^(\s*report_to_email:\s*).*$\r?$/m;
  let nextConfig = config;

  if (reportLineRegex.test(config)) {
    nextConfig = config.replace(reportLineRegex, `$1"${email}"`);
  } else {
    const analyticsBlockRegex = /^analytics_report:\r?\n((?:\s{2}.+\r?\n?)*)/m;
    const blockMatch = config.match(analyticsBlockRegex);
    if (!blockMatch) {
      throw new Error("analytics_report block not found in _config.yml");
    }
    const fullBlock = blockMatch[0];
    const injected = `${fullBlock}  report_to_email: "${email}"\n`;
    nextConfig = config.replace(fullBlock, injected);
  }

  if (nextConfig !== config) {
    fs.writeFileSync(configPath, nextConfig, "utf8");
  }

  if (process.env.GITHUB_ENV) {
    fs.appendFileSync(process.env.GITHUB_ENV, `REPORT_TO_EMAIL=${email}\n`, "utf8");
  }

  console.log("Synced report_to_email from contact.md");
}

try {
  syncReportEmail();
} catch (err) {
  console.error("Failed to sync report email:", err);
  process.exit(1);
}
