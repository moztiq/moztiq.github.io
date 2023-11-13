import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import styled from 'styled-components';

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  color: white;
  font-size: 40px;
  font-family: 'Noto Sans KR', sans-serif;
`;

const NotFoundPage: React.FC<PageProps> = () => {
  return <Main>Nice to meet you !</Main>;
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
