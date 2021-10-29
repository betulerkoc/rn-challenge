import React, {useState, useEffect}  from 'react';
import {SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Character = ({url, navigation}) => {
  const [character, setCharacter] = useState(null);

  const fetchData = async () => {
    const response = await fetch(url);
    const json = await response.json();
    setCharacter(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      {character && (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Character Detail', {
              id: character.id,
            })
          }>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: character.image,
            }}
          />
        </TouchableOpacity>
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
  margin:5,
    marginVertical: 30,
    borderRadius: 75
  },
});

export default Character;
