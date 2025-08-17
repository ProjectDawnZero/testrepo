import Link from 'next/link';
import type { Category, Site } from '../lib/db';

interface CategoryCardProps {
  category: Category;
  sites: Site[];
  id: number;
}

export default function CategoryCard({ category, sites, id }: CategoryCardProps) {
  return (
    <div className="rounded-lg border p-4 hover:bg-gray-100">
      <div className="mb-3 flex items-center justify-between">
        <Link href={`/category/${category.slug}`} className="text-xl font-semibold hover:underline">
          {category.name}
        </Link>
        <Link
          id={`category-card-${id}`}
          href={`/category/${category.slug}`}
          className="text-sm text-blue-600 hover:underline"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-3">
        {sites.map((site) => (
          <Link
            key={site.id}
            href={`/site/${site.id}`}
            className="flex min-w-0 items-center justify-start gap-2"
            title={site.name}
          >
            {site.iconURL ? (
              <img src={site.iconURL} alt={site.name} className="h-6 w-6 rounded" />
            ) : (
              <div className="flex h-6 w-6 items-center justify-center rounded bg-gray-200 text-[10px] text-gray-600">
                {site.name.charAt(0)}
              </div>
            )}
            <span className="truncate text-sm">{site.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
