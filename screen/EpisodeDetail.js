import React, {useState, useEffect}  from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from 'react-native';
import Character from '../components/Character';

const EpisodeDetail = ({route, navigation}) => {
  const {id} = route.params;
  const [episodeDetails, setEpisodeDetails] = useState(null);

  const fetchData = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode/${id}`,
    );
    const json = await response.json();
    setEpisodeDetails({data: json});
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      {episodeDetails && (
        <>
          <Text>{episodeDetails.data.name}</Text>
          <Text>{episodeDetails.data.air_date}</Text>
          <Text>{episodeDetails.data.episode}</Text>
          <View style={styles.sectionContainer}>
            <FlatList
              data={episodeDetails.data.characters}
              keyExtractor={(x, i) => i}
              horizontal
              renderItem={({item}) => (
                <Character url={item} navigation={navigation}/>
              )}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default EpisodeDetail;
