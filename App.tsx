import React from 'react';
import Router from '~/Router';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '~/utils/NavigationUtils';

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
