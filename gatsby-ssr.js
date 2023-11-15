import React from 'react';
import theme from './src/theme/theme';
import { ThemeProvider } from 'styled-components';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);
