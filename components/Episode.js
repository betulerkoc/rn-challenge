import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Episode = ({title, id, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Episode Detail', {
            id: id,
          })
        }>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#0099cc',
    backgroundColor: '#e6ffff',
    borderRadius: 10,
    height: 80
  },
});

export default Episode;
