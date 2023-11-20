import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../../components/Layout';
import PostList from '../../components/post/PostList';
import ContentContainer from '../../components/post/ContentContainer';
import Seo from '../../components/Seo';
import styled from 'styled-components';

const PostListContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function TechPage({ data }: PageProps<Queries.TechListQuery>) {
  const posts = data.allContentfulMoztiqBlog.nodes;
  return (
    <Layout>
      <ContentContainer title="TECH">
        <PostListContainer>
          <PostList posts={posts as any} />
        </PostListContainer>
      </ContentContainer>
    </Layout>
  );
}

export const query = graphql`
  query TechList {
    allContentfulMoztiqBlog(
      filter: { category: { eq: "tech" } }
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
    <Seo title={'TECH SECTION'} description={'TECH SECTION'} url={`/tech`} />
  );
};
