import type { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import AgeGate from '../../components/AgeGate';
import type { Category, Site } from '../../lib/db';

interface CategoryPageProps {
  category: Category | null;
  sites: Site[];
}

export default function CategoryPage({ category, sites }: CategoryPageProps) {
  if (!category) return <div>Category not found</div>;

  return (
    <AgeGate>
      <div className="container mx-auto p-4">
        <h1 className="mb-6 text-3xl font-bold">{category.name}</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {sites.map((site, index) => (
            <Link id={`site-card-${index + 1}`} key={site.id} href={`/site/${site.id}`}>
              <div className="rounded-lg border p-4 hover:bg-gray-100">
                <img
                  src={site.previewImageURL}
                  alt={site.name}
                  className="mb-2 h-40 w-full rounded object-cover"
                />
                <h2 className="text-xl font-semibold">{site.name}</h2>
                {site.description ? <p className="text-gray-600">{site.description}</p> : null}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AgeGate>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { getAllCategoriesWithSites } = await import('../../lib/db');
  const categories = getAllCategoriesWithSites();
  const paths = categories.map((category) => ({ params: { slug: category.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { getCategoryBySlug, getSitesByCategoryId } = await import('../../lib/db');
  const slug = params?.slug as string;
  const category = getCategoryBySlug(slug);
  const sites = category ? getSitesByCategoryId(category.id) : [];
  return { props: { category, sites } };
};
