import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Text} from './src/assets/Text';
import {View} from './src/assets/View';

const App = function () {
  return (
    <SafeAreaView>
      <View>
        <Text sizeLevel={5}>12356789</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
