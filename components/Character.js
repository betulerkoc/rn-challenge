import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';

import {SafeAreaView, StyleSheet, Image} from 'react-native';
import ImageCard from './ImageCard';

const Character = ({url, navigation}) => {
  const [character, setCharacter] = useState(null);

  const fetchData = async () => {
    const response = await fetch(url);
    const json = await response.json();
    setCharacter({data: json});
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      {character && console.log(character.data.image)}
      {character && (
        <ImageCard navigation={navigation} imgUrl={character.data.image} id={character.data.id}/>
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
    width: 150,
    height: 150,
    margin: 10
  },
});

export default Character;
