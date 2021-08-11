import * as React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Button, Card, Surface, Text, Paragraph, List} from 'react-native-paper';
import Menu from '../assets/homes/menu.svg';
import Back from '../assets/homes/back.svg';

export default function Nearby({navigation}: any) {
  return (
    <View style={styles.container}>
      <List.Item
        title="Nearby"
        titleStyle={styles.title}
        right={(props) => (
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={styles.seeAll}>
            <Text>See all</Text>
          </TouchableOpacity>
        )}
        style={{padding: 0}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    //   alignItems: 'center',
    //   justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'left',
    marginLeft: 20,
  },
  seeAll: {
    alignSelf: 'flex-end',
    marginRight: 20,
  },
});
