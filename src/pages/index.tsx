import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import Seo from '../components/Seo';
import MainPostCard from '../components/post/MainPostCard';
import GalleryCard from '../components/gallery/GalleryCard';
import logoImage from '../assets/images/moztiq-logo.png';
import { extractText } from '../utils/string.utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonRunning, faPalette } from '@fortawesome/free-solid-svg-icons';
import { Category, SectionIcon } from '../constants/common.constant';
import ContentContainer from '../components/ContentContainer';

const MainContainer = styled.div`
  width: 100%;
  overflow-y: auto;
  background-color: ${(props) => props.theme.colors.white};
  padding-bottom: 30px;
  @media screen and (max-width: 1024px) {
    padding-top: 60px;
  }
`;

const TopBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 246, 243);
`;

const LogoContainer = styled.div`
  margin-top: 15px;
`;

const Logo = styled.img`
  width: 40px;
  margin-bottom: 40px;
`;

const TopContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 50px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const QuoteContainer = styled.ul`
  max-width: 50%;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    max-width: 70%;
    margin-bottom: 70px;
  }
`;

const QuoteTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 1.3px;
  margin-bottom: 20px;
  a {
    color: ${(props) => props.theme.colors.black};
    text-decoration: underline;
  }

  @media screen and (max-width: 430px) {
    font-size: 1.2rem;
  }
`;

const QuoteContent = styled.h2`
  font-family: 'Nanum Myeongjo', serif;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-align: justify;

  a {
    color: ${(props) => props.theme.colors.gray700};
    text-decoration: none;
  }

  @media screen and (max-width: 430px) {
    font-size: 1.1rem;
  }
`;

const AuthorContainer = styled.div`
  margin-top: 10px;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.gray400};
  text-align: right;

  @media screen and (max-width: 430px) {
    font-size: 0.9rem;
  }
`;

const GalleryContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    text-decoration: none;
  }
  margin-bottom: 40px;
`;

const GalleryTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 1.3px;
  text-decoration: underline;
  a {
    color: ${(props) => props.theme.colors.black};
    text-decoration: underline;
  }

  @media screen and (max-width: 430px) {
    font-size: 1.2rem;
  }
`;

const GalleryContent = styled.div`
  width: 200px;
`;

const PostTitle = styled.h1`
  font-size: 1.5rem;
  margin: 40px 10% 0 10%;

  @media screen and (max-width: 430px) {
    font-size: 1.2rem;
  }
`;

const PostContainer = styled.ul`
  margin: 0 10%;
`;

export default function IndexPage({ data }: PageProps<Queries.MainDataQuery>) {
  const posts = data.allContentfulMoztiqBlog.nodes;
  const galleries = data.allContentfulGallery.nodes;
  const quotes = data.allContentfulQuote.nodes;
  return (
    <Layout>
      <ContentContainer title={'Home'}>
        <MainContainer>
          <TopBackground>
            <LogoContainer>
              <Logo src={logoImage} />
            </LogoContainer>
            <TopContentContainer>
              <QuoteContainer>
                <QuoteTitle>
                  <FontAwesomeIcon
                    icon={SectionIcon(Category.QUOTE)}
                    size="xs"
                    style={{ marginRight: '5px' }}
                    color="blue"
                    beatFade
                  />{' '}
                  <Link to={`/quote`}>Quote</Link>
                </QuoteTitle>
                {quotes &&
                  quotes.map((quote) => (
                    <>
                      <QuoteContent>
                        <Link to={`/quote/${quote.slug}`}>
                          {extractText(
                            quote!.content!.childMarkdownRemark!.html ?? '',
                          )}
                        </Link>
                      </QuoteContent>
                      <AuthorContainer>
                        - {quote.title && `${quote.title} / `}
                        {quote.author}
                      </AuthorContainer>
                    </>
                  ))}
              </QuoteContainer>
              <GalleryContainer>
                <GalleryTitle>
                  <FontAwesomeIcon
                    icon={faPalette}
                    size="xs"
                    style={{ marginRight: '5px' }}
                    color="orange"
                    spin
                  />{' '}
                  <Link to={`/ai/gallery`}>Prompt Gallery</Link>
                </GalleryTitle>
                <GalleryContent>
                  {galleries &&
                    galleries.map((gallery) => (
                      <GalleryCard
                        key={gallery.slug}
                        gallery={gallery as any}
                      />
                    ))}
                </GalleryContent>
              </GalleryContainer>
            </TopContentContainer>
          </TopBackground>

          <PostTitle>
            지금 쓰러 갑니다 ...{' '}
            <FontAwesomeIcon
              icon={faPersonRunning}
              size="xs"
              style={{ marginLeft: '10px' }}
              color="darkred"
              bounce
            />
          </PostTitle>
          <PostContainer>
            {posts &&
              posts.map((post) => (
                <MainPostCard key={post.slug} post={post as any} />
              ))}
          </PostContainer>
        </MainContainer>
      </ContentContainer>
    </Layout>
  );
}

export const query = graphql`
  query MainData {
    allContentfulMoztiqBlog(sort: { releaseDate: DESC }, limit: 10) {
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
    allContentfulGallery(
      filter: { category: { eq: "ai" } }
      sort: { createdAt: DESC }
      limit: 1
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
    allContentfulQuote(sort: { createdAt: DESC }, limit: 1) {
      nodes {
        id
        title
        slug
        author
        category
        content {
          childMarkdownRemark {
            excerpt
            html
          }
        }
      }
    }
  }
`;

export const Head = () => {
  return (
    <Seo
      title={'HOME'}
      description={'MOZTIQ, Experimental Personal Logs'}
      url={`/`}
    />
  );
};
