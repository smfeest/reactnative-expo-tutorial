import React, { FunctionComponent } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { COLOR_PALETTES } from '../ColorPalettes';
import { RootStackParamList } from '../RootStackParamList';

import PalettePreview from '../components/PalettePreview';

const Home: FunctionComponent<{
  navigation: NavigationProp<RootStackParamList>;
}> = ({ navigation: { navigate } }) => (
  <FlatList
    data={COLOR_PALETTES}
    renderItem={({ item: palette }) => (
      <TouchableOpacity onPress={() => navigate('ColorPalette', palette)}>
        <PalettePreview {...palette} />
      </TouchableOpacity>
    )}
    keyExtractor={({ paletteName }) => paletteName}
    style={styles.list}
  />
);

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 15,
  },
});

export default Home;
