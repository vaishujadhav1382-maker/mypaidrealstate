import { useEffect } from 'react';

/**
 * Custom hook for managing SEO metadata dynamically.
 * Automatically injects target keywords: sanglirealestate.com, www.sanglirealestate.com, https://sanglirealestate.com
 */
export default function useSEO({
  title = 'Sangli Real Estate | Property Dealer in Sangli | sanglirealestate.com',
  description = 'Sangli Real Estate (sanglirealestate.com) – Trusted property dealer in Sangli, Maharashtra. Buy, sell, rent houses, flats, row houses, land & agricultural fields. Contact Swapnil Patil at 8237776264.',
  keywords = 'sanglirealestate.com, www.sanglirealestate.com, https://sanglirealestate.com, Sangli Real Estate, Property Dealer Sangli, Buy House Sangli, Rent Flats Sangli, Land for Sale Sangli, Row House Sangli, Agricultural Land Sangli, Swapnil Patil Real Estate',
  canonical = 'https://sanglirealestate.com/'
} = {}) {
  useEffect(() => {
    // 1. Update document title
    if (title) {
      document.title = title;
    }

    // 2. Update meta description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }

    // 3. Update meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // 4. Update canonical link
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical);
    }
  }, [title, description, keywords, canonical]);
}
