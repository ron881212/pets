import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Button, Card, Surface, Text, Paragraph, List } from 'react-native-paper';
import Menu from '../assets/homes/menu.svg'
import Back from '../assets/homes/back.svg'

export default function HomeHeader({navigation}:any) {
    return(
        <List.Item
          title='Home'
          titleStyle={styles.title}
          left={props => 
            <Back height={20} width={20} style={styles.back}/>
          }
          right={props => 
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
            <Menu height={20} width={20} style={styles.menu}/>
            </TouchableOpacity>
          }
          style={{marginTop:20,padding:0}}
        />
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        color:'black', 
        fontSize:20, 
        fontWeight: "500",
        textAlign:'center'
    },
    back: {
      marginLeft:20,
      alignSelf:'center'
    },
    menu: {
      marginRight:20,
      alignSelf:'center'
    },
})