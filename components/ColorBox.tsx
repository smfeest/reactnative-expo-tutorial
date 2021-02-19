import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

const ColorBox: FunctionComponent<{ colorStyle: ViewStyle }> = ({
  children,
  colorStyle,
}) => (
  <View style={[styles.colorBox, colorStyle]}>
    <Text style={styles.boxText}>{children}</Text>
  </View>
);

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
