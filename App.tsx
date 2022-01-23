import React, {useEffect} from 'react';
import {Appearance, StyleSheet} from 'react-native';
import {Text} from './src/assets/customComponents/Text';
import {View} from './src/assets/customComponents/View';
import {SafeAreaView} from './src/assets/customComponents/SafeAreaView';
import {useDispatch} from 'react-redux';
import {update} from './src/store/themeSlice';
import {AppDispatch} from './src/store/store';
import {Theme} from './src/assets/darkmode';

const App = function () {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    Appearance.addChangeListener(scheme =>
      dispatch(update(scheme.colorScheme as Theme)),
    );
  });
  return (
    <SafeAreaView isTheme themeSpecific="major" style={styles.SafeAreaView}>
      <View style={styles.view} isTheme themeSpecific="major">
        <Text isTheme themeSpecific="minor" sizeLevel={5}>
          12356789
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {flex: 1},
  view: {flex: 1, paddingHorizontal: 16},
});

export default App;
