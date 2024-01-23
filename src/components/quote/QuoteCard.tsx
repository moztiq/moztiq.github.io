import { extractText } from '../../utils/string.utils';
import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import { IQuoteDetailProps, IQuoteProps } from '../../interface/interfaces';
import { shakeVariant } from '../../constants/animation.constant';
import { motion } from 'framer-motion';

const Quote = styled(motion.li)`
  padding: 3rem 2rem 2rem 2rem;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 0 0 1px rgba(23, 23, 23, 0.05);
  border-radius: 0.5rem;
  position: relative;
  transition: all 0.2s;

  @media screen and (max-width: 430px) {
    padding: 2.5rem 1rem 1rem 1rem;
  }

  @media screen and (min-width: 430px) {
    height: 110px;
  }

  &:hover {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.15);
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const ContentTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`;

const Category = styled.div<IQuoteDetailProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 1.2px;
  width: 70px;
  height: 30px;
  border-radius: 5px;
  top: -10px;
  left: 10px;
  background-color: ${(props) => {
    switch (props.category) {
      case 'poem':
        return '#FF6347';
      case 'quote':
        return '#1c98e7';
      case 'essay':
        return '#54b71c';
      default:
        return 'gray';
    }
  }};

  background: linear-gradient(
    to bottom,
    ${(props) => {
      switch (props.category) {
        case 'poem':
          return '#FF6347';
        case 'quote':
          return '#1c98e7';
        case 'essay':
          return '#54b71c';
        default:
          return 'gray';
      }
    }},
    ${(props) => {
      switch (props.category) {
        case 'poem':
          return 'rgb(250,154,137)';
        case 'quote':
          return 'rgb(110,193,246)';
        case 'essay':
          return 'rgba(50, 164, 7, 1)';
        default:
          return 'gray';
      }
    }}
  );
  color: ${(props) => props.theme.colors.white};
`;

const ContentText = styled.p`
  font-size: 0.95rem;
  color: ${(props) => props.theme.colors.gray800};
  line-height: 1.7;
  width: 100%;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-align: justify;
  overflow-wrap: anywhere;
`;

const Title = styled.span`
  margin-top: 20px;
  font-size: 0.85rem;
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: ${(props) => props.theme.colors.gray500};
`;

export default function QuoteCard({ quote }: { quote: IQuoteProps }) {
  return (
    <Link to={`/quote/${quote.slug}`}>
      <Quote {...shakeVariant}>
        <Category category={quote.category}>
          {quote.category.toUpperCase()}
        </Category>
        <ContentWrapper>
          <ContentTextWrapper>
            <ContentText>
              {/*{quote.content.childMarkdownRemark.excerpt}*/}
              {extractText(quote.content.childMarkdownRemark.html)}
            </ContentText>
            <Title>
              - {quote.title && `${quote.title} / `}
              {quote.author}
            </Title>
          </ContentTextWrapper>
        </ContentWrapper>
      </Quote>
    </Link>
  );
}
