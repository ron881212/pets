import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  useWindowDimensions
} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTab from './bottomTab'
import Draw from '../screens/Draw'

const RootDrawer = createDrawerNavigator()

export default function drawTab(){
    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;

    return (
      <NavigationContainer>
        <RootDrawer.Navigator
          drawerType={isLargeScreen ? 'permanent' : 'front'}
          drawerStyle={isLargeScreen ? null : { width: '50%' }}
          drawerPosition="right"
          overlayColor="transparent"
          drawerContent={(props)=> { return <Draw {...props}/> } }
        >
          <RootDrawer.Screen name="Bottom" component={BottomTab} />
        </RootDrawer.Navigator>
      </NavigationContainer>
    );
  };