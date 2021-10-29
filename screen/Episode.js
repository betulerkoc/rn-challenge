import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';

import Button from '../components/Button';

const WINDOW = Dimensions.get('window');

const Episode = ({navigation}) => {
  const [episode, setEpisodes] = useState(null);

  const fetchData = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/episode');
    const json = await response.json();
    setEpisodes({data: json.results});
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.view}>
      <Image
        style={styles.logo}
        source={require('../image/rick-and-morty.png')}
      />
      {episode && (
        <View style={styles.container}>
          <FlatList
            data={episode.data}
            keyExtractor={(x, i) => i}
            renderItem={({item}) => (
              <Button title={item.name} id={item.id} navigation={navigation} />
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#66ff66',
  },
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  logo: {
    width: WINDOW.width,
    height: 100,
  },
});

export default Episode;
