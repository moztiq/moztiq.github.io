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
  text-align: justify;
  letter-spacing: 2px;

  div:last-child {
    margin: 50px 0;
    font-size: 1.2rem;
  }
  div:first-child {
    margin: 50px 0;
    font-size: 1.6rem;
  }

  @media screen and (max-width: 430px) {
    font-size: 1.6rem;
    div {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    div:last-child {
      font-size: 1.2rem;
      display: none;
    }
  }
`;

const Author = styled.div`
  margin-top: 40px;
  text-align: right;
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
            <QuoteAnimation
              text={`모두 개안심꺼?          <div>안 개안심꺼?          </div><div>저는 개안심더.</div>`}
            />
          </Quote>
          <Author>- MOZTIQ</Author>
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
