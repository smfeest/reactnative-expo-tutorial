import React, { FunctionComponent } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import ColorBox from './components/ColorBox';

const App: FunctionComponent = () => (
  <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.intro}>Here are some boxes of different colours</Text>
      <ColorBox colorName="Cyan" hexCode="#2aa198" />
      <ColorBox colorName="Blue" hexCode="#268bd2" />
      <ColorBox colorName="Magenta" hexCode="#d33682" />
      <ColorBox colorName="Orange" hexCode="#cb4b16" />
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
});
