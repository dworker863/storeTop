import { ITheme } from './IStyles';

export const commonTheme: ITheme = {
  colors: {
    primary: '#FF3A00',
    secondary: '#ff4d00',
    grey: '#1f1f1f',
    lightGrey: '#b2b7bb',
    lightYellow: '#ffca67',
    yellow: '#ffac3a',
    superLightGrey: '#bfb7b699',
    brown: '#70544f',
    lightBrown: '#a69895',
    red: '#C21313',
  },

  media: {
    extraLarge: '(min-width: 1280px)',
    large: '(min-width: 960px)',
    medium: '(min-width: 768px)',
    small: '(min-width: 576px)',
    extraSmall: '(max-width: 576px)',
  },
};
