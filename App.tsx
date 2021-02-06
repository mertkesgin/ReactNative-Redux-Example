import React from 'react';
import { SafeAreaView,StyleSheet,StatusBar } from 'react-native';
import Router from './src/navigation/Router';

const App = () => {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <Router/>
    </>
  );
};

export default App;
