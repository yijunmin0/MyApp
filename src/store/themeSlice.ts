import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Appearance} from 'react-native';
import {Theme} from '../assets/darkmode';

interface ThemeState {
  theme: Theme;
  mode: ThemeMode;
}

export type ThemeMode = 'app' | 'dark' | 'light';

const initialState: ThemeState = {
  theme: Appearance.getColorScheme() as Theme,
  mode: 'app',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    update(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
    },
    modeChange(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
    },
  },
});

export const {update, modeChange} = themeSlice.actions;
export default themeSlice.reducer;
