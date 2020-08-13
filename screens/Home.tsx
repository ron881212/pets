import * as React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import AreaPets from '../components/AreaPets'
import HomeHeader from '../components/HomeHeader'
import PetSearch from '../components/PetSearch'
import QuickPet from '../components/QuickPet'
import Nearby from '../navigation/nearby'
import NearbyCard from '../components/NearbyCard'

const screenHeight: number = Dimensions.get("screen").height

export default function Home(props:any) {

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader {...props}/>
      <ScrollView contentContainerStyle={{paddingBottom:80}}>
        <PetSearch />
        <AreaPets />
        <QuickPet />
        {/* <QuickPet /> */}
        <Nearby {...props}/>
        <NearbyCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexGrow:1,
    height:screenHeight,
    backgroundColor:'white',
    
  },
});