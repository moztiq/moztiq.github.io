import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import styled from 'styled-components';
import '../assets/css/reset.css';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const Content = styled.div`
  width: 100%;
  height: 100vh;
  background-color: antiquewhite;
  overflow-y: auto;
  display: flex;
  justify-content: center;
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Content>반갑습니다.</Content>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home" />;
