import React from 'react';
import Layout from '../../components/Layout';
import { graphql, PageProps } from 'gatsby';
import ContentContainer from '../../components/ContentContainer';
import Seo from '../../components/Seo';
import PostDetail from '../../components/PostDetail';

export default function PostDetailPage({
  data,
}: PageProps<Queries.PostDetailQuery>) {
  const post = data.contentfulMoztiqBlog;

  return (
    <Layout>
      <ContentContainer
        title={post?.category ? post?.category?.toUpperCase() : ''}
      >
        {post && <PostDetail data={post as any} />}
      </ContentContainer>
    </Layout>
  );
}

export const query = graphql`
  query PostDetail($slug: String!) {
    contentfulMoztiqBlog(slug: { eq: $slug }) {
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
          tableOfContents
        }
      }
      tag
    }
  }
`;

export const Head = () => <Seo title="Post" />;
