import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import WhatsAppButton from '../components/ui/WhatsAppButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Millennium Infosys Ltd - Trusted IT Solutions Provider in Burundi',
  description: 'Millennium Infosys Ltd is Burundi\'s leading wholesale and retail technology provider. IT equipment, office automation, networking, CCTV, and enterprise solutions since 2010.',
  keywords: ['IT Company Burundi', 'Computer Shop Burundi', 'Laptop Supplier Burundi', 'Printer Supplier Burundi', 'CCTV Supplier Burundi', 'Cisco Partner Burundi', 'HP Partner Burundi', 'Lenovo Partner Burundi', 'Office Equipment Burundi', 'Technology Solutions Burundi'],
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Millennium Infosys Ltd - Trusted IT Solutions Provider in Burundi',
    description: 'Leading wholesale and retail technology provider delivering world-class IT equipment, office automation, and enterprise solutions since 2010.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}