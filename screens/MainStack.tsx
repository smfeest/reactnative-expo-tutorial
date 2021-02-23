import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MainStackParamList } from '../MainStackParamList';
import Home from './Home';
import ColorPalette from './ColorPalette';

const Stack = createStackNavigator<MainStackParamList>();

const MainStack: FunctionComponent = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen
      name="ColorPalette"
      component={ColorPalette}
      options={({ route }) => ({ title: route.params.paletteName })}
    />
  </Stack.Navigator>
);

export default MainStack;
