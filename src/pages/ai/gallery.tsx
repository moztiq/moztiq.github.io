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
import styled from 'styled-components';
import GalleryList from '../../components/gallery/GalleryList';

const GalleryListContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function AiGalleryPage({
  data,
}: PageProps<Queries.AiGalleryListQuery>) {
  const list = data.allContentfulGallery.nodes;
  return (
    <AiLayout>
      <GalleryListContainer>
        <GalleryList list={list as any} />
      </GalleryListContainer>
    </AiLayout>
  );
}

export const query = graphql`
  query AiGalleryList {
    allContentfulGallery(
      filter: { category: { eq: "ai" } }
      sort: { createdAt: DESC }
    ) {
      nodes {
        id
        title
        slug
        category
        author
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
