import type { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import AgeGate from '../../components/AgeGate';
import type { Site } from '../../lib/db';
import AdSquare from '@/components/AdSquare';

interface SitePageProps {
  site: Site | null;
}

export default function SitePage({ site }: SitePageProps) {
  if (!site) return <div>Site not found</div>;

  return (
    <AgeGate>
      <div className="container mx-auto p-4">
        <h1 className="mb-6 text-3xl font-bold">{site.name}</h1>
        <img
          src={site.previewImageURL}
          alt={site.name}
          className="mb-4 h-auto w-full max-w-3xl rounded"
        />
        {site.description ? <p className="text-gray-700">{site.description}</p> : null}
        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Visit Site
        </a>
        <AdSquare />
      </div>
    </AgeGate>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { getAllSiteIdsWithPreview } = await import('../../lib/db');
  const ids = getAllSiteIdsWithPreview();
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { getSiteById } = await import('../../lib/db');
  const id = parseInt(params?.id as string, 10);
  const site = getSiteById(id);
  return { props: { site } };
};
