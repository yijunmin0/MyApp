import React, {FC} from 'react';
import {View as BaseView, ViewProps as BaseViewProps} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {darkTheme, lightTheme, Theme, ThemeSelcetion} from '../darkmode';

interface ViewProps extends BaseViewProps {
  isTheme?: boolean;
  themeSelcetion?: ThemeSelcetion;
}

export const View: FC<ViewProps> = ({
  isTheme = true,
  themeSelcetion = 'major',
  style,
  ...props
}) => {
  const theme = useSelector<RootState, Theme>(state => state.theme.theme);
  return (
    <BaseView
      style={[
        isTheme && {
          backgroundColor:
            theme === 'dark'
              ? darkTheme[themeSelcetion].bgColor
              : lightTheme[themeSelcetion].bgColor,
          //다크모드를 지원하지 않는 기기는 자동으로 lightTheme이 됨
        },
        style,
      ]}>
      {props.children}
    </BaseView>
  );
};
