import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import PostList from '../../components/post/PostList';
import ContentContainer from '../../components/ContentContainer';
import Seo from '../../components/Seo';
import styled from 'styled-components';
import { Category, SectionTitle } from '../../constants/common.constant';

const PostListContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function GptPage({ data }: PageProps<Queries.BookListQuery>) {
  const posts = data.allContentfulMoztiqBlog.nodes;
  return (
    <Layout>
      <ContentContainer title={SectionTitle(Category.AI)}>
        <PostListContainer>
          <PostList posts={posts as any} />
        </PostListContainer>
      </ContentContainer>
    </Layout>
  );
}

export const query = graphql`
  query BookList {
    allContentfulMoztiqBlog(
      filter: { category: { eq: "ai" } }
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
  return <Seo title={'AI SECTION'} description={'AI SECTION'} url={`/ai`} />;
};
