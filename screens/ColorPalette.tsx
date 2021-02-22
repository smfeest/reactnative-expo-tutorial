import { RouteProp } from '@react-navigation/native';
import React, { FunctionComponent } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

import ColorBox from '../components/ColorBox';
import { RootStackParamList } from '../RootStackParamList';

const ColorPalette: FunctionComponent<{
  route: RouteProp<RootStackParamList, 'ColorPalette'>;
}> = ({ route }) => {
  const { paletteName, colors } = route.params;

  return (
    <FlatList
      data={colors}
      renderItem={({ item }) => <ColorBox {...item} />}
      keyExtractor={({ hexCode }) => hexCode}
      ListHeaderComponent={() => (
        <Text style={styles.heading}>{paletteName}</Text>
      )}
      style={styles.list}
    />
  );
};

export default ColorPalette;

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
