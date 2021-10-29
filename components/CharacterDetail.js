import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from 'react-native';

const CharacterDetail = ({route}) => {
  const {id} = route.params;

  const [characterDetails, setCharacterDetails] = useState(null);

  const fetchData = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`,
    );
    const json = await response.json();
    setCharacterDetails({data: json});
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      {console.log(characterDetails)}
      {characterDetails && (
        <>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: characterDetails.data.image,
            }}
          />
          <Text>Name: {characterDetails.data.name}</Text>
          <Text>Gender: {characterDetails.data.gender}</Text>
          <Text>Species: {characterDetails.data.species}</Text>
          <Text>Location: {characterDetails.data.location.name}</Text>
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

export default CharacterDetail;
