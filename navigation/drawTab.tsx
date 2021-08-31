import React from 'react';
import {useWindowDimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTab from './bottomTab';
import Draw from '../screens/Draw';
import WalkthroughScreen from './WalkthroughScreen';

const RootDrawer = createDrawerNavigator();

export default function DrawTab() {
  // const dimensions = useWindowDimensions();
  // const isLargeScreen = dimensions.width >= 768;

  return (
    <NavigationContainer>
      <RootDrawer.Navigator
        drawerType={isLargeScreen ? 'permanent' : 'front'}
        drawerStyle={isLargeScreen ? null : {width: '50%'}}
        drawerPosition="right"
        overlayColor="transparent"
        drawerContent={(props) => {
          return <Draw {...props} />;
        }}>
        <RootDrawer.Screen name="Bottom" component={BottomTab} />
        <RootDrawer.Screen name="WalkThrough" component={WalkthroughScreen} />
      </RootDrawer.Navigator>
    </NavigationContainer>
  );
}
