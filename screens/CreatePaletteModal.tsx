import React, { FunctionComponent, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const CreatePaletteModal: FunctionComponent = () => {
  const [paletteName, setPaletteName] = useState('');

  return (
    <View>
      <Text style={styles.inputLabel}>Palette name</Text>
      <TextInput
        value={paletteName}
        onChangeText={setPaletteName}
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default CreatePaletteModal;
