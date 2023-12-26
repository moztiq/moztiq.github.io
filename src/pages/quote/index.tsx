import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../../components/Layout';
import ContentContainer from '../../components/ContentContainer';
import Seo from '../../components/Seo';
import styled from 'styled-components';
import QuoteList from '../../components/quote/QuoteList';
import {
  Category,
  SectionIcon,
  SectionTitle,
} from '../../constants/common.constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContentExplain from '../../components/ContentExplain';

const QuoteListContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function QuotePage({ data }: PageProps<Queries.QuoteListQuery>) {
  const quotes = data.allContentfulQuote.nodes;
  return (
    <Layout>
      <ContentContainer title={SectionTitle(Category.QUOTE)}>
        <ContentExplain
          icon={<FontAwesomeIcon icon={SectionIcon(Category.QUOTE)} />}
          title={`<span>QUOTE</span> ${SectionTitle(Category.QUOTE)}`}
          description={`때론 짧은 시 한편, 누군가의 한마디, 책 속의 짧은 글귀만으로 가슴이 벅찰 때가 있습니다. 그런 글을 찾아 모아두고 싶었어요.`}
        />
        <QuoteListContainer>
          <QuoteList quotes={quotes as any} />
        </QuoteListContainer>
      </ContentContainer>
    </Layout>
  );
}

export const query = graphql`
  query QuoteList {
    allContentfulQuote(sort: { createdAt: DESC }) {
      nodes {
        id
        title
        slug
        author
        category
        content {
          childMarkdownRemark {
            excerpt
            html
          }
        }
      }
    }
  }
`;

export const Head = () => {
  return (
    <Seo title={'QUOTE SECTION'} description={'QUOTE SECTION'} url={`/quote`} />
  );
};
