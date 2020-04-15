import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from './swiper';

export default function App() {
  return (
    <View style={styles.container}>
      <Swiper />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
