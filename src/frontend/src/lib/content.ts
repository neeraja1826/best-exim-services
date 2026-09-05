// ============================================================================
// Central content module — single source of truth for ALL website copy.
// Section components import from here. Content preserved verbatim.
// ============================================================================

export const site = {
  name: "Best EXIM Services",
  tagline: "Your Trusted Partner for All Your Financial and Compliance Needs!",
  welcomeHeading: "WELCOME TO THE BEST EXIM AND INDUSTRIAL CONSULTANTS",
  heroHeading: "Expert DGFT Services for Hassle-Free Compliance and Approvals",
  heroSubheading:
    "A global trade, financial advisory and compliance consultancy with an extensive network across export-import documentation, subsidies and company compliance.",
  phone: "+91 95150 20404",
  phoneHref: "tel:+919515020404",
  email: "info@besteximservices.com",
  emailHref: "mailto:info@besteximservices.com",
  address:
    "6-3-790/8 Bathina Apartments, Flat No 2, Ameerpet, Hyderabad – 500016",
  ctaTitle: "Ready to Get Started?",
  ctaSubtitle: "Contact us today for a free consultation!",
};

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------
export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Insights", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

// ---------------------------------------------------------------------------
// Services — six core services
// ---------------------------------------------------------------------------
export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "DGFT Services",
    description:
      "End-to-end support for DGFT authorisations, licences and export incentives, ensuring seamless compliance with the Foreign Trade Policy.",
    icon: "globe",
  },
  {
    title: "Customs Services",
    description:
      "Expert handling of customs documentation, classification and duty structures to keep your shipments moving without delays.",
    icon: "shield",
  },
  {
    title: "GST Services",
    description:
      "Complete GST registration, filing and compliance support tailored to the needs of exporters and importers.",
    icon: "landmark",
  },
  {
    title: "Subsidy Services",
    description:
      "Guidance on availing government subsidies and incentives available to exporters under various schemes.",
    icon: "award",
  },
  {
    title: "Certificate & Others",
    description:
      "Assistance with certificates of origin, export house certificates and other essential trade documentation.",
    icon: "file",
  },
  {
    title: "Company Compliance",
    description:
      "Reliable support for company registration, statutory compliance and ongoing regulatory obligations.",
    icon: "building",
  },
];

// ---------------------------------------------------------------------------
// DGFT services list
// ---------------------------------------------------------------------------
export const dgftServices: string[] = [
  "IEC (Import Export Code)",
  "EPCG (Export Promotion Capital Goods)",
  "Advance Authorization",
  "DFIA (Duty Free Import Authorization)",
  "RoDTEP (Remission of Duties and Taxes on Exported Products)",
  "RoSCTL (Rebate of State and Central Taxes and Levies)",
  "Certificate of Origin",
  "Export House Certificate",
  "Import Monitoring Systems",
  "And other DGFT related services",
];

// ---------------------------------------------------------------------------
// Why Choose Us
// ---------------------------------------------------------------------------
export interface WhyChooseUsItem {
  title: string;
  description: string;
  icon: string;
}

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    title: "Expert DGFT Services",
    description:
      "Specialised guidance on DGFT authorisations, licences and export incentives, ensuring seamless compliance with the Foreign Trade Policy.",
    icon: "users",
  },
  {
    title: "Customs Services",
    description:
      "Expert handling of customs documentation, classification and duty structures to keep your shipments moving without delays.",
    icon: "shield",
  },
  {
    title: "Maximize Subsidy Benefits",
    description:
      "Strategic advice to help you claim the full range of government subsidies and incentives available to exporters.",
    icon: "award",
  },
  {
    title: "GST Expertise",
    description:
      "Complete GST registration, filing and compliance support tailored to the needs of exporters and importers.",
    icon: "landmark",
  },
];

// ---------------------------------------------------------------------------
// Statistics
// ---------------------------------------------------------------------------
export interface Statistic {
  value: number;
  suffix: string;
  label: string;
}

export const statistics: Statistic[] = [
  { value: 500, suffix: "+", label: "Clients being served" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 1500, suffix: "+", label: "Applications Filled" },
  { value: 120, suffix: "+", label: "EPCG / AA Monthly cases" },
];

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Best EXIM Services handled our entire DGFT and compliance process with remarkable professionalism. Our approvals came through faster than we expected.",
    name: "Donald Hardson",
    role: "CEO Co Founder",
  },
  {
    quote:
      "Their team guided us through every step of our export documentation. Reliable, transparent and truly expert in what they do.",
    name: "Akshaya Dairy Farms",
    role: "Client",
  },
];

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------
export interface FooterLink {
  label: string;
  href: string;
}

export const footerServices: FooterLink[] = [
  { label: "DGFT Services", href: "#services" },
  { label: "Customs Services", href: "#services" },
  { label: "GST Services", href: "#services" },
  { label: "Subsidy Services", href: "#services" },
  { label: "Certificate & Others", href: "#services" },
  { label: "Company Compliance", href: "#services" },
];

export const footerQuickLinks: FooterLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Insights", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { label: "Youtube", href: "https://youtube.com", icon: "youtube" },
];
