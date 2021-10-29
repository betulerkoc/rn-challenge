import React from 'react';
import {SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native';

const ImageCard = ({id, imgUrl, navigation}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('CharacterDetail', {
            id: id,
          })
        }>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: imgUrl,
          }}
        />
      </TouchableOpacity>
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
    margin: 10,
  },
});

export default ImageCard;
