import * as React from 'react';
import { graphql, PageProps, useStaticQuery } from 'gatsby';
import Layout from '../../components/Layout';
import PostList from '../../components/PostList';
import ContentContainer from '../../components/ContentContainer';
import Seo from '../../components/Seo';

export default function TechPage({ data }: PageProps<Queries.TechListQuery>) {
  const posts = data.allContentfulMoztiqBlog.nodes;
  return (
    <Layout>
      <ContentContainer title="TECH">
        <PostList posts={posts as any} />
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
