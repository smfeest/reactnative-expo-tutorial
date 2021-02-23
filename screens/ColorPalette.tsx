import { RouteProp } from '@react-navigation/native';
import React, { FunctionComponent } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ColorBox from '../components/ColorBox';
import { MainStackParamList } from '../MainStackParamList';

const ColorPalette: FunctionComponent<{
  route: RouteProp<MainStackParamList, 'ColorPalette'>;
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
