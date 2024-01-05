import React, { useEffect } from 'react';
import { graphql, Link, navigate, PageProps } from 'gatsby';
import Seo from '../../components/Seo';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const GalleryDetailContainer = styled.main`
  font-family: 'Pretendard', sans-serif;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 1);

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 100px 0 50px 0;
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const Home = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
`;

const GalleryImageWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }
  @media screen and (max-width: 430px) {
    width: 95%;
  }
`;

const Title = styled.h1`
  width: 60%;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 1.5px;

  @media screen and (max-width: 1024px) {
    width: 80%;
    font-size: 1rem;
  }

  @media screen and (max-width: 430px) {
    font-size: 0.9rem;
  }
`;

const GalleryImage = styled.img`
  margin-top: 20px;
  width: 60%;
  box-shadow: 0 0 15px 8px rgba(255, 255, 255, 0.5);
  border-radius: 0.5rem;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;

const DescriptionWrapper = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    margin-top: 50px;
    width: 80%;
    justify-content: start;
    align-items: center;
  }

  @media screen and (max-width: 430px) {
    width: 95%;
    margin-bottom: 50px;
  }
`;

const DescriptionTitle = styled.h1`
  width: 80%;
  color: ${(props) => props.theme.colors.white};
  font-size: 1.7rem;
  font-weight: bold;
  letter-spacing: 1.5px;

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
    align-items: center;
  }

  @media screen and (max-width: 430px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  width: 80%;
  margin-top: 20px;
  color: ${(props) => props.theme.colors.white};
  line-height: 1.5;
  text-align: justify;

  @media screen and (max-width: 1024px) {
    font-size: 0.9rem;
  }
`;

export default function GalleryPage({ data }: PageProps<Queries.GalleryQuery>) {
  const gallery = data.contentfulGallery;
  const handleClose = async () => {
    await navigate(-1);
  };

  const handleEscKey = async (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      await handleClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscKey);

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return (
    <GalleryDetailContainer>
      <GalleryImageWrapper>
        <Title>{gallery?.title}</Title>
        <GalleryImage src={gallery?.headerImage?.url || ''} />
      </GalleryImageWrapper>
      <DescriptionWrapper>
        <DescriptionTitle>Prompt</DescriptionTitle>
        <Description
          dangerouslySetInnerHTML={{
            __html: gallery?.contents?.childMarkdownRemark?.html || '',
          }}
        />
      </DescriptionWrapper>
      <CloseIcon onClick={handleClose}>
        <FontAwesomeIcon icon={faClose} color="white" size="lg" />
      </CloseIcon>
      <Link to={`/`}>
        <Home>MOZTIQ.com</Home>
      </Link>
    </GalleryDetailContainer>
  );
}

export const query = graphql`
  query Gallery($slug: String!) {
    contentfulGallery(slug: { eq: $slug }) {
      id
      title
      author
      slug
      category
      headerImage {
        url
      }
      contents {
        childMarkdownRemark {
          html
          excerpt
        }
      }
    }
  }
`;

export const Head = ({ data }: PageProps<Queries.GalleryQuery>) => {
  const gallery = data.contentfulGallery;

  return (
    <Seo
      title={`${gallery?.author ? gallery?.author + ' - ' : ''}${
        gallery?.title || 'Gallery'
      }`}
      description={gallery?.contents?.childMarkdownRemark?.excerpt || ''}
      url={`/gallery/${gallery?.slug}`}
    />
  );
};
