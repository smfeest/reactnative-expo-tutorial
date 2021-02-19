import React, { FunctionComponent } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import ColorBox from './components/ColorBox';

const App: FunctionComponent = () => (
  <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.intro}>Here are some boxes of different colours</Text>
      <ColorBox colorStyle={styles.cyan}>Cyan #2aa198</ColorBox>
      <ColorBox colorStyle={styles.blue}>Blue #268bd2</ColorBox>
      <ColorBox colorStyle={styles.magenta}>Magenta #d33682</ColorBox>
      <ColorBox colorStyle={styles.orange}>Orange #cb4b16</ColorBox>
    </View>
  </SafeAreaView>
);

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  intro: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
});
