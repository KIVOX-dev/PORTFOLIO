import config from '@/config.json';

const { name, url } = config;
const defaultOgImage = `${url}/social-image.png`;

/**
 * Build a Next.js `Metadata` object with the site defaults
 */
export function baseMeta({
  title,
  description,
  prefix = name,
  ogImage = defaultOgImage,
}) {
  const titleText = [prefix, title].filter(Boolean).join(' | ');

  return {
    title: titleText,
    description,
    authors: [{ name }],
    openGraph: {
      title: titleText,
      description,
      siteName: name,
      type: 'website',
      url,
      images: [{ url: ogImage, width: 1280, height: 800, alt: 'Banner for the site' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: titleText,
      description,
      images: [ogImage],
    },
    alternates: { canonical: url },
  };
}
