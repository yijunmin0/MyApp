import React, {useEffect} from 'react';
import {Appearance, StyleSheet} from 'react-native';
import {Text} from './src/assets/customComponents/Text';
import {View} from './src/assets/customComponents/View';
import {SafeAreaView} from './src/assets/customComponents/SafeAreaView';
import {useDispatch, useSelector} from 'react-redux';
import {ThemeMode, update} from './src/store/themeSlice';
import {AppDispatch} from './src/store/store';
import {RootState} from './src/store/rootReducer';
import {Theme} from './src/assets/darkmode';
import {useState} from 'react';
import {ThemeScreen} from './src/screens/ThemeScreen';

const App = function () {
  const dispatch = useDispatch<AppDispatch>();
  const [appTheme, setAppTheme] = useState<Theme>(Appearance.getColorScheme());
  const mode = useSelector<RootState, ThemeMode>(state => state.theme.mode);
  useEffect(() => {
    Appearance.addChangeListener(scheme => {
      setAppTheme(scheme.colorScheme);
    });
    console.log(appTheme);
    mode === 'app' ? dispatch(update(appTheme)) : dispatch(update(mode));
    console.log(mode);
  });
  return (
    <SafeAreaView isTheme themeSpecific="major" style={styles.SafeAreaView}>
      <View style={styles.view} isTheme themeSpecific="major">
        <Text isTheme themeSpecific="minor" sizeLevel={5}>
          1235678912312fdㅇㅇ
        </Text>
        <ThemeScreen />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {flex: 1},
  view: {flex: 1, paddingHorizontal: 16},
});

export default App;
