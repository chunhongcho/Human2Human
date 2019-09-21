import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Donate from './components/Donate';

export default function Main() {
  return (
    <View style={styles.container}>
      <Donate />
      <Text>Human2Human</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
