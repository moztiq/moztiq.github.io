import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ICategoryProps, IQuoteProps } from '../../interface/interfaces';
import { AnimatePresence, motion } from 'framer-motion';

const DetailWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.gray100};
  margin: 100px 0;
`;

const QuoteDetailWrapper = styled.div<ICategoryProps>`
  padding: 50px;
  width: 60%;
  min-height: 20%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 1rem;
  position: relative;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.15);
  border-top: 5px solid
    ${(props) => {
      switch (props.category) {
        case 'poem':
          return 'tomato';
        case 'quote':
          return '#1c98e7';
        case 'essay':
          return '#54b71c';
        default:
          return 'gray';
      }
    }};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Nanum Myeongjo', serif;
`;

const Category = styled.div<ICategoryProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 90px;
  height: 40px;
  border-radius: 5px;
  top: -10px;
  left: 10px;
  background-color: ${(props) => {
    switch (props.category) {
      case 'poem':
        return 'tomato';
      case 'quote':
        return '#1c98e7';
      case 'essay':
        return '#54b71c';
      default:
        return 'gray';
    }
  }};
  color: ${(props) => props.theme.colors.white};
`;

const Title = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.gray800};
`;

interface ILongContentProps {
  title: string | null;
}

const LongContent = styled.div<ILongContentProps>`
  display: inline-block;
  margin-top: ${(props) => (props.title ? '50px' : '20px')};
  font-size: 1.2rem;
  line-height: 2;
`;

const Author = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.gray500};
`;

const Blink = styled(motion.div)`
  display: inline-block;
  height: 1.25rem;
  width: 1px;
  transform: translateY(0.25rem);
  background-color: ${(props) => props.theme.colors.gray800};
`;

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: 'linear',
      times: [0, 0.5, 0.5, 1],
    },
  },
};

export default function QuoteDetail(props: { data: IQuoteProps }) {
  const { data: quote } = props;
  const contentArr = quote?.content?.childMarkdownRemark.html
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
    }, 100);
    if (displayedTextArr.length == contentArr.length) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
    return () => clearTimeout(timeoutId);
  }, [displayedTextArr, contentArr]);

  return (
    <DetailWrapper>
      <QuoteDetailWrapper category={quote.category}>
        {/*<Category category={quote.category}>*/}
        {/*  {quote.category.toUpperCase()}*/}
        {/*</Category>*/}
        <ContentWrapper>
          {quote.title && <Title>{quote.title}</Title>}
          <LongContent title={quote.title}>
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
            {/*<Blink variants={cursorVariants} animate="blinking" />*/}
          </LongContent>
          <Author>- {quote.author}</Author>
        </ContentWrapper>
      </QuoteDetailWrapper>
    </DetailWrapper>
  );
}
