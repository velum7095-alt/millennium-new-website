export interface HeroData {
  headline: string;
  subheading: string;
  images: string[];
  ctaButtons: { label: string; link: string; variant: 'primary' | 'secondary' }[];
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  isAuthorized: boolean;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
  category: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  brands?: string;
  tags?: string[];
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price: string;
  features: string[];
  isFeatured: boolean;
  brand: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  photo: string;
  experience: string;
  email: string;
  phone: string;
  socialLinks: { platform: string; url: string }[];
}

export interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  images: string[];
  category: string;
  completedDate: string;
  testimonial: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  photo: string;
  review: string;
  rating: number;
  position: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  publishedDate: string;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
}

export interface SiteSettings {
  companyName: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  googleMapsEmbed: string;
  socialLinks: { platform: string; url: string }[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  googleAnalyticsId: string;
  copyrightText: string;
}

export interface AboutData {
  history: string;
  mission: string;
  vision: string;
  coreValues: string[];
  foundedYear: number;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}