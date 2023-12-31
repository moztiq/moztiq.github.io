import React from 'react';
import Layout from '../../components/layout/Layout';
import { graphql, PageProps } from 'gatsby';
import Seo from '../../components/Seo';
import QuoteDetail from '../../components/quote/QuoteDetail';
import ContentContainer from '../../components/ContentContainer';
import { Category, SectionTitle } from '../../constants/common.constant';

export default function QuotePage({ data }: PageProps<Queries.QuoteQuery>) {
  const quote = data.contentfulQuote;
  return (
    <Layout>
      <ContentContainer title={SectionTitle(Category.QUOTE)}>
        {quote && <QuoteDetail data={quote as any} />}
      </ContentContainer>
    </Layout>
  );
}

export const query = graphql`
  query Quote($slug: String!) {
    contentfulQuote(slug: { eq: $slug }) {
      id
      title
      author
      slug
      category
      content {
        childMarkdownRemark {
          html
          excerpt
        }
      }
    }
  }
`;

export const Head = ({ data }: PageProps<Queries.QuoteQuery>) => {
  const quote = data.contentfulQuote;

  return (
    <Seo
      title={`${quote?.author ? quote?.author + ' - ' : ''}${
        quote?.title || 'QUOTE'
      }`}
      description={quote?.content?.childMarkdownRemark?.excerpt || ''}
      url={`/quote/${quote?.slug}`}
    />
  );
};
