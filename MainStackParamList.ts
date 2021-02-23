import { Palette } from './Palette';

export type MainStackParamList = {
  Home: { newPalette?: Palette };
  ColorPalette: Palette;
};
