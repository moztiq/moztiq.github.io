const tomato = {
  colors: {
    primary: 'rgba(255, 99, 71, 1)',
    light: 'rgb(252,205,197)',
    background: 'rgb(255,235,229)',
    white: 'rgba(255, 255, 255, 1)',
    black: 'rgba(0, 0, 0, 1)',
  },
};

const blue = {
  colors: {
    primary: 'rgb(0,90,133)',
    light: 'rgb(227,230,236)',
    background: 'rgb(240,242,246)',
    white: 'rgba(255, 255, 255, 1)',
    black: 'rgba(0, 0, 0, 1)',
  },
};

const graySeries = {
  gray50: 'rgb(250, 250, 250)',
  gray100: 'rgb(245, 245, 245)',
  gray200: 'rgb(229, 229, 229)',
  gray300: 'rgb(212, 212, 212)',
  gray400: 'rgb(163, 163, 163)',
  gray500: 'rgb(115, 115, 115)',
  gray600: 'rgb(82, 82, 82)',
  gray700: 'rgb(64, 64, 64)',
  gray800: 'rgb(38, 38, 38)',
  gray900: 'rgb(23, 23, 23)',
};

const whiteTheme = {
  colors: {
    textPrimary: 'rgba(0,90,133,0.8)',
    textLight: 'rgba(255, 255, 255, 0.8)',
    primary: 'rgba(0,90,133, 0.6)',
    light: 'rgba(236,239,243,0.6)',
    accentColor: 'rgb(50,164,7)',
    white: 'rgba(255, 255, 255)',
    black: 'rgba(0, 0, 0, 1)',
    background: graySeries.gray100,
    ...graySeries,
  },
};

export default whiteTheme;
