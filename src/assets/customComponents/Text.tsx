import React, {FC} from 'react';
import {useState} from 'react';
import {
  Text as BaseText,
  StyleSheet,
  TextProps as BaseTextProps,
  Platform,
  Appearance,
} from 'react-native';
import {darkTheme, lightTheme, ThemeType} from '../darkmode/theme';

type FontSizeLevel = 1 | 2 | 3 | 4 | 5;

interface TextProps extends BaseTextProps {
  sizeLevel?: FontSizeLevel;
  isTheme?: boolean;
  themeType?: ThemeType;
}

export const Text: FC<TextProps> = ({
  style,
  sizeLevel = 2, //defaultSize
  children,
  isTheme = false,
  themeType = 'major',
  ...props
}) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => setTheme(scheme.colorScheme));
  return (
    <BaseText
      style={[
        styles.font,
        isTheme && {
          color:
            theme === 'dark'
              ? darkTheme[themeType].textColor
              : lightTheme[themeType].textColor,
        },
        // eslint-disable-next-line react-native/no-inline-styles
        {
          fontSize:
            sizeLevel === 1
              ? 10
              : sizeLevel === 2
              ? 12
              : sizeLevel === 3
              ? 14
              : sizeLevel === 4
              ? 16
              : sizeLevel === 5
              ? 18
              : 14,
        },
        style,
      ]}
      {...props}>
      {children}
    </BaseText>
  );
};

const styles = StyleSheet.create({
  font: {
    color: 'black',
    fontFamily: Platform.OS === 'ios' ? 'Gill Sans' : 'sans-serif',
    fontWeight: '400',
  },
});
