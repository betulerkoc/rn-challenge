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
    setCharacterDetails({data: json});
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
              uri: characterDetails.data.image,
            }}
          />
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{characterDetails.data.name}</Text>
          </View>
          <View style={styles.detailText}>
            <Text>Gender: {characterDetails.data.gender}</Text>
            <Text>Species: {characterDetails.data.species}</Text>
            <Text>Origin: {characterDetails.data.origin.name}</Text>
            <Text>Location: {characterDetails.data.location.name}</Text>
            <Text>Status: {characterDetails.data.status}</Text>
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
