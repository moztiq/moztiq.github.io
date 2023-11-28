import React from 'react';
import Layout from '../../components/Layout';
import { graphql, PageProps } from 'gatsby';
import ContentContainer from '../../components/ContentContainer';
import Seo from '../../components/Seo';
import PostDetail from '../../components/post/PostDetail';

export default function PostDetailPage({
  data,
}: PageProps<Queries.PostDetailQuery>) {
  const post = data.contentfulMoztiqBlog;

  return (
    <Layout>
      <ContentContainer title="QUOTE">
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
          excerpt
        }
      }
      tag
    }
  }
`;

export const Head = ({ data }: PageProps<Queries.PostDetailQuery>) => {
  const post = data.contentfulMoztiqBlog;

  return (
    <Seo
      title={post?.title || ''}
      description={post?.contents?.childMarkdownRemark?.excerpt || ''}
      imageUrl={post?.headerImage?.url || ''}
      url={`/post/${post?.slug}`}
    />
  );
};
