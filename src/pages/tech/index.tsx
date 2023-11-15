import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../../components/Layout';
import PostList from '../../components/PostList';
import ContentContainer from '../../components/ContentContainer';
import Seo from '../../components/Seo';

export default function TechPage() {
  const data = useStaticQuery(TECHLIST_QUERY);
  const posts = data.allContentfulMoztiqBlog.nodes;
  return (
    <Layout>
      <ContentContainer title="TECH">
        <PostList posts={posts} />
      </ContentContainer>
    </Layout>
  );
}

export const TECHLIST_QUERY = graphql`
  query TechList {
    allContentfulMoztiqBlog(filter: { category: { eq: "tech" } }) {
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
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Tech" />;
