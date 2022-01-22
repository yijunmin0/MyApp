import React, {FC} from 'react';
import {
  Text as BaseText,
  StyleSheet,
  TextProps as BaseTextProps,
  Platform,
} from 'react-native';

type FontSizeLevel = 1 | 2 | 3 | 4 | 5;

interface TextProps extends BaseTextProps {
  sizeLevel?: FontSizeLevel;
}

export const Text: FC<TextProps> = ({
  style,
  sizeLevel = 2, //defaultSize
  children,
  ...props
}) => {
  return (
    <BaseText
      style={[
        styles.font,
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
    fontFamily: Platform.OS === 'ios' ? 'Gill Sans' : 'sans-serif',
    fontWeight: '400',
  },
});
