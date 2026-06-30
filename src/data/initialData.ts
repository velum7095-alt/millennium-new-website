import { HeroData, Stat, Partner, Client, Product, TeamMember, Project, Testimonial, BlogPost, SiteSettings, AboutData, WhyChooseItem } from './types';

export const initialHeroData: HeroData = {
  headline: '16 Years of Delivering Trusted Technology Solutions Across Burundi',
  subheading: 'Millennium Infosys Ltd is a leading wholesale and retail technology provider delivering world-class IT equipment, office automation solutions, networking infrastructure, and enterprise technology services since 2010.',
  images: [
    '/hero/slide1.png',
    '/hero/slide2.png',
    '/hero/slide3.png',
  ],
  ctaButtons: [
    { label: 'Request a Quote', link: 'https://wa.me/25765001555?text=Hello%20Millennium%20Infosys!%20I%20would%20like%20to%20request%20a%20quote.', variant: 'primary' },
    { label: 'Contact Sales', link: 'https://wa.me/25765001555?text=Hello%20Millennium%20Infosys!%20I%20would%20like%20to%20speak%20with%20sales.', variant: 'secondary' },
    { label: 'Browse Products', link: '/products', variant: 'secondary' },
  ],
};

export const initialStats: Stat[] = [
  { id: '1', label: 'Years Experience', value: 16, suffix: '+' },
  { id: '2', label: 'Products Delivered', value: 10000, suffix: '+' },
  { id: '3', label: 'Business Clients', value: 1000, suffix: '+' },
  { id: '4', label: 'Corporate Projects', value: 100, suffix: '+' },
  { id: '5', label: 'Team Members', value: 50, suffix: '+' },
];

export const initialPartners: Partner[] = [
  { id: '1', name: 'HP', logo: '/partners/hp.png', isAuthorized: true },
  { id: '2', name: 'Lenovo', logo: '/partners/lenovo.png', isAuthorized: true },
  { id: '3', name: 'Hikvision', logo: '/partners/hikvision.png', isAuthorized: true },
  { id: '4', name: 'Hiksemi', logo: '/partners/hiksemi.png', isAuthorized: true },
  { id: '5', name: 'Canon', logo: '/partners/canon.png', isAuthorized: true },
  { id: '6', name: 'Cisco', logo: '/partners/cisco.png', isAuthorized: true },
  { id: '7', name: 'APC', logo: '/partners/apc.png', isAuthorized: true },
  { id: '8', name: 'Microsoft', logo: '/partners/microsoft.png', isAuthorized: true },
  { id: '9', name: 'Seagate', logo: '', isAuthorized: true },
  { id: '10', name: 'Premax', logo: '', isAuthorized: true },
];

export const initialClients: Client[] = [
  { id: '1', name: 'ENABEL', logo: '/clients/enabel.png', category: 'Government & NGO' },
  { id: '2', name: 'UNHCR', logo: '/clients/unhcr.png', category: 'International Organization' },
  { id: '3', name: 'BRARUDI', logo: '/clients/brarudi.png', category: 'Corporate' },
  { id: '4', name: 'ITRACOM', logo: '/clients/itracom.png', category: 'Corporate' },
  { id: '5', name: 'AZAM', logo: '/clients/bakhresa.png', category: 'Corporate' },
  { id: '6', name: 'WHO', logo: '/clients/who.png', category: 'International Organization' },
  { id: '7', name: 'IOM', logo: '/clients/iom.png', category: 'International Organization' },
  { id: '8', name: 'FOMI', logo: '/clients/fomi.png', category: 'Government & NGO' },
  { id: '9', name: 'B.R.A Manufacturing', logo: '/clients/bra.png', category: 'Corporate' },
  { id: '10', name: 'ISABU', logo: '/clients/isabu.png', category: 'Government & NGO' },
];

export const initialProducts: Product[] = [
  { id: '1', name: 'HP EliteBook 840 G9', category: 'laptops-desktops', description: 'Premium business laptop with Intel Core i7, 16GB RAM, 512GB SSD.', image: '', price: 'Contact for Price', features: ['Intel Core i7-1260P', '16GB DDR5 RAM', '512GB NVMe SSD', '14" FHD Display', 'Windows 11 Pro'], isFeatured: true, brand: 'HP' },
  { id: '2', name: 'Lenovo ThinkPad T14s', category: 'laptops-desktops', description: 'Ultra-thin business laptop with AMD Ryzen processor.', image: '', price: 'Contact for Price', features: ['AMD Ryzen 7 PRO', '16GB RAM', '512GB SSD', '14" IPS Display', 'Fingerprint Reader'], isFeatured: true, brand: 'Lenovo' },
  { id: '3', name: 'HP ProDesk 400 G7', category: 'laptops-desktops', description: 'Reliable business desktop for everyday office computing.', image: '', price: 'Contact for Price', features: ['Intel Core i5', '8GB RAM', '256GB SSD', 'Windows 10 Pro'], isFeatured: false, brand: 'HP' },
  { id: '4', name: 'HP LaserJet Pro M404dn', category: 'printers-copiers-toners', description: 'Fast mono laser printer with automatic double-sided printing.', image: '', price: 'Contact for Price', features: ['40 ppm', 'Automatic Duplex', 'Network Ready', '250-sheet Tray'], isFeatured: true, brand: 'HP' },
  { id: '5', name: 'Canon imageRUNNER 2625i', category: 'printers-copiers-toners', description: 'Multifunction office photocopier with print, copy, scan capabilities.', image: '', price: 'Contact for Price', features: ['25 ppm', 'Color Scanning', 'Double-sided', 'Network Ready'], isFeatured: false, brand: 'Canon' },
  { id: '6', name: 'Hikvision DS-2CD2T47G2-L', category: 'security-systems', description: '4MP AcuSense network camera with smart detection.', image: '', price: 'Contact for Price', features: ['4MP Resolution', 'AcuSense AI', 'Night Vision 50m', 'IP67'], isFeatured: true, brand: 'Hikvision' },
  { id: '7', name: 'Cisco Catalyst 2960-X', category: 'accessories-supplies', description: 'Enterprise-grade managed network switch.', image: '', price: 'Contact for Price', features: ['24 Ports', 'Layer 2 Managed', 'PoE+ Support', 'Stackable'], isFeatured: true, brand: 'Cisco' },
  { id: '8', name: 'Cisco ISR 1000 Series', category: 'accessories-supplies', description: 'Integrated services router for business networks.', image: '', price: 'Contact for Price', features: ['VPN Support', 'SD-WAN Ready', 'Security Built-in'], isFeatured: false, brand: 'Cisco' },
  { id: '9', name: 'Seagate IronWolf 4TB', category: 'accessories-supplies', description: 'NAS-optimized hard drive for always-on storage.', image: '', price: 'Contact for Price', features: ['4TB Capacity', 'NAS Optimized', '7200 RPM', '3-Year Warranty'], isFeatured: false, brand: 'Seagate' },
  { id: '10', name: 'APC Smart-UPS 1500VA', category: 'ups-power', description: 'Intelligent UPS for critical equipment protection.', image: '', price: 'Contact for Price', features: ['1500VA', 'LCD Display', 'Network Card Slot', 'Green Mode'], isFeatured: false, brand: 'APC' },
  { id: '11', name: 'Premax PM-CC2000 Currency Counter', category: 'counting-machines', description: 'Professional heavy-duty bill counter with UV, MG, and IR counterfeit detection.', image: '', price: 'Contact for Price', features: ['UV/MG/IR Counterfeit Detection', 'Batch & Add Function', '1000 bills/min Speed', 'Dual LCD Display'], isFeatured: true, brand: 'Premax' }
];

export const initialTeam: TeamMember[] = [
  { id: '1', name: 'Jean-Pierre Niyonzima', position: 'Managing Director', department: 'Executive', photo: '', experience: '20+ Years', email: 'jp@millenniuminfosys.com', phone: '+257 7XX XXX XXX', socialLinks: [{ platform: 'LinkedIn', url: '#' }] },
  { id: '2', name: 'Marie-Claire Bizimana', position: 'Technical Director', department: 'Technical', photo: '', experience: '15+ Years', email: 'mc@millenniuminfosys.com', phone: '+257 7XX XXX XXX', socialLinks: [{ platform: 'LinkedIn', url: '#' }] },
  { id: '3', name: 'Patrick Hakizimana', position: 'Sales Manager', department: 'Sales', photo: '', experience: '10+ Years', email: 'patrick@millenniuminfosys.com', phone: '+257 7XX XXX XXX', socialLinks: [{ platform: 'LinkedIn', url: '#' }] },
  { id: '4', name: 'Diane Nshimirimana', position: 'Network Engineer', department: 'Technical', photo: '', experience: '8+ Years', email: 'diane@millenniuminfosys.com', phone: '+257 7XX XXX XXX', socialLinks: [{ platform: 'LinkedIn', url: '#' }] },
];

export const initialProjects: Project[] = [
  { id: '1', title: 'UNHCR Office Network Infrastructure', client: 'UNHCR', description: 'Complete network infrastructure deployment for UNHCR regional office.', images: [], category: 'IT Infrastructure', completedDate: '2024-03', testimonial: 'Outstanding network infrastructure that significantly improved our operational efficiency.' },
  { id: '2', title: 'BRARUDI IT Equipment Supply', client: 'BRARUDI', description: 'Large-scale supply and deployment of IT equipment across multiple offices.', images: [], category: 'Enterprise Solutions', completedDate: '2023-11', testimonial: 'Professionalism and commitment to delivering quality products on time.' },
  { id: '3', title: 'ENABEL Surveillance System', client: 'ENABEL', description: 'Comprehensive CCTV surveillance system covering all office premises.', images: [], category: 'Security', completedDate: '2024-01', testimonial: 'Enhanced security and peace of mind with their surveillance system.' },
];

export const initialTestimonials: Testimonial[] = [
  { id: '1', clientName: 'David Mukiza', company: 'UNHCR', photo: '', review: 'Millennium Infosys has been our trusted IT partner for years. Their technical expertise and prompt service delivery are unmatched in Burundi.', rating: 5, position: 'IT Coordinator' },
  { id: '2', clientName: 'Sarah Uwimana', company: 'ENABEL', photo: '', review: 'The quality of equipment and professional installation services provided by Millennium Infosys exceeded our expectations.', rating: 5, position: 'Procurement Manager' },
  { id: '3', clientName: 'Jean Ndayishimiye', company: 'BRARUDI', photo: '', review: 'Their after-sales support is exceptional. Any issue is resolved within 24 hours, which is critical for our operations.', rating: 4, position: 'Operations Director' },
];

export const initialBlogPosts: BlogPost[] = [
  { id: '1', title: 'Millennium Infosys Celebrates 16 Years of Technology Excellence', slug: '16-years-excellence', excerpt: 'As we mark 16 years of operations, we reflect on our journey of delivering trusted technology solutions across Burundi.', content: 'Full article content...', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80', category: 'Company News', author: 'Millennium Infosys', publishedDate: '2024-06-01', tags: ['milestone', 'company', 'burundi', 'technology'], seoTitle: '16 Years of Technology Excellence', seoDescription: 'Millennium Infosys celebrates 16 years of delivering trusted IT solutions in Burundi.' },
  { id: '2', title: 'Top 5 Network Security Best Practices for 2024', slug: 'network-security-best-practices', excerpt: 'Essential cybersecurity practices every business should implement to protect their network infrastructure.', content: 'Full article content...', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80', category: 'Industry Insights', author: 'Technical Team', publishedDate: '2024-05-15', tags: ['security', 'networking', 'cybersecurity', 'best-practices'], seoTitle: 'Network Security Best Practices 2024', seoDescription: 'Top 5 network security best practices for businesses in 2024.' },
  { id: '3', title: 'HP Launches New EliteBook Series for Business Professionals', slug: 'hp-elitebook-launch', excerpt: 'HP introduces the latest EliteBook series with cutting-edge features designed for enterprise productivity.', content: 'Full article content...', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a74b?w=800&q=80', category: 'Product Launch', author: 'Sales Team', publishedDate: '2024-04-20', tags: ['HP', 'laptops', 'business', 'product-launch'], seoTitle: 'New HP EliteBook Series Launch', seoDescription: 'HP launches new EliteBook series for business professionals.' },
];

export const initialAboutData: AboutData = {
  history: 'Founded in 2010 in Bujumbura, Burundi, Millennium Infosys Ltd began as a small IT equipment supplier with a vision to bridge the technology gap in the region. Over the past 16 years, we have grown into a leading wholesale and retail technology provider, serving government institutions, international organizations, NGOs, and private businesses across Burundi. Our commitment to quality, genuine products, and professional service has earned us partnerships with world-leading technology brands.',
  mission: 'To provide reliable, high-quality technology solutions and services that empower businesses, institutions, and individuals across Burundi to achieve their goals through innovation and excellence.',
  vision: 'To become the most trusted and comprehensive technology solutions provider in Burundi and the East African region, driving digital transformation and enabling sustainable growth for our clients.',
  coreValues: ['Quality & Authenticity', 'Customer Excellence', 'Professional Integrity', 'Innovation & Growth', 'Reliability & Trust', 'After-Sales Commitment'],
  foundedYear: 2010,
};

export const initialWhyChoose: WhyChooseItem[] = [
  { id: '1', title: '16+ Years Experience', description: 'Over 16 years of proven expertise in delivering technology solutions across Burundi.', icon: 'Award' },
  { id: '2', title: 'Official Brand Partnerships', description: 'Authorized distributor and partner for HP, Lenovo, Cisco, Hikvision, Canon, and more.', icon: 'Handshake' },
  { id: '3', title: 'Competitive Pricing', description: 'Best prices on genuine IT products backed by direct manufacturer relationships.', icon: 'TrendingDown' },
  { id: '4', title: 'Professional Technical Support', description: 'Expert technical team providing installation, configuration, and ongoing support.', icon: 'Headphones' },
  { id: '5', title: 'Genuine Products', description: '100% genuine products with official warranties from authorized brand partnerships.', icon: 'ShieldCheck' },
  { id: '6', title: 'Nationwide Delivery', description: 'Delivery services covering all provinces of Burundi with reliable logistics.', icon: 'Truck' },
  { id: '7', title: 'Enterprise Solutions', description: 'Complete IT infrastructure design, deployment, and management for enterprises.', icon: 'Building2' },
  { id: '8', title: 'After-Sales Service', description: 'Comprehensive maintenance contracts and rapid response support services.', icon: 'Wrench' },
];

export const initialSettings: SiteSettings = {
  companyName: 'Millennium Infosys Ltd',
  tagline: 'Your Trusted Technology Partner Since 2010',
  phone: '+257 6500 1222',
  email: 'sales@millennium.bi',
  address: 'Plot 8 Rue de la Revolution, Bujumbura, Burundi',
  whatsapp: '+25765001555',
  googleMapsEmbed: '',
  socialLinks: [
    { platform: 'Facebook', url: '#' },
    { platform: 'LinkedIn', url: '#' },
    { platform: 'Twitter', url: '#' },
    { platform: 'Instagram', url: '#' },
  ],
  seoTitle: 'Millennium Infosys Ltd - Trusted IT Solutions Provider in Burundi',
  seoDescription: 'Millennium Infosys Ltd is Burundi\'s leading wholesale and retail technology provider. IT equipment, office automation, networking, CCTV, and enterprise solutions since 2010.',
  seoKeywords: ['IT Company Burundi', 'Computer Shop Burundi', 'Laptop Supplier Burundi', 'Printer Supplier Burundi', 'CCTV Supplier Burundi', 'Cisco Partner Burundi', 'HP Partner Burundi', 'Lenovo Partner Burundi', 'Office Equipment Burundi', 'Technology Solutions Burundi'],
  googleAnalyticsId: '',
  copyrightText: '© 2010-2026 Millennium Infosys Ltd. All Rights Reserved.',
};