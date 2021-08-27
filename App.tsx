import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
// import {StyleSheet, Text, View, LogBox } from 'react-native';
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
import * as firebase from 'firebase';
import {firebaseDevConfig} from './config/Firebase';

// examples of logbox ignore commands
// LogBox.ignoreLogs([
//   'Setting a timer',
//   'Require cycle:',
//   'Animated: `useNativeDriver` was not specified.',
// ])

// const rootReducer = combineReducers({
//   setUser,
//   otherReducers
// All of our reducers go here seperated by commas
// });

// const store = createStore(rootReducer); // store for our ReduxProvider

const RootDrawer = createDrawerNavigator();

export default function App() {
  const [user, setUser] = useState<firebase.default.User | null>(null);
  const [loggedIn, isLoggedIn] = useState<boolean>(false);
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  if (firebase.default.apps.length === 0) {
    firebase.default.initializeApp(firebaseDevConfig);
  }

  useEffect(() => {
    const unsubscriber = firebase.default
      .auth()
      .onAuthStateChanged((currentUser) => {
        if (!user) {
          setUser(currentUser);
          isLoggedIn(false);
        } else {
          isLoggedIn(true);
        }
      });

    return () => {
      unsubscriber();
    };
  }, [user]);

  return (
    <PaperProvider>
      {/* <ReduxProvider store={store}> */}
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
      {/* </ReduxProvider> */}
    </PaperProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
