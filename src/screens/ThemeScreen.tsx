import React from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Text} from '../assets/customComponents/Text';
import {View} from '../assets/customComponents/View';
import {DDMargin, DDPadding} from '../assets/defaultDesign';
import {RootState} from '../store/rootReducer';
import {modeChange} from '../store/themeSlice';

export const ThemeScreen = function () {
  const dispatch = useDispatch();
  const mode = useSelector<RootState>(state => state.theme.mode);
  return (
    <View style={styles.view}>
      <TouchableHighlight
        onPress={() => {
          dispatch(modeChange('dark'));
        }}>
        <View style={styles.modeBox}>
          <Text sizeLevel={5}>dark</Text>
          {mode === 'dark' ? <Text>selected</Text> : null}
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          dispatch(modeChange('light'));
        }}>
        <View style={styles.modeBox}>
          <Text sizeLevel={5}>light</Text>
          {mode === 'light' ? <Text>selected</Text> : null}
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          dispatch(modeChange('device'));
        }}>
        <View style={styles.modeBox}>
          <Text sizeLevel={5}>device</Text>
          {mode === 'device' ? <Text>selected</Text> : null}
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
  modeBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: DDPadding,
  },
});
