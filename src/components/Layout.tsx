import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Navigation from './Navigation';
import theme from '../theme/theme';

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
    <ThemeProvider theme={theme}>
      <Main>
        <Navigation></Navigation>
        {children}
      </Main>
    </ThemeProvider>
  );
}
