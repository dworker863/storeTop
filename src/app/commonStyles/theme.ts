import { ITheme } from './IStyles';

export const commonTheme: ITheme = {
  colors: {
    primary: '#FF3A00',
    secondary: '#ff4d00',
    fontColor: '#1f1f1f',
    grey: '#4b4b4b',
    lightGrey: '#b2b7bb',
    superLightGrey: '#e8e8e8',
    lightYellow: '#ffca67',
    yellow: '#ffac3a',
    red: '#c82429',
    brown: '#70544f',
    lightBrown: '#a69895',
  },

  media: {
    extraLarge: '(min-width: 1280px)',
    large: '(min-width: 960px)',
    medium: '(min-width: 768px)',
    small: '(min-width: 576px)',
    extraSmall: '(max-width: 576px)',
  },
};
