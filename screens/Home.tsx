import React, { FunctionComponent } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

const Home: FunctionComponent<{ navigation: NavigationProp<any> }> = ({
  navigation: { navigate },
}) => (
  <View>
    <TouchableOpacity onPress={() => navigate('ColorPalette')}>
      <Text>Solarized</Text>
    </TouchableOpacity>
  </View>
);

export default Home;
