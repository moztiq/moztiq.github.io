import * as React from 'react';
import type { PageProps } from 'gatsby';
import styled from 'styled-components';
import AboutLayout from '../../components/layout/AboutLayout';
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

const SubstackWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SubstackFrame = styled.iframe`
  width: 480px;
  height: 250px;
  border: 1px solid #eee;
  background-color: #f5f5f5;
  border-radius: 1.5rem;
`;

const AboutPage: React.FC<PageProps> = () => {
  return (
    <AboutLayout>
      <ContentWrapper>
        <SubstackWrapper>
          <SubstackFrame src="https://moztiq.substack.com/embed"></SubstackFrame>
        </SubstackWrapper>
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
