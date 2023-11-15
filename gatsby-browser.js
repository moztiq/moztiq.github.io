import './src/assets/css/reset.css';
// import 'prism-themes/themes/prism-cb.css';
// import 'prism-themes/themes/prism-atom-dark.css';
// import 'prism-themes/themes/prism-base16-ateliersulphurpool.light.min.css';
// import 'prism-themes/themes/prism-coy-without-shadows.min.css';
import 'prism-themes/themes/prism-night-owl.min.css';
import { ThemeProvider } from 'styled-components';
// import 'prism-themes/themes/prism-vs.min.css';
// import 'prism-themes/themes/prism-vsc-dark-plus.min.css';

import React from 'react';
import theme from './src/theme/theme';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);
