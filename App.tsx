import React, { FunctionComponent } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const App: FunctionComponent = () => (
  <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.intro}>Here are some boxes of different colours</Text>
      <Text style={[styles.colorBox, styles.cyan]}>Cyan #2aa198</Text>
      <Text style={[styles.colorBox, styles.blue]}>Blue #268bd2</Text>
      <Text style={[styles.colorBox, styles.magenta]}>Magenta #d33682</Text>
      <Text style={[styles.colorBox, styles.orange]}>Orange #cb4b16</Text>
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
  colorBox: {
    borderRadius: 3,
    color: '#fff',
    marginTop: 10,
    padding: 5,
    textAlign: 'center',
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
