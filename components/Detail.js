import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';

import {SafeAreaView, StyleSheet, Text} from 'react-native';

const Detail = ({route}) => {
  const {id} = route.params;
  console.log(id);

  const [episodeDetails, setEpisodeDetails] = useState(null);

  const fetchData = async () => {
    const response = await fetch(
      "https://rickandmortyapi.com/api/episode/8",
    );
    const json = await response.json();
    console.log(json)
    setEpisodeDetails({data: json});
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <Text>Hello</Text>
      {console.log(episodeDetails)}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default Detail;
