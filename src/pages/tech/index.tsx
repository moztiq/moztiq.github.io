import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../../components/Layout';
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

export default function TechPage({ data }: PageProps<Queries.TechListQuery>) {
  const posts = data.allContentfulMoztiqBlog.nodes;
  return (
    <Layout>
      <ContentContainer title={SectionTitle(Category.TECH)}>
        <ContentExplain
          icon={<FontAwesomeIcon icon={SectionIcon(Category.TECH)} />}
          title={`<span>TECH</span> ${SectionTitle(Category.TECH)}`}
          description={SectionDescription(Category.TECH)}
        />
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
    <Seo
      title={SectionTitle(Category.TECH)}
      description={SectionDescription(Category.TECH)}
      url={`/tech`}
    />
  );
};
