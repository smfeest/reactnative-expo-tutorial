import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TextStyle, View } from 'react-native';

const ColorBox: FunctionComponent<{ colorName: string; hexCode: string }> = ({
  colorName,
  hexCode,
}) => {
  const background = {
    backgroundColor: hexCode,
  };

  const textColor: TextStyle = {
    color: parseInt(hexCode.substr(1), 16) > 0xffffff * 0.9 ? '#000' : '#fff',
  };

  return (
    <View style={[styles.colorBox, background]}>
      <Text style={[styles.boxText, textColor]}>
        {colorName} {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  colorBox: {
    borderRadius: 3,
    marginBottom: 10,
    padding: 5,
  },
  boxText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ColorBox;
