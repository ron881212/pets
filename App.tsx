import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
// import {StyleSheet, Text, View} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
// import DrawerTab from './navigation/drawTab';
import {Provider as ReduxProvider} from 'react-redux';
import {StatusBar} from 'expo-status-bar';
// import {createStore, combineReducers} from 'redux';
import WalkthroughScreen from './navigation/WalkthroughScreen';
import {useWindowDimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LandingPage from './navigation/bottomTab';
import Draw from './screens/Draw';

// const rootReducer = combineReducers({
//   setUser,
//   otherReducers
// All of our reducers go here seperated by commas
// });

// const store = createStore(rootReducer); // store for our ReduxProvider

const RootDrawer = createDrawerNavigator();

export default function App() {
  const [user, setUser] = useState();
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  // useEffect(() => {
  //   const unsubscriber = firebase.auth().onAuthStateChanged((currentUser) => {
  //     setUser(currentUser);
  //   });

  //   return () => {
  //     unsubscriber();
  //   };
  // }, [user]);

  return (
    <PaperProvider>
      <StatusBar style="auto" />
      {!user ? (
        <WalkthroughScreen />
      ) : (
        <NavigationContainer>
          <RootDrawer.Navigator
            initialRouteName="Landing"
            drawerType={isLargeScreen ? 'permanent' : 'front'}
            drawerStyle={isLargeScreen ? null : {width: '50%'}}
            drawerPosition="right"
            overlayColor="transparent"
            drawerContent={(props) => {
              return <Draw {...props} />;
            }}>
            <RootDrawer.Screen
              name="Landing"
              component={LandingPage}
              options={{headerShown: false}}
            />
          </RootDrawer.Navigator>
        </NavigationContainer>
      )}
    </PaperProvider>
  );
}

//<ReduxProvider store={store}>
//     {user ? (
//       <PaperProvider>
//         <DrawerTab />
//       </PaperProvider>
//     ) : (
//   <>
//     <StatusBar style="auto" />
//     <WalkthroughScreen />
//   </>
//      )}
//   </ReduxProvider>

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
