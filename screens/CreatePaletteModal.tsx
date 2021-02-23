import { StackNavigationProp } from '@react-navigation/stack';
import React, { FunctionComponent, useCallback, useState } from 'react';
import { Alert } from 'react-native';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { COLORS } from '../Colors';
import ColorToggle from '../components/ColorToggle';
import { Palette } from '../Palette';
import { RootStackParamList } from '../RootStackParamList';

const CreatePaletteModal: FunctionComponent<{
  navigation: StackNavigationProp<RootStackParamList, 'CreatePalette'>;
}> = ({ navigation: { navigate } }) => {
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

  const handleSubmit = useCallback(() => {
    if (!paletteName) {
      Alert.alert('Name required', 'Please give your new color palette a name');
      return;
    }
    if (selectedColors.size < 3) {
      Alert.alert(
        'More colors required',
        'Please select at least three colors'
      );
      return;
    }

    navigate('Main', {
      screen: 'Home',
      params: {
        newPalette: {
          paletteName,
          colors: COLORS.filter(({ hexCode }) => selectedColors.has(hexCode)),
        },
      },
    });
  }, [paletteName, selectedColors, navigate]);

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
      <View style={styles.buttonContainer}>
        <Button onPress={handleSubmit} title="Add palette" />
      </View>
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
    height: 40,
    marginHorizontal: 15,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginHorizontal: 15,
    paddingVertical: 10,
  },
});

export default CreatePaletteModal;
