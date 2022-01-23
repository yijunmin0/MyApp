import {combineReducers} from 'redux';
import themeReducer from './themeSlice';

export const rootReducer = combineReducers({theme: themeReducer});
export type RootState = ReturnType<typeof rootReducer>;
