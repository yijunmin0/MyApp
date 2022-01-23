// bgColor
// lightTheme<=>darkTheme
// white<=>black
// DDGreyNormal <=> DDGreyNormal
// DDGreyLight <=> DDGreyDark

// textColor
// lightTheme<=>darkTheme
// black<=>white

import {DDGreyDark, DDGreyLight, DDGreyNormal} from '../defaultDesign';

export type Theme = {
  major: {
    bgColor: string;
    textColor: string;
  };
  minor: {
    bgColor: string;
    textColor: string;
  };
};

export type ThemeType = 'major' | 'minor';

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
