import React, { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CreatePaletteModal from './screens/CreatePaletteModal';
import MainStack from './screens/MainStack';
import { RootStackParamList } from './RootStackParamList';

const Stack = createStackNavigator<RootStackParamList>();

const App: FunctionComponent = () => (
  <NavigationContainer>
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Main"
        component={MainStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreatePalette"
        component={CreatePaletteModal}
        options={{ title: 'New color palette' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
