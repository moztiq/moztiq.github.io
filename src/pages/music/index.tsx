import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../../components/layout/Layout';
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

export default function MusicPage({ data }: PageProps<Queries.MusicListQuery>) {
  const posts = data.allContentfulMoztiqBlog.nodes;
  return (
    <Layout>
      <ContentContainer title={SectionTitle(Category.MUSIC)}>
        <ContentExplain
          icon={<FontAwesomeIcon icon={SectionIcon(Category.MUSIC)} />}
          title={`<span>MUSIC</span> ${SectionTitle(Category.MUSIC)}`}
          description={SectionDescription(Category.MUSIC)}
        />
        <PostList posts={posts as any} />
      </ContentContainer>
    </Layout>
  );
}

export const query = graphql`
  query MusicList {
    allContentfulMoztiqBlog(
      filter: { category: { eq: "music" } }
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
      title={SectionTitle(Category.MUSIC)}
      description={SectionDescription(Category.MUSIC)}
      url={`/music`}
    />
  );
};
