import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Button, Searchbar, Surface, Text, Paragraph, List } from 'react-native-paper';
import { cardWidth } from '../constants'
import Glass from '../assets/homes/searchButton.svg'

export default function HomeHeader() {

    const [searchQuery, setSearchQuery] = React.useState<string>('');

    const onChangeSearch = (query:string) => setSearchQuery(query);

    return(
        <View style={styles.container}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.search}
          iconColor='white'
        />
        <Glass style={styles.glass} height={65} width={65}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      alignSelf: 'center',
    },
    search: {
      marginTop:20,
    //   alignSelf: 'center',
      justifyContent: 'center',
      width: cardWidth,
      borderRadius: 20,
      height:65,
      marginBottom:20
    },
    glass: {
      marginBottom:20,
      marginTop:20,
      position:'absolute',
      right:0
    }
})