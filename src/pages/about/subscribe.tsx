import * as React from 'react';
import type { PageProps } from 'gatsby';
import styled from 'styled-components';
import AboutLayout from '../../components/layout/AboutLayout';
import useScript from '../../hooks/useScript';
import Seo from '../../components/Seo';
import {
  Category,
  SectionDescription,
  SectionTitle,
} from '../../constants/common.constant';

const ContentWrapper = styled.div`
  padding: 50px 20%;
  font-size: 1rem;
  text-align: justify;

  p {
    line-height: 2;
    margin: 25px 0;

    strong {
      font-weight: 600;
      font-size: 1.5rem;
      color: ${(props) => props.theme.colors.accentColor};
    }
  }

  @media screen and (max-width: 768px) {
    padding: 100px 10%;
    width: 80%;
  }
`;

const CkWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const AboutPage: React.FC<PageProps> = () => {
  const { containerRef } = useScript({
    src: 'https://moztiq.ck.page/f9ec7f541d/index.js',
    async: 'true',
    'data-uid': 'f9ec7f541d',
  });

  return (
    <AboutLayout>
      <ContentWrapper>
        <CkWrapper id="ck" ref={containerRef} />
      </ContentWrapper>
    </AboutLayout>
  );
};

export default AboutPage;

export const Head = () => {
  return (
    <Seo
      title={`${SectionTitle(Category.ABOUT)} - Subscribe`}
      description={SectionDescription(Category.ABOUT)}
      url={`/about`}
    />
  );
};