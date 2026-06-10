'use client';

import { useLocalStorage } from './useLocalStorage';
import { HeroData, Stat, Partner, Client, Product, TeamMember, Project, Testimonial, BlogPost, SiteSettings, AboutData, WhyChooseItem } from '../data/types';
import { initialHeroData, initialStats, initialPartners, initialClients, initialProducts, initialTeam, initialProjects, initialTestimonials, initialBlogPosts, initialSettings, initialAboutData, initialWhyChoose } from '../data/initialData';

export function useSiteData() {
  const [heroData, setHeroData] = useLocalStorage<HeroData>('heroData', initialHeroData);
  const [stats, setStats] = useLocalStorage<Stat[]>('stats', initialStats);
  const [partners, setPartners] = useLocalStorage<Partner[]>('partners', initialPartners);
  const [clients, setClients] = useLocalStorage<Client[]>('clients', initialClients);
  const [products, setProducts] = useLocalStorage<Product[]>('products', initialProducts);
  const [team, setTeam] = useLocalStorage<TeamMember[]>('team', initialTeam);
  const [projects, setProjects] = useLocalStorage<Project[]>('projects', initialProjects);
  const [testimonials, setTestimonials] = useLocalStorage<Testimonial[]>('testimonials', initialTestimonials);
  const [blogPosts, setBlogPosts] = useLocalStorage<BlogPost[]>('blogPosts', initialBlogPosts);
  const [settings, setSettings] = useLocalStorage<SiteSettings>('settings', initialSettings);
  const [aboutData, setAboutData] = useLocalStorage<AboutData>('aboutData', initialAboutData);
  const [whyChoose, setWhyChoose] = useLocalStorage<WhyChooseItem[]>('whyChoose', initialWhyChoose);

  return {
    heroData, setHeroData,
    stats, setStats,
    partners, setPartners,
    clients, setClients,
    products, setProducts,
    team, setTeam,
    projects, setProjects,
    testimonials, setTestimonials,
    blogPosts, setBlogPosts,
    settings, setSettings,
    aboutData, setAboutData,
    whyChoose, setWhyChoose,
  };
}