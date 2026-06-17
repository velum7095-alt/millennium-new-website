import CategoryClient from './CategoryClient';
import { productCategories } from '../../../data/productCategories';

export async function generateStaticParams() {
  return productCategories.map((c) => ({ category: c.slug }));
}

export default function Page({ params }: { params: { category: string } }) {
  return <CategoryClient category={params.category} />;
}