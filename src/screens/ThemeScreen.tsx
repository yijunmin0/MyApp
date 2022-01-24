import React from 'react';
import {Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {View} from '../assets/customComponents/View';
import {modeChange} from '../store/themeSlice';

export const ThemeScreen = function () {
  const dispatch = useDispatch();
  return (
    <View>
      <Button
        title="light"
        onPress={() => {
          dispatch(modeChange('light'));
        }}
      />
      <Button
        title="dark"
        onPress={() => {
          dispatch(modeChange('dark'));
        }}
      />
      <Button
        title="app"
        onPress={() => {
          dispatch(modeChange('device'));
        }}
      />
    </View>
  );
};
