import React from 'react';
import Layout from '../../components/Layout';
import { graphql, PageProps } from 'gatsby';
import ContentContainer from '../../components/ContentContainer';
import Seo from '../../components/Seo';
import PostDetail from '../../components/PostDetail';

export default function PostDetailPage({
  data,
}: PageProps<Queries.PostBookDetailQuery>) {
  const post = data.contentfulMoztiqBlog;

  return (
    <Layout>
      <ContentContainer title="BOOK">
        <PostDetail data={post} />
      </ContentContainer>
    </Layout>
  );
}

export const query = graphql`
  query PostBookDetail($slug: String!) {
    contentfulMoztiqBlog(slug: { eq: $slug }) {
      id
      title
      slug
      category
      releaseDate
      content {
        raw
      }
      headerImage {
        url
      }
    }
  }
`;

export const Head = () => <Seo title="Book" />;
