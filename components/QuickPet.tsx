import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, ListRenderItem } from 'react-native'
import { Button, Card, Surface, Text, Paragraph, List } from 'react-native-paper';
import { SvgProps } from "react-native-svg";
import { pets } from '../DATA'
import Cats from '../assets/homes/cats.svg'
import Birds from '../assets/homes/birds.svg'
import Dogs from '../assets/homes/dogs.svg'

interface Pet {
    type:string;
    id:number;
}

const animals = [
    <Dogs height={60} width={60} />,
    <Cats height={60} width={60} />,
    <Birds height={60} width={60} />
];

const PetType = ({ type, id }:Pet) => (
    <Surface style={styles.card} key={id}>
      <View style={{justifyContent:'center'}}>
        {<>{animals[id]}</>}
        </View>
      <Text style={styles.title}>{type}</Text>
    </Surface>
);

export default function QickPet() {
    const renderItem: ListRenderItem<Pet> = ({item}) => (
      <PetType 
        id={item.id}
        type={item.type}
      />
    );
    return(
        <View style={styles.container}>
          <FlatList
            data={pets}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            contentContainerStyle={{paddingRight:20, paddingBottom:10}}
            showsHorizontalScrollIndicator={false}
          />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow:1,
        // height:300
    },
    title: {
        color:'black', 
        fontSize:16, 
        fontWeight: "500",
        alignSelf:'center',
        marginRight:5
    },
    animal: {
      alignSelf:'center',
      padding:0,
      margin:0
    },
    card: {
      marginTop:20,
      marginLeft:20,
      padding:0,
      width:140,
      height:80,
      borderRadius: 15,
      justifyContent:'space-around',
      flexDirection:'row',
    }
})