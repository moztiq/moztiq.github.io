import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../../components/Layout';
import ContentContainer from '../../components/ContentContainer';
import Seo from '../../components/Seo';
import styled from 'styled-components';
import QuoteList from '../../components/quote/QuoteList';
import {
  Category,
  SectionDescription,
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
          description={SectionDescription(Category.QUOTE)}
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
    <Seo
      title={SectionTitle(Category.QUOTE)}
      description={SectionDescription(Category.QUOTE)}
      url={`/quote`}
    />
  );
};
