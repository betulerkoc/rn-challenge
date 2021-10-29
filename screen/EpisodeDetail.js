import React, {useState, useEffect} from 'react';
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
          <View style={styles.header}>
            <Text style={styles.headerTitle}>
              {episodeDetails.data.name} Details
            </Text>
          </View>
          <View style={styles.detailText}>
            <Text>Date: {episodeDetails.data.air_date}</Text>
            <Text>Episode: {episodeDetails.data.episode}</Text>
            <Text>Characters: </Text>
              <FlatList
                data={episodeDetails.data.characters}
                keyExtractor={(x, i) => i}
                horizontal
                renderItem={({item}) => (
                  <Character url={item} navigation={navigation} />
                )}
              />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
  header: {
    height: 100,
    flexDirection: 'row',
  },
  headerTitle: {
    flex: 1,
    fontSize: 25,
    color: '#0099cc',
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
  detailText: {
    marginTop: 32,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginHorizontal: 15,
  },
});

export default EpisodeDetail;
