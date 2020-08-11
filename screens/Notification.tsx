import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default function Notification() {
  return (
    <View style={styles.container}>
      <Text>Notification screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
});