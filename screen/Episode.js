import React, {useState, useEffect}  from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';

import Button from '../components/Button';

const Episode = ({ navigation }) => {
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
      {episode && (
        <View style={styles.sectionContainer}>
          <FlatList
            data={episode.data}
            keyExtractor={(x, i) => i}
            renderItem={({item}) => <Button title={item.name} id={item.id} navigation={navigation}/>}
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
