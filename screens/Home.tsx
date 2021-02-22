import React, { FunctionComponent } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { SOLARIZED_COLORS } from '../ColorPalettes';
import { RootStackParamList } from '../RootStackParamList';

const Home: FunctionComponent<{
  navigation: NavigationProp<RootStackParamList>;
}> = ({ navigation: { navigate } }) => (
  <View>
    <TouchableOpacity
      onPress={() =>
        navigate('ColorPalette', {
          paletteName: 'Solarized',
          colors: SOLARIZED_COLORS,
        })
      }
    >
      <Text>Solarized</Text>
    </TouchableOpacity>
  </View>
);

export default Home;
