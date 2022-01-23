import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Appearance} from 'react-native';
import {Theme} from '../assets/darkmode';

interface ThemeState {
  theme: Theme;
}

const initialState = {theme: Appearance.getColorScheme()} as ThemeState;

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    update(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
    },
  },
});

export const {update} = themeSlice.actions;
export default themeSlice.reducer;
