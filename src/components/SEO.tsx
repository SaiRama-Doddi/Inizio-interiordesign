import { Helmet } from "react-helmet-async";

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
};

export default function SEO({
  title = "Inizio Interiors — Luxury Interior Design in Hyderabad",
  description = "Transforming homes with premium interior design, space planning, modular kitchens, wardrobes and complete home makeover solutions.",
  keywords = "interior design, inizio interiors, hyderabad interiors, luxury interiors, home design",
  url = "https://iniziointeriors.com",
  image = "https://iniziointeriors.com/seo-banner.jpg",
}: SEOProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Inizio Interiors",
    "url": url,
    "image": image,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "India"
    },
    "telephone": "+91 86885 47851",
    "sameAs": [
      "https://www.instagram.com/iniziointeriors",
      "https://www.facebook.com/iniziointeriors"
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* LLM-friendly metadata */}
      <meta name="llm-friendly" content="true" />
      <meta name="ai-summary" content={description} />

      {/* OpenGraph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data (LLM-friendly) */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
