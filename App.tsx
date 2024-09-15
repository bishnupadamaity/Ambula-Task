import 'react-native-gesture-handler'
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '~/utils/NavigationUtils';
import Router from '~/Router';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <NativeBaseProvider>
        <Router />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
