import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Button from './src/components/Button/button';
import Header from './src/components/Header/header';

const App = () => {
  return (
    <SafeAreaView>
      <Header />
      <Button corFundo="#B0E0E6">Continue</Button>
      <Button corFundo="red">Finish</Button>
      <Button corFundo="#4B0082">Exit</Button>
      <Button corFundo="#000000">Cancel</Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
