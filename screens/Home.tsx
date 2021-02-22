import React, { FunctionComponent } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { COLOR_PALETTES } from '../ColorPalettes';
import { RootStackParamList } from '../RootStackParamList';

const Home: FunctionComponent<{
  navigation: NavigationProp<RootStackParamList>;
}> = ({ navigation: { navigate } }) => (
  <FlatList
    data={COLOR_PALETTES}
    renderItem={({ item: palette }) => (
      <TouchableOpacity onPress={() => navigate('ColorPalette', palette)}>
        <Text>{palette.paletteName}</Text>
      </TouchableOpacity>
    )}
    keyExtractor={({ paletteName }) => paletteName}
  />
);

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 15,
  },
});

export default Home;
