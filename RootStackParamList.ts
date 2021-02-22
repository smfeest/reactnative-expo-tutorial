import { PaletteColor } from './ColorPalettes';

export type RootStackParamList = {
  Home: undefined;
  ColorPalette: { paletteName: string; colors: PaletteColor[] };
};
