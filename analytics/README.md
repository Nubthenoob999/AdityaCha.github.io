# Private analytics setup

This folder contains private reporting code for your portfolio site.

## What this does

1. Tracks page views through Google Analytics 4 on your site.
2. Runs a GitHub Action once a day.
3. Sends an email report only to your configured email address.

## 1) Configure tracking in `_config.yml`

Set:

- `ga_measurement_id`: your GA4 Measurement ID (format: `G-XXXXXXXXXX`)
- `analytics_report.property_id`: your GA4 Property ID (numeric)

## 2) Create a GA service account (for report access)

1. In Google Cloud, create a service account.
2. Create a JSON key for it.
3. In GA4 Admin, grant that service account email at least Viewer access to your GA4 property.

## 3) Add GitHub repository secrets

In your repository settings, add these secrets:

- `GA_PROPERTY_ID`
- `GA_CLIENT_EMAIL`
- `GA_PRIVATE_KEY` (paste private key text with literal newlines)
- `REPORT_TO_EMAIL`
- `REPORT_FROM_EMAIL`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE` (`true` or `false`)
- `SMTP_USER`
- `SMTP_PASS`

## 4) Test once manually

Run workflow: `Daily Private Analytics Report` from the Actions tab.

## Privacy and "who viewed"

The report includes aggregated "who" data from GA4 dimensions (country/city/device).
It does not reveal personal identity unless you intentionally enable invasive tracking features.
