// bgColor
// lightTheme<=>darkTheme
// white<=>black
// DDGreyNormal <=> DDGreyNormal
// DDGreyLight <=> DDGreyDark

// textColor
// lightTheme<=>darkTheme
// black<=>white

import {Appearance} from 'react-native';
import {DDGreyDark, DDGreyLight, DDGreyNormal} from './defaultDesign';

export type Theme = ReturnType<typeof Appearance.getColorScheme>;

export type ThemeType = {
  major: {
    bgColor: string;
    textColor: string;
  };
  minor: {
    bgColor: string;
    textColor: string;
  };
};

export type ThemeSelcetion = 'major' | 'minor';

export const lightTheme = {
  major: {
    bgColor: 'white',
    textColor: 'black',
  },
  minor: {
    bgColor: DDGreyLight,
    textColor: 'black',
  },
};

export const darkTheme = {
  major: {
    bgColor: DDGreyDark,
    textColor: 'white',
  },
  minor: {
    bgColor: DDGreyNormal,
    textColor: 'white',
  },
};
