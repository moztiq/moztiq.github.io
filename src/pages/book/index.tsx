import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import Layout from '../../components/layout/Layout';
import PostList from '../../components/post/PostList';
import ContentContainer from '../../components/ContentContainer';
import Seo from '../../components/Seo';
import {
  Category,
  SectionDescription,
  SectionIcon,
  SectionTitle,
} from '../../constants/common.constant';
import ContentExplain from '../../components/ContentExplain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BookPage({ data }: PageProps<Queries.BookListQuery>) {
  const posts = data.allContentfulMoztiqBlog.nodes;
  return (
    <Layout>
      <ContentContainer title={SectionTitle(Category.BOOK)}>
        <ContentExplain
          icon={<FontAwesomeIcon icon={SectionIcon(Category.BOOK)} />}
          title={`<span>BOOK</span> ${SectionTitle(Category.BOOK)}`}
          description={SectionDescription(Category.BOOK)}
        />
        <PostList posts={posts as any} />
      </ContentContainer>
    </Layout>
  );
}

export const query = graphql`
  query BookList {
    allContentfulMoztiqBlog(
      filter: { category: { eq: "book" } }
      sort: { createdAt: DESC }
    ) {
      nodes {
        id
        title
        slug
        category
        releaseDate
        headerImage {
          url
        }
        contents {
          childMarkdownRemark {
            html
            excerpt
          }
        }
        tag
      }
    }
  }
`;

export const Head = () => {
  return (
    <Seo
      title={SectionTitle(Category.BOOK)}
      description={SectionDescription(Category.BOOK)}
      url={`/book`}
    />
  );
};
