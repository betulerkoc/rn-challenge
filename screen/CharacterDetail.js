import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, Image, View} from 'react-native';

const CharacterDetail = ({route}) => {
  const {id} = route.params;

  const [characterDetails, setCharacterDetails] = useState(null);

  const fetchData = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`,
    );
    const json = await response.json();
    setCharacterDetails(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      {characterDetails && (
        <View style={styles.container}>
          <Image
            style={styles.characterImage}
            source={{
              uri: characterDetails.image,
            }}
          />
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{characterDetails.name}</Text>
          </View>
          <View>
            <Text>Gender: {characterDetails.gender}</Text>
            <Text>Species: {characterDetails.species}</Text>
            <Text>Origin: {characterDetails.origin.name}</Text>
            <Text>Location: {characterDetails.location.name}</Text>
            <Text>Status: {characterDetails.status}</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  },
  characterImage: {
    width: 200,
    height: 200,
  },
  header: {
    height: 100,
  },
  headerTitle: {
    marginTop: 10,
    fontSize: 25,
    color: '#0099cc',
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
});

export default CharacterDetail;
