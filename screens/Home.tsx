import React, {
  FunctionComponent,
  useEffect,
  useCallback,
  useState,
} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';

import { Palette } from '../Palette';
import { MainStackParamList } from '../MainStackParamList';

import PalettePreview from '../components/PalettePreview';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../RootStackParamList';

type HomeNavigationProp = CompositeNavigationProp<
  StackNavigationProp<MainStackParamList, 'Home'>,
  StackNavigationProp<RootStackParamList>
>;

const Home: FunctionComponent<{
  navigation: HomeNavigationProp;
  route: RouteProp<MainStackParamList, 'Home'>;
}> = ({ navigation: { navigate }, route }) => {
  const newPalette = route.params?.newPalette;

  const [palettes, setPalettes] = useState<Palette[]>([]);
  const [remotePalettes, setRemotePalettes] = useState<Palette[]>([]);
  const [localPalettes, setLocalPalettes] = useState<Palette[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchPalettes = useCallback(async () => {
    const response = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes'
    );
    setRemotePalettes(await response.json());
  }, [setRemotePalettes]);

  useEffect(() => {
    fetchPalettes();
  }, [fetchPalettes]);

  useEffect(() => {
    if (newPalette) {
      setLocalPalettes((oldPalettes) => oldPalettes.concat(newPalette));
    }
  }, [setLocalPalettes, newPalette]);

  useEffect(() => setPalettes(remotePalettes.concat(localPalettes)), [
    setPalettes,
    remotePalettes,
    localPalettes,
  ]);

  const refresh = useCallback(async () => {
    try {
      setIsRefreshing(true);
      await fetchPalettes();
    } finally {
      setIsRefreshing(false);
    }
  }, [setIsRefreshing, fetchPalettes]);

  return (
    <FlatList
      data={palettes}
      renderItem={({ item: palette }) => (
        <TouchableOpacity onPress={() => navigate('ColorPalette', palette)}>
          <PalettePreview {...palette} />
        </TouchableOpacity>
      )}
      keyExtractor={({ paletteName }) => paletteName}
      refreshing={isRefreshing}
      onRefresh={refresh}
      style={styles.list}
      ListHeaderComponent={
        <View style={styles.addPaletteButton}>
          <Button
            onPress={() => navigate('CreatePalette')}
            title="Create new palette"
          />
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  addPaletteButton: {
    marginTop: 15,
  },
  list: {
    paddingHorizontal: 15,
  },
});

export default Home;
