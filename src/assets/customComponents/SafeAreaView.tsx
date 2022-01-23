import React, {FC} from 'react';
import {
  SafeAreaView as BaseSafeAreaView,
  ViewProps as BaseViewProps,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {darkTheme, lightTheme, ThemeSpecific} from '../darkmode';

interface SafeAreaViewProps extends BaseViewProps {
  isTheme?: boolean;
  themeSpecific?: ThemeSpecific;
}

export const SafeAreaView: FC<SafeAreaViewProps> = ({
  isTheme = true,
  themeSpecific = 'major',
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
              ? darkTheme[themeSpecific].bgColor
              : lightTheme[themeSpecific].bgColor,
        },
        style,
      ]}>
      {props.children}
    </BaseSafeAreaView>
  );
};
