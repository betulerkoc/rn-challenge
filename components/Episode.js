import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';

import Button from './Button';

const Episode = () => {
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
    <SafeAreaView>
      {episode && console.log(episode.data)}
      {episode && (
        <View style={styles.sectionContainer}>
          <FlatList
            data={episode.data}
            keyExtractor={(x, i) => i}
            renderItem={({item}) => <Button title={item.name} id={item.id} />}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default Episode;
