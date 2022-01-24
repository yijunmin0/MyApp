import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {Text} from '../assets/customComponents/Text';
import {View} from '../assets/customComponents/View';
import {DDMargin} from '../assets/defaultDesign';
import {modeChange} from '../store/themeSlice';

export const ThemeScreen = function () {
  const dispatch = useDispatch();
  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={styles.selectionBox}
        onPress={() => {
          dispatch(modeChange('dark'));
        }}>
        <View>
          <Text sizeLevel={5}>dark</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.selectionBox}
        onPress={() => {
          dispatch(modeChange('light'));
        }}>
        <View>
          <Text sizeLevel={5}>light</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.selectionBox}
        onPress={() => {
          dispatch(modeChange('device'));
        }}>
        <View>
          <Text sizeLevel={5}>device</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
  selectionBox: {margin: DDMargin},
});
