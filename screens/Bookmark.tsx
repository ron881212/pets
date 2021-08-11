import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Bookmark() {
  return (
    <View style={styles.container}>
      <Text>Bookmark screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
