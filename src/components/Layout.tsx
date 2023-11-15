import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  font-family: 'Noto Sans KR', sans-serif;
  position: fixed;
`;

interface ILayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: ILayoutProps) {
  return (
    <Main>
      <Navigation />
      {children}
    </Main>
  );
}
