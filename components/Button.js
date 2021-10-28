import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({title, id, navigation}) => {

    return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Detail', {
          id: id
      })}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems:'center',
    justifyContent:'center',
    marginBottom: 10,
    padding: 10,
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    backgroundColor:'#fff',
    borderRadius:10,
    height:100
  },
});

export default Button;
