import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import Seo from '../components/Seo';
import MainPostCard from '../components/post/MainPostCard';
import GalleryCard from '../components/gallery/GalleryCard';
import { extractText } from '../utils/string.utils';
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
  justify-content: space-evenly;
  align-items: center;
  //background-color: rgba(0, 0, 0, 0.6);
  background: linear-gradient(
    135deg,
    rgb(22, 135, 155, 0.9) 5%,
    rgba(205, 187, 250, 0.8) 95%
  );
  //background: linear-gradient(
  //  135deg,
  //  rgba(57, 167, 201, 0.9) 20%,
  //  rgba(187, 158, 255, 0.8) 80%
  //);
  padding: 4rem 0 3rem 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const QuoteContainer = styled.ul`
  max-width: 50%;

  @media screen and (max-width: 768px) {
    max-width: 70%;
    margin-bottom: 5rem;
  }
`;

const QuoteTitle = styled.h1`
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 0.3rem;
  margin-bottom: 20px;
  a {
    color: ${(props) => props.theme.colors.white};
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
  color: ${(props) => props.theme.colors.gray100};

  a {
    color: ${(props) => props.theme.colors.gray100};
    text-decoration: none;
  }

  @media screen and (max-width: 430px) {
    font-size: 1.1rem;
  }
`;

const AuthorContainer = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.gray300};
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
`;

const GalleryTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 1.3px;
  text-decoration: underline;
  a {
    color: ${(props) => props.theme.colors.white};
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

  @keyframes bounce {
    0%,
    100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(10px);
    }
  }

  span {
    font-size: 1.5rem;
    color: blue;
    display: inline-block;
    animation: bounce 0.5s ease-in-out infinite;

    &:nth-child(2) {
      color: red;
      animation-delay: 0.25s;
    }
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
            <QuoteContainer>
              <QuoteTitle>
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
                <Link to={`/ai/gallery`}>Prompt Gallery</Link>
              </GalleryTitle>
              <GalleryContent>
                {galleries &&
                  galleries.map((gallery) => (
                    <GalleryCard key={gallery.slug} gallery={gallery as any} />
                  ))}
              </GalleryContent>
            </GalleryContainer>
          </TopBackground>

          <PostTitle>
            지금 쓰러 갑니다 <span>.</span>
            <span>.</span>
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
