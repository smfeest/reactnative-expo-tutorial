import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ColorBox: FunctionComponent<{ colorName: string; hexCode: string }> = ({
  colorName,
  hexCode,
}) => {
  const background = {
    backgroundColor: hexCode,
  };

  return (
    <View style={[styles.colorBox, background]}>
      <Text style={styles.boxText}>
        {colorName} {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  colorBox: {
    borderRadius: 3,
    marginTop: 10,
    padding: 5,
  },
  boxText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ColorBox;
