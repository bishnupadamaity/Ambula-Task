import 'react-native-gesture-handler'
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '~/utils/NavigationUtils';
import Router from '~/Router';
import { Provider } from 'react-redux';
import { store } from '~/store';


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <NativeBaseProvider>
          <Router />
        </NativeBaseProvider>
      </NavigationContainer></Provider>
  );
};

export default App;
