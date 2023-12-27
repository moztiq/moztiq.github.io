import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function QuoteAnimation(props: { text: string }) {
  const contentArr = props.text
    .split('\n')
    .map((str) => {
      return str;
    })
    .join('<br/>')
    .split(/(<[^>]+>)/g)
    .reduce((acc, curr) => {
      if (/(<[^>]+>)/g.test(curr)) {
        return [...acc, curr];
      }
      return acc.concat(curr.split(''));
    }, [] as string[]);

  const [displayedTextArr, setDisplayedTextArr] = useState<string[]>([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (displayedTextArr.length == contentArr.length) return;
      const newArr = contentArr?.slice(0, displayedTextArr.length + 1);
      setDisplayedTextArr(newArr);
    }, 150);
    if (displayedTextArr.length == contentArr.length) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
    return () => clearTimeout(timeoutId);
  }, [displayedTextArr, contentArr]);

  return (
    <AnimatePresence>
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        dangerouslySetInnerHTML={{
          __html: displayedTextArr.join('') || '',
        }}
      />
    </AnimatePresence>
  );
}
