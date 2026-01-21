export async function GET(context) {
  const siteUrl = context.site?.href || 'https://getmoi.in';
  const site = context.site || new URL('https://getmoi.in');
  const appSiteUrl = `${site.protocol}//app.${site.hostname}`;
  
  const content = `# Moi - Gift Contribution Tracking Platform

> Moi helps families and communities track gift contributions (மொய்) during special occasions like weddings, birthdays, and celebrations.

---

## Metadata

- Name: Moi
- URL: ${siteUrl}
- App URL: ${appSiteUrl}
- Category: Finance / Event Management / Gift Tracking
- Languages: English, Tamil
- Region: India
- Pricing: Free
- Contact: abishek@merg.cc

---

## What is Moi?

Moi is a web application designed for tracking gift contributions during Indian cultural events. The term "moi" (மொய் in Tamil) refers to the traditional practice of giving monetary gifts during celebrations, with the expectation of reciprocity in future events.

### Problem We Solve

Traditional moi tracking uses paper registers which leads to:
- Lost or damaged records
- Illegible handwriting
- Manual calculation errors
- No backup or history
- Difficult to share with family

### Our Solution

Moi digitizes the entire process with:
- Real-time contribution tracking
- Secure cloud storage
- Automatic calculations
- Easy sharing via links/QR
- Export to spreadsheets

---

## Key Features

### 1. Live Analytics
Real-time dashboard showing collections as they happen via WebSockets. See totals, contributor counts, and confirmation status update instantly.

### 2. Single Shareable Link
One unique link per event - share via WhatsApp, SMS, or QR code. Guests can log their contributions without downloading any app.

### 3. UPI & Physical Gifts
Accept UPI payments with direct deep links to payment apps, or log cash and physical gifts manually.

### 4. Team Management
Invite co-admins (family members, friends) to help manage events and track contributions together.

### 5. Export Data
Download complete contribution records as CSV files for permanent record-keeping.

### 6. Works Everywhere
Mobile-friendly responsive design that works on any device with a web browser. No app installation required.

### 7. Passwordless Auth
Magic links and Google OAuth authentication - no passwords to remember, forget, or reset.

### 8. Instant Setup
Create an event in under 30 seconds. Just name your event, add recipients, and share.

---

## Target Users

- Families organizing weddings and large celebrations in India
- Event organizers tracking gift contributions
- Anyone wanting to maintain records of moi for reciprocity tracking
- South Indian families following மொய் tradition
- Wedding planners managing client gift records

---

## Technology Stack

- Backend: Ruby on Rails
- Real-time: ActionCable (WebSockets)
- Database: PostgreSQL
- Frontend: Astro (static site) + Rails views (app)
- Deployment: Fly.io (app), Cloudflare Pages (marketing site)
- Authentication: Magic links, Google OAuth

---

## Routes & Endpoints

### Public Marketing Site (${siteUrl})

| Path | Description |
|------|-------------|
| / | Landing page with features, how-it-works, and CTA |
| /about | About Moi and company information |
| /trust | Trust & Security information |
| /privacy | Privacy Policy |
| /terms | Terms of Service |
| /refunds | Refund & Cancellation Policy |
| /support | Contact and support options |
| /faq | Frequently Asked Questions |
| /troubleshooting | UPI payment troubleshooting guide |
| /blog | Blog posts and articles |
| /blog/[slug] | Individual blog posts |
| /robots.txt | Robots file for crawlers |
| /llms.txt | This file (LLM context) |
| /sitemap-index.xml | XML sitemap |
| /rss.xml | RSS feed for blog |

### Application (${appSiteUrl}) - Requires Authentication

| Path | Description |
|------|-------------|
| / | Home dashboard - managed events and contributions |
| /groups/[id] | Event management page |
| /groups/[id]/edit | Edit event settings |
| /groups/[id]/analytics | Real-time analytics dashboard |
| /g/[slug] | Public event page for guest contributions |
| /m/[id] | Contribution confirmation/receipt page |

---

## API & Integrations

### Authentication
- Google OAuth 2.0 for social login
- Magic link email authentication
- Session-based authentication with secure cookies

### Payments
- UPI deep links for payment initiation (upi:// protocol)
- QR code generation for UPI payments
- Support for GPay, PhonePe, Paytm, BHIM, and other UPI apps

### Data Export
- CSV export for contribution records
- JSON API for programmatic access (authenticated)

---

## UPI Payment Notes

Some UPI apps have limitations when opened via deeplinks:

| App | Deeplink Limit | Solution |
|-----|----------------|----------|
| Google Pay | ₹2,000 max | Use QR scan or gallery load |
| BHIM | Not supported | Use QR scan only |
| Paytm | No limit | Works normally |
| PhonePe | No limit | Works normally |

### Workarounds for Large Payments
1. Download QR code and load from gallery in UPI app
2. Scan QR from another device's screen
3. Use Paytm which has no deeplink restrictions

---

## Common Use Cases

### Wedding Gift Tracking
Create an event for wedding reception, add bride and groom as recipients, share link with guests. Track cash, UPI, and gift contributions in real-time.

### Birthday Parties
Simple single-recipient setup for birthday celebrations. Guests can contribute and leave wishes.

### Housewarming (Grihapravesham)
Track contributions for new home ceremonies with multiple family recipients.

### Community Events
Team management feature allows multiple admins to manage large community events together.

---

## Structured Data

### Organization
\`\`\`json
{
  "@type": "Organization",
  "name": "Moi",
  "url": "${siteUrl}",
  "email": "abishek@merg.cc",
  "description": "Gift contribution tracking for Indian celebrations"
}
\`\`\`

### Application
\`\`\`json
{
  "@type": "SoftwareApplication",
  "name": "Moi",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR"
  }
}
\`\`\`

---

## Contact & Support

- Email: abishek@merg.cc
- Support Page: ${siteUrl}support
- FAQ: ${siteUrl}faq
- Status: https://merg.openstatus.dev

---

## Related Terms

Tamil: மொய், மொய் பட்டியல், திருமண மொய்
Hindi: शगुन, गिफ्ट ट्रैकिंग
English: Gift tracking, wedding contributions, gift registry, shagun tracker

---

*Last updated: January 2026*
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
