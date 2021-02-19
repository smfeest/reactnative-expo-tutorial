import React, { FunctionComponent } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import ColorBox from './components/ColorBox';

const App: FunctionComponent = () => {
  const colorData = [
    { colorName: 'Cyan', hexCode: '#2aa198' },
    { colorName: 'Blue', hexCode: '#268bd2' },
    { colorName: 'Magenta', hexCode: '#d33682' },
    { colorName: 'Orange', hexCode: '#cb4b16' },
  ];

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.intro}>
          Here are some boxes of different colours
        </Text>
        <FlatList
          data={colorData}
          renderItem={({ item }) => <ColorBox {...item} />}
          keyExtractor={(item) => item.hexCode}
        />
      </View>
    </SafeAreaView>
  );
};

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
