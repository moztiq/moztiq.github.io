import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import PostList from '../../components/post/PostList';
import Seo from '../../components/Seo';
import {
  Category,
  SectionDescription,
  SectionTitle,
} from '../../constants/common.constant';
import AiLayout from '../../components/layout/AiLayout';

export default function AiPage({ data }: PageProps<Queries.AiListQuery>) {
  const posts = data.allContentfulMoztiqBlog.nodes;
  return (
    <AiLayout>
      <PostList posts={posts as any} />
    </AiLayout>
  );
}

export const query = graphql`
  query AiList {
    allContentfulMoztiqBlog(
      filter: { category: { eq: "ai" } }
      sort: { releaseDate: DESC }
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
      title={SectionTitle(Category.AI)}
      description={SectionDescription(Category.AI)}
      url={`/ai`}
    />
  );
};
