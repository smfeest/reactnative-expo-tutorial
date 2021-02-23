import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';

const ColorToggle: FunctionComponent<{
  colorName: string;
  selected?: boolean;
  onSelectedChange?: (value: boolean) => void;
}> = ({ colorName, selected, onSelectedChange }) => {
  return (
    <View style={styles.container}>
      <Text>{colorName}</Text>
      <Switch value={selected} onValueChange={onSelectedChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 15,
  },
});

export default ColorToggle;
