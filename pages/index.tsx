import type { GetStaticProps } from 'next';
import Link from 'next/link';
import AgeGate from '../components/AgeGate';
import CategoryCard from '../components/CategoryCard';
import type { Category, Site } from '../lib/db';

interface CategoryWithSites extends Category {
  topSites: Site[];
}

interface HomeProps {
  categories: CategoryWithSites[];
}

export default function Home({ categories }: HomeProps) {
  return (
    <AgeGate>
      <div className="container mx-auto p-4">
        <h1 className="mb-6 text-3xl font-bold">Adult Website Directory</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              sites={category.topSites}
              id={category.id}
            />
          ))}
        </div>
      </div>
    </AgeGate>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { getAllCategoriesWithSites, getTopSitesByCategoryId } = await import('../lib/db');
  const categories = getAllCategoriesWithSites();
  const categoriesWithTopSites: CategoryWithSites[] = categories.map((c) => ({
    ...c,
    topSites: getTopSitesByCategoryId(c.id, 10),
  }));
  return { props: { categories: categoriesWithTopSites } };
};
