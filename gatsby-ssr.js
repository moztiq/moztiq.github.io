import React from 'react';
import theme from './src/theme/theme';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <RecoilRoot>{element}</RecoilRoot>
  </ThemeProvider>
);
