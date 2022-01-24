import React, {FC} from 'react';
import {
  SafeAreaView as BaseSafeAreaView,
  ViewProps as BaseViewProps,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {darkTheme, lightTheme, ThemeSelcetion} from '../darkmode';

interface SafeAreaViewProps extends BaseViewProps {
  isTheme?: boolean;
  themeSelcetion?: ThemeSelcetion;
}

export const SafeAreaView: FC<SafeAreaViewProps> = ({
  isTheme = true,
  themeSelcetion = 'major',
  style,
  ...props
}) => {
  const theme = useSelector<RootState>(state => state.theme.theme);
  return (
    <BaseSafeAreaView
      style={[
        isTheme && {
          backgroundColor:
            theme === 'dark'
              ? darkTheme[themeSelcetion].bgColor
              : lightTheme[themeSelcetion].bgColor,
        },
        style,
      ]}>
      {props.children}
    </BaseSafeAreaView>
  );
};
