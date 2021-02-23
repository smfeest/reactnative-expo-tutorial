import { NavigatorScreenParams } from '@react-navigation/native';
import { MainStackParamList } from './MainStackParamList';

export type RootStackParamList = {
  Main: NavigatorScreenParams<MainStackParamList>;
  CreatePalette: undefined;
};
