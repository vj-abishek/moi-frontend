export const SITE_TITLE = 'Moi';
export const SITE_DESCRIPTION = 'Track gift contributions during weddings and celebrations. Never miss a மொய்.';

// App subdomain URL builder - prefixes 'app.' to the current domain
export function getAppUrl(path: string, currentUrl: URL): string {
  const hostname = currentUrl.hostname;
  
  // In development (localhost), use a configurable app URL or same host with different port
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return `http://localhost:3000${path}`; // Adjust port as needed for local Rails dev
  }
  
  // In production, prefix with 'app.'
  return `${currentUrl.protocol}//app.${hostname}${path}`;
}

export const NAV_LINKS = [
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
];

export const FOOTER_LINKS = {
  product: [
    { href: '/blog', label: 'Blog' },
    { href: '/status', label: 'Status' },
  ],
  company: [
    { href: '/about', label: 'About' },
    { href: '/trust', label: 'Trust' },
    { href: '/faq', label: 'FAQ' },
    { href: '/support', label: 'Support' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy' },
    { href: '/terms', label: 'Terms' },
    { href: '/refunds', label: 'Refunds' },
  ],
};

export const FEATURES = [
  {
    title: 'Live Analytics',
    description: 'Watch contributions come in as they happen. No refresh needed.',
    icon: 'chart',
  },
  {
    title: 'Single Shareable Link',
    description: 'One link for guests - share via WhatsApp, SMS, or QR code.',
    icon: 'link',
  },
  {
    title: 'UPI & Physical Gifts',
    description: 'Accept UPI payments or log cash and physical gifts seamlessly.',
    icon: 'payment',
  },
  {
    title: 'Team Management',
    description: 'Invite co-admins to help manage events and track contributions.',
    icon: 'team',
  },
  {
    title: 'Export Data',
    description: 'Download contribution records as CSV for your records.',
    icon: 'export',
  },
  {
    title: 'Works Everywhere',
    description: 'Mobile-friendly responsive design. No app installation required.',
    icon: 'device',
  },
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Create Event',
    description: 'Set up your wedding or celebration in seconds. No passwords needed.',
  },
  {
    step: 2,
    title: 'Share Link',
    description: 'Share your unique event link via WhatsApp, SMS, or QR code with guests.',
  },
  {
    step: 3,
    title: 'Track Live',
    description: 'Watch contributions come in real-time. Export anytime for your records.',
  },
];
