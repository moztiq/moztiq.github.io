import * as React from 'react';
import type { PageProps } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import QuoteAnimation from '../components/quote/QuoteAnimation';

const Content = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    position: absolute;
    padding: 10px 0;
  }
`;

const QuoteBox = styled.div`
  padding: 70px;
  width: 50%;
  color: ${(props) => props.theme.colors.textPrimary};
  background-color: ${(props) => props.theme.colors.background};

  @media screen and (max-width: 768px) {
    padding: 30px;
    width: 80%;
    margin-top: 30px;
  }
`;

const Quote = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  letter-spacing: 2px;

  @media screen and (max-width: 430px) {
    font-size: 1.6rem;
  }
`;

const Author = styled.div`
  margin-top: 100px;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: 2px;

  @media screen and (max-width: 430px) {
    font-size: 1.1rem;
  }
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Content>
        <QuoteBox>
          <Quote>
            <QuoteAnimation text={`모두들 안녕하십니까?`} />
          </Quote>
          <Author>- MOZTIQ -</Author>
        </QuoteBox>
      </Content>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => {
  return (
    <Seo
      title={'HOME'}
      description={'MOZTIQ, Experimental Personal Logs'}
      url={`/`}
    />
  );
};
