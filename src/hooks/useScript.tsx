import { useEffect, useRef } from 'react';

function useScript(attrs: Object) {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const script = document.createElement('script');
    Object.entries(attrs).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }
  }, []);

  return { containerRef };
}
export default useScript;
