import React, {FC, useState} from 'react';
import {
  View as BaseView,
  ViewProps as BaseViewProps,
  Appearance,
} from 'react-native';
import {darkTheme, lightTheme, ThemeType} from '../darkmode/theme';

interface ViewProps extends BaseViewProps {
  isTheme?: boolean;
  themeType?: ThemeType;
}

export const View: FC<ViewProps> = ({
  isTheme,
  themeType = 'major',
  style,
  ...props
}) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => setTheme(scheme.colorScheme));
  return (
    <BaseView
      style={[
        isTheme && {
          backgroundColor:
            theme === 'dark'
              ? darkTheme[themeType].bgColor
              : lightTheme[themeType].bgColor,
        },
        style,
      ]}>
      {props.children}
    </BaseView>
  );
};
