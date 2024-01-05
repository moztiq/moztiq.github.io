import React from 'react';
import styled from 'styled-components';
import { IQuoteDetailProps, IQuoteProps } from '../../interface/interfaces';
import { motion } from 'framer-motion';
import Gisqus from '../post/Gisqus';
import QuoteAnimation from './QuoteAnimation';

const DetailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.gray100};
  margin: 110px 0 50px 0;
`;

const QuoteDetailWrapper = styled.div<IQuoteDetailProps>`
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

  @media screen and (max-width: 768px) {
    width: 75%;
    padding: 25px;
  }
`;

const GisqusWrapper = styled.div`
  margin-top: 70px;
  width: 60%;
  @media screen and (max-width: 768px) {
    width: 75%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Category = styled.div<IQuoteDetailProps>`
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

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

interface ILongContentProps {
  title: string | null;
}

const LongContent = styled.div<ILongContentProps>`
  display: inline-block;
  margin-top: ${(props) => (props.title ? '50px' : '20px')};
  font-size: 1.2rem;
  line-height: 2;

  @media screen and (max-width: 430px) {
    font-size: 1rem;
  }
`;

const Author = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.gray500};

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 430px) {
    font-size: 0.9rem;
  }
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

  return (
    <DetailWrapper>
      <QuoteDetailWrapper category={quote.category} title={quote.title}>
        {/*<Category category={quote.category}>*/}
        {/*  {quote.category.toUpperCase()}*/}
        {/*</Category>*/}
        <ContentWrapper>
          {quote.title && <Title>{quote.title}</Title>}
          <LongContent title={quote.title}>
            <QuoteAnimation text={quote?.content?.childMarkdownRemark.html} />
            {/*<Blink variants={cursorVariants} animate="blinking" />*/}
          </LongContent>
          <Author>- {quote.author}</Author>
        </ContentWrapper>
      </QuoteDetailWrapper>
      <GisqusWrapper>
        <Gisqus />
      </GisqusWrapper>
    </DetailWrapper>
  );
}
