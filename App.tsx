import React from 'react';
import Router from '~/Router';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
    <NativeBaseProvider>
      <Router />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
