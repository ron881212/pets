import * as React from 'react';
import { View, StyleSheet, SafeAreaView, Image, FlatList, ListRenderItem } from 'react-native'
import { Button, Card, Surface, Text, Paragraph, List } from 'react-native-paper';
import { red, blue, redOpacity, blueOpacity, cardWidth } from '../constants'
import Paw from '../assets/homes/bluePaw.svg'
import Map from '../assets/homes/redMap.svg'

export default function NearbyCard() {
    return(
    <Card style={styles.fullCard} elevation={3}>

    <View style={{flexDirection:'row'}}>
    <Card.Cover source={{ uri: 'https://images.pexels.com/photos/2954458/pexels-photo-2954458.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }} style={styles.petImg} />
    <List.Item
      title='Sam Wilson'
      description='Owner'
      titleStyle={{color:'black', fontSize:14,marginTop:20, fontWeight: "500",}}
      descriptionStyle={{color:'black', fontSize:12}}
      left={props => 
        <Image source={{uri: 'https://images.pexels.com/photos/2891007/pexels-photo-2891007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} style={styles.avatarImg}/>
      }
      style={{margin:0,padding:0,width:200,height:80}}
    />
    </View>
    <View style={{alignSelf:'flex-end',marginTop:-55, right:65}}>
    <List.Item
      title='Gender: male'
      titleStyle={{color:red, fontSize:10,height:15}}
      left={props => <Map height={20} width={20} />}
      style={styles.gender}
      />

    <List.Item
      title='350 E Erie Ave, Phila'
      titleStyle={{color:blue,fontSize:10,height:15}}
      left={props => <Paw height={20} width={20} />}
      style={styles.address}
      />
    </View>

    </Card>
    )
};

const styles = StyleSheet.create({
    avatarImg: {
      width: 41,
      height: 41,
      borderRadius:12,
      marginTop:20,
      marginLeft:20
    },
    petImg: {
      width: 140,
      height: 100,
      borderRadius:20,
      marginTop:18,
      marginLeft:20,
    },
    fullCard: {
      width: cardWidth,
      height: 130,
      borderRadius:20,
      marginTop:20,
      marginLeft:20,
      backgroundColor:'white',
    },
    gender: {
      height: 30,
      width: 140,
      borderRadius:10,
      justifyContent:'center',
    },
    address: {
      height: 30,
      width: 140,
      borderRadius:10,
      justifyContent:'center',

    }
  });