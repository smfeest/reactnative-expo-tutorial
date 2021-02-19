import { StatusBar } from 'expo-status-bar';
import React, { FunctionComponent } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const App: FunctionComponent = () => (
  <SafeAreaView style={styles.container}>
    <Text>Open up App.tsx to start working on your app!</Text>
    <StatusBar style="auto" />
  </SafeAreaView>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
