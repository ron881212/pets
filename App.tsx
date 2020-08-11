import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import DrawerTab from './navigation/drawTab'
import BottomTab from './navigation/bottomTab'

export default function App() {
  return (
    <PaperProvider>
      {/* <BottomTab /> */}
      <DrawerTab />
    </PaperProvider>
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
