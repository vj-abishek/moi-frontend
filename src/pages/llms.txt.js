export async function GET(context) {
  const siteUrl = context.site?.href || 'https://moi.abs.wiki';
  const site = context.site || new URL('https://moi.abs.wiki');
  const appSiteUrl = `${site.protocol}//app.${site.hostname}`;
  
  const content = `# Moi - Gift Contribution Tracking Platform

> Moi helps families and communities track gift contributions (மொய்) during special occasions like weddings, birthdays, and celebrations.

## What is Moi?

Moi is a web application designed for tracking gift contributions during Indian cultural events. The term "moi" (மொய் in Tamil) refers to the traditional practice of giving monetary gifts during celebrations, with the expectation of reciprocity in future events.

## Key Features

- **Live Analytics**: Real-time dashboard showing collections as they happen via WebSockets
- **Single Shareable Link**: One link for guests - share via WhatsApp, SMS, or QR code
- **UPI & Physical Gifts**: Accept UPI payments or log cash and physical gifts
- **Team Management**: Invite co-admins to help manage events
- **Export Data**: Download contribution records as CSV
- **Works Everywhere**: Mobile-friendly responsive design, no app required
- **Passwordless Auth**: Magic links and Google OAuth - no passwords to remember
- **Instant Setup**: Create an event in seconds

## Target Users

- Families organizing weddings and large celebrations in India
- Event organizers tracking gift contributions
- Anyone wanting to maintain records of moi for reciprocity

## Technology

- Built with Ruby on Rails
- Real-time updates via ActionCable (WebSockets)
- SQLite database with Litestream backups
- Deployed on Fly.io

## Routes & Authentication

Most routes require authentication. Only specific public routes are accessible without login.

### Public Routes (No Authentication Required)

- ${siteUrl} - Landing page
- ${siteUrl}about - About Moi
- ${siteUrl}trust - Trust & Security information
- ${siteUrl}privacy - Privacy Policy
- ${siteUrl}terms - Terms of Service
- ${siteUrl}support - Contact Support
- ${siteUrl}faq - Frequently Asked Questions
- ${siteUrl}blog - Blog posts
- ${siteUrl}robots.txt - Robots file for crawlers
- ${siteUrl}llms.txt - This file
- ${siteUrl}sitemap-index.xml - XML sitemap

### App Routes (Login Required)

The main application is hosted at ${appSiteUrl}

- / - Home dashboard showing managed events and contributions
- /groups/{id} - Event management page
- /groups/{id}/edit - Edit event settings
- /groups/{id}/analytics - Real-time analytics dashboard with live updates
- /g/{slug} - Event page where guests can log their contributions
- /m/{id} - Contribution confirmation/receipt page

## API & Integrations

- Google OAuth for authentication
- UPI deep links for payment initiation
- QR code generation for easy sharing

## Contact

For support inquiries, visit ${siteUrl}support
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}

