import * as React from 'react';
import { View, StyleSheet, SafeAreaView, Image, FlatList, ListRenderItem } from 'react-native'
import { Button, Card, Surface, Text, Paragraph, List } from 'react-native-paper';
import { red, blue, redOpacity, blueOpacity } from '../constants'
import { areaPets } from '../DATA'
import Heart from '../assets/homes/heart.svg'
import UnHeart from '../assets/homes/unHeart.svg'
import Message from '../assets/homes/message.svg'

interface Social {
  id: string;
  title: string;
  description: string;
  ownerImg: string;
  petImg: string;
  likes: string;
  comments: string;
}

const AreaCard = ({ id, title, description, ownerImg, petImg, likes, comments }:Social) => (
    <Card style={styles.fullCard} elevation={3}>
    <List.Item
      title={title}
      description={description} 
      titleStyle={{color:'black', fontSize:14,marginTop:20, fontWeight: "500",}}
      descriptionStyle={{color:'black', fontSize:12}}
      left={props => 
        <Image source={{uri: ownerImg}} style={styles.avatarImg}/>
      }
      right={props => 
        <UnHeart height={30} width={30} style={styles.unHeart}/>
      }
      style={{margin:0,padding:0}}
      key={id}
    />
    <Card.Cover source={{ uri: petImg }} style={styles.petImg} />

    <View style={{flexDirection:'row', marginLeft:20}}>

    <List.Item
      title={likes}
      titleStyle={{color:red, fontSize:12,bottom:2}}
      left={props => <Heart height={20} width={20} />}
      style={styles.likes}
    />

    <List.Item
      title={comments}
      titleStyle={{color:blue,fontSize:12,bottom:2}}
      left={props => <Message height={20} width={20}/>}
      style={styles.comments}
    />

    </View>

  </Card>
);

export default function AreaPets() {
    const renderItem: ListRenderItem<Social> = ({item}) => (
      <AreaCard 
        id={item.id}
        title={item.title} 
        description={item.description}
        ownerImg={item.ownerImg}
        petImg={item.petImg}
        likes={item.likes}
        comments={item.comments}
      />
    );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={areaPets}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        contentContainerStyle={{paddingRight:20,paddingBottom:10}}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // height:260
  },
  avatarImg: {
    width: 41,
    height: 41,
    borderRadius:12,
    marginTop:20,
    marginLeft:20
  },
  unHeart: {
    marginTop:20,
    marginRight:20
  },
  petImg: {
    width: 240,
    height: 178,
    borderRadius:20,
    marginTop:18,
    marginLeft:20,
  },
  fullCard: {
    width: 280,
    height: 330,
    borderRadius:20,
    marginTop:20,
    marginLeft:20,
    backgroundColor:'white',
  },
  likes: {
    height: 40,
    width: 70,
    backgroundColor:redOpacity,
    borderRadius:15,
    marginTop:12,
    marginRight:10
  },
  comments: {
    height: 40,
    width: 70,
    backgroundColor:blueOpacity,
    borderRadius:15,
    marginTop:12
  }
});