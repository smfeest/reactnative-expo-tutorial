import { RouteProp } from '@react-navigation/native';
import React, { FunctionComponent } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ColorBox from '../components/ColorBox';
import { RootStackParamList } from '../RootStackParamList';

const ColorPalette: FunctionComponent<{
  route: RouteProp<RootStackParamList, 'ColorPalette'>;
}> = ({ route }) => {
  const { colors } = route.params;

  return (
    <FlatList
      data={colors}
      renderItem={({ item }) => <ColorBox {...item} />}
      keyExtractor={({ hexCode }) => hexCode}
      style={styles.list}
    />
  );
};

export default ColorPalette;

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 15,
  },
});
