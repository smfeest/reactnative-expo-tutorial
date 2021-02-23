import React, { FunctionComponent, useCallback, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import { COLORS } from '../Colors';
import ColorToggle from '../components/ColorToggle';

const CreatePaletteModal: FunctionComponent = () => {
  const [paletteName, setPaletteName] = useState('');
  const [selectedColors, setSelectedColors] = useState(new Set<string>());

  const handleSelectedChange = useCallback(
    (selected: boolean, hexCode: string) =>
      setSelectedColors((oldColors) => {
        const newColors = new Set(oldColors);

        selected ? newColors.add(hexCode) : newColors.delete(hexCode);

        return newColors;
      }),
    [setSelectedColors]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>Palette name</Text>
      <TextInput
        value={paletteName}
        onChangeText={setPaletteName}
        style={styles.textInput}
      />
      <FlatList
        data={COLORS}
        renderItem={({ item: { colorName, hexCode } }) => (
          <ColorToggle
            colorName={colorName}
            selected={selectedColors.has(hexCode)}
            onSelectedChange={(selected) =>
              handleSelectedChange(selected, hexCode)
            }
          />
        )}
        extraData={selectedColors}
        keyExtractor={({ hexCode }) => hexCode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
  },
  inputLabel: {
    margin: 15,
    marginBottom: 5,
  },
  textInput: {
    borderColor: '#aaa',
    borderRadius: 3,
    borderWidth: 1,
    flexShrink: 1,
    height: 40,
    marginHorizontal: 15,
    paddingHorizontal: 10,
  },
});

export default CreatePaletteModal;
