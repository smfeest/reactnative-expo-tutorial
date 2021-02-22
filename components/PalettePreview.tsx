import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Palette } from '../ColorPalettes';

const PalettePreview: FunctionComponent<Palette> = ({
  paletteName,
  colors,
}) => {
  return (
    <View>
      <Text style={styles.paletteName}>{paletteName}</Text>
      <FlatList
        data={colors.slice(0, 5)}
        horizontal={true}
        keyExtractor={({ hexCode }) => hexCode}
        renderItem={({ item: { hexCode } }) => (
          <View style={[styles.colorSquare, { backgroundColor: hexCode }]} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  paletteName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 10,
  },
  colorSquare: {
    borderRadius: 3,
    marginBottom: 10,
    height: 40,
    width: 40,
    marginEnd: 10,
  },
});

export default PalettePreview;
