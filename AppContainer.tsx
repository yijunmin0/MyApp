import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import store from './src/store/store';

const AppContainer = function () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppContainer;
