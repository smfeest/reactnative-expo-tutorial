import React, {
  FunctionComponent,
  useEffect,
  useCallback,
  useState,
} from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { Palette } from '../Palette';
import { RootStackParamList } from '../RootStackParamList';

import PalettePreview from '../components/PalettePreview';

const Home: FunctionComponent<{
  navigation: NavigationProp<RootStackParamList>;
}> = ({ navigation: { navigate } }) => {
  const [palettes, setPalettes] = useState<Palette[]>([]);

  const fetchPalettes = useCallback(async () => {
    const response = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes'
    );
    setPalettes(await response.json());
  }, []);

  useEffect(() => {
    fetchPalettes();
  }, [fetchPalettes]);

  return (
    <FlatList
      data={palettes}
      renderItem={({ item: palette }) => (
        <TouchableOpacity onPress={() => navigate('ColorPalette', palette)}>
          <PalettePreview {...palette} />
        </TouchableOpacity>
      )}
      keyExtractor={({ paletteName }) => paletteName}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 15,
  },
});

export default Home;
