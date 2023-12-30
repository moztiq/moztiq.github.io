import React from 'react';
import useScript from '../../hooks/useScript';

export default function Gisqus() {
  const { containerRef } = useScript({
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
  });
  return <div id="gisqus" ref={containerRef} />;
}
