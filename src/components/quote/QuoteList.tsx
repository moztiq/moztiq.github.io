import * as React from 'react';
import styled from 'styled-components';
import QuoteCard from './QuoteCard';
import { IQuoteProps } from '../../interface/interfaces';

const QuoteListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  width: 85%;
  a {
    text-decoration: none;
  }
  padding-bottom: 50px;

  @media screen and (max-width: 1024px) {
    width: 95%;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
  }

  @media screen and (max-width: 430px) {
    width: 95%;
    grid-template-columns: 1fr;
  }
`;

export default function QuoteList({ quotes }: { quotes: IQuoteProps[] }) {
  return (
    <QuoteListWrapper>
      {quotes &&
        quotes.map((quote: IQuoteProps) => (
          <QuoteCard key={quote.slug} quote={quote} />
        ))}
    </QuoteListWrapper>
  );
}
