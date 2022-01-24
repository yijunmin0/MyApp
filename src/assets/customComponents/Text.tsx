import React, {FC} from 'react';
import {
  Text as BaseText,
  StyleSheet,
  TextProps as BaseTextProps,
  Platform,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {darkTheme, lightTheme, Theme, ThemeSelcetion} from '../darkmode';

type FontSizeLevel = 1 | 2 | 3 | 4 | 5;

interface TextProps extends BaseTextProps {
  sizeLevel?: FontSizeLevel;
  isTheme?: boolean;
  themeSelcetion?: ThemeSelcetion;
}

export const Text: FC<TextProps> = ({
  style,
  sizeLevel = 2, //defaultSize
  children,
  isTheme = true,
  themeSelcetion = 'major',
  ...props
}) => {
  const theme = useSelector<RootState, Theme>(state => state.theme.theme);
  return (
    <BaseText
      style={[
        styles.font,
        isTheme && {
          color:
            theme === 'dark'
              ? darkTheme[themeSelcetion].textColor
              : lightTheme[themeSelcetion].textColor,
          //다크모드를 지원하지 않는 기기는 자동으로 lightTheme이 됨
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
