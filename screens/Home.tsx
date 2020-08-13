import * as React from 'react';
import { View, StyleSheet, SafeAreaView, Image } from 'react-native'
import { Button, Card, Surface, Text, Paragraph, List } from 'react-native-paper';
import AreaPets from '../components/AreaPets'
import HomeHeader from '../components/HomeHeader'
import PetSearch from '../components/PetSearch'

export default function Home(props:any) {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader {...props}/>
      <PetSearch />
      <AreaPets />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});