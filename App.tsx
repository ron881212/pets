import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
// import {StyleSheet, Text, View} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import DrawerTab from './navigation/drawTab';
import {Provider as ReduxProvider} from 'react-redux';
import {StatusBar} from 'expo-status-bar';
// import {createStore, combineReducers} from 'redux';
import WalkthroughScreen from './navigation/WalkthroughScreen';

// const rootReducer = combineReducers({
//   setUser,
//   otherReducers
// All of our reducers go here seperated by commas
// });

// const store = createStore(rootReducer); // store for our ReduxProvider

export default function App() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscriber = firebase.auth().onAuthStateChanged((currentUser) => {
  //     setUser(currentUser);
  //   });

  //   return () => {
  //     unsubscriber();
  //   };
  // }, [user]);

  return (
    // <ReduxProvider store={store}>
    //   {user ? (
    //     <PaperProvider>
    //       <DrawerTab />
    //     </PaperProvider>
    //   ) : (
    <>
      <StatusBar />
      <WalkthroughScreen />
    </>
    //   )}
    // </ReduxProvider>
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
