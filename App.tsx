import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Text} from './src/assets/customComponents/Text';
import {View} from './src/assets/customComponents/View';

const App = function () {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.view} isTheme themeType="major">
        <Text isTheme themeType="minor" sizeLevel={5}>
          12356789
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {flex: 1},
  view: {flex: 1},
});

export default App;
