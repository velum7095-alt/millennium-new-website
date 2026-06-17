import BlogClient from './BlogClient';
import { initialBlogPosts } from '../../../data/initialData';

export async function generateStaticParams() {
  return initialBlogPosts.map((p) => ({ slug: p.slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return <BlogClient slug={params.slug} />;
}