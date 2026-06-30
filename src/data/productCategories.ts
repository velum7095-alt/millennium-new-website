import { ProductCategory } from './types';

export const productCategories: ProductCategory[] = [
  {
    id: '1',
    name: 'Laptops & Desktops',
    slug: 'laptops-desktops',
    icon: 'Laptop',
    description: 'Full range of laptops, desktop computers, and workstations from HP, Lenovo, and Dell. For personal, office, and professional use.',
    brands: 'HP, Lenovo, Dell',
    tags: ['HP Laptops', 'Lenovo ThinkPad', 'Desktop PCs', 'Workstations'],
    image: '/products/laptops_desktops.png'
  },
  {
    id: '2',
    name: 'Printers, Copiers & Toners',
    slug: 'printers-copiers-toners',
    icon: 'Printer',
    description: 'Inkjet and laser printers, multifunction copiers, scanners, and a complete stock of toner cartridges and ink supplies.',
    brands: 'Epson, Canon, HP',
    tags: ['Laser Printers', 'Inkjet Printers', 'Photocopiers', 'Toners & Ink'],
    image: '/products/printers_copiers_toners.png'
  },
  {
    id: '3',
    name: 'Hikvision Security Systems',
    slug: 'security-systems',
    icon: 'Shield',
    description: 'Complete Hikvision CCTV and security product line — cameras, NVR recorders, access control, and remote monitoring kits.',
    brands: 'Hikvision',
    tags: ['CCTV Cameras', 'NVR Recorders', 'Access Control', 'Complete Kits'],
    image: '/products/security_systems.png'
  },
  {
    id: '4',
    name: 'UPS & Power Protection',
    slug: 'ups-power',
    icon: 'Battery',
    description: 'All types of UPS systems to protect your equipment from power outages and surges. Line-interactive and online models available.',
    brands: 'APC, Eaton',
    tags: ['Line-Interactive UPS', 'Online UPS', 'Rack Mount UPS', 'Battery Replacements'],
    image: '/products/ups_power.png'
  },
  {
    id: '5',
    name: 'Currency Counting Machines',
    slug: 'counting-machines',
    icon: 'Banknote',
    description: 'Professional bill counters and counterfeit detectors for banks, exchange bureaus, supermarkets, and any cash-handling business.',
    brands: 'Various Brands',
    tags: ['Bill Counters', 'Counterfeit Detectors', 'Mixed Denomination', 'Coin Counters'],
    image: '/products/counting_machines.png'
  },
  {
    id: '6',
    name: 'Accessories & Supplies',
    slug: 'accessories-supplies',
    icon: 'Keyboard',
    description: 'Keyboards, mice, cables, USB drives, external hard drives, webcams, headsets, and all the IT accessories you need.',
    brands: 'Logitech, HP, Various',
    tags: ['Keyboards & Mice', 'Storage Drives', 'Cables & Adapters', 'Webcams & Headsets'],
    image: '/products/computer_accessories.png'
  }
];