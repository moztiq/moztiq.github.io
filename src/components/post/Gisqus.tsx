import React, { useEffect, useRef } from 'react';

export default function Gisqus() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const script = document.createElement('script');
    const attributes = {
      src: 'https://giscus.app/client.js',
      'data-repo': 'moztiq/moztiq-comments',
      'data-repo-id': 'R_kgDOK7WVWw',
      'data-category': 'Comments',
      'data-category-id': 'DIC_kwDOK7WVW84Cb2oW',
      'data-mapping': 'pathname',
      'data-strict': '0',
      'data-reactions-enabled': '0',
      'data-emit-metadata': '0',
      'data-input-position': 'top',
      'data-theme': 'preferred_color_scheme',
      'data-lang': 'ko',
      'data-loading': 'lazy',
      crossorigin: 'anonymous',
      async: 'true',
    };
    Object.entries(attributes).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }
  }, []);
  return <div id="gisqus" ref={containerRef} />;
}
