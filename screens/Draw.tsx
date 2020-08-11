import React, {useState, useRef} from 'react';
import { View, TouchableOpacity, StyleSheet, SafeAreaView, Image, Alert } from 'react-native'
import { List, Divider } from 'react-native-paper';

export default function Draw({navigation}:any) {
  const [feed, setFeed] = useState<Boolean>(false)
  const [pet, setPet] = useState<Boolean>(false)
  const [profile, setProfile] = useState<Boolean>(false)
  const [favorite, setFavorite] = useState<Boolean>(false)
  // const radio = useRef<View | null>(null)
  // const focus = () => radio.current?.setNativeProps({style:{backgroundColor:'black'}})
  const feedRadio = () => {setFeed(true); setPet(false); setProfile(false); setFavorite(false);}
  const petRadio = () => {setPet(true); setFeed(false); setProfile(false); setFavorite(false);}
  const profileRadio = () => {setProfile(true); setPet(false); setFeed(false); setFavorite(false);}
  const favoriteRadio = () => {setFavorite(true); setPet(false); setProfile(false); setFeed(false);}
  return (
    <SafeAreaView style={styles.container}>

      <List.Section>

      <TouchableOpacity onPress={()=>navigation.closeDrawer()}>
      <Image source={require('../assets/drawer/close.png')} style={styles.close} />
      </TouchableOpacity>

      <Image source={require('../assets/avatarTemp.png')} style={styles.avatar}/>

      <List.Subheader style={styles.textName}>Ronald Glover</List.Subheader>

        <List.Item
          title="Feed"
          titleStyle={feed ? styles.activeLink : styles.textLink}
          style={feed ? styles.active : null}
          left={props => <List.Icon 
            icon={feed ? 
              require( '../assets/drawer/pet_02.png') : 
              require('../assets/drawer/pet.png')
            } 
          />}
          onPress={()=>feedRadio()}
        />

        <List.Item
          title="Add pet"
          titleStyle={pet ? styles.activeLink : styles.textLink}
          style={pet ? styles.active : null}
          left={props => <List.Icon 
            icon={pet ? 
              require( '../assets/drawer/plus_02.png') : 
              require('../assets/drawer/plus.png')
            } 
          />}
          onPress={()=>petRadio()}
        />
        <List.Item
          title="Profile"
          titleStyle={profile ? styles.activeLink : styles.textLink}
          style={profile ? styles.active : null}
          left={props => 
          <List.Icon 
            icon={profile ? 
              require('../assets/drawer/profile_02.png') : 
              require('../assets/drawer/profile.png')
            }
          />}
          onPress={()=>profileRadio()}
        />
        <List.Item
          title="Favorite"
          titleStyle={favorite ? styles.activeLink : styles.textLink}
          style={favorite ? styles.active : null}
          left={props => <List.Icon 
            icon={favorite ? 
              require('../assets/drawer/heart_02.png') : 
              require('../assets/drawer/heart.png')
            } 
          />}
          onPress={()=>favoriteRadio()}
        />

        <Divider style={styles.divider}/>
        
        <List.Item
          title="Sign Out"
          titleStyle={styles.textLink}
          left={props => <List.Icon 
            icon={require('../assets/drawer/logout.png')} 
          />}
        onPress={()=>Alert.alert("signOut")}
        />
      </List.Section>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3458'
  },
  divider: {
    backgroundColor:'white', 
    width:'80%', 
    alignSelf:'center',
    marginTop:15
  },
  textName: {
    color: 'white',
    fontSize: 25,
    marginTop: 20
  },
  textLink: {
    color: 'white',
    fontSize: 15,
  },
  activeLink: {
    color: '#F68685',
    fontSize: 15,
  },
  active: {
    // color: '#F68685',
    fontSize: 15,
    backgroundColor: 'rgba(246, 134, 133, 0.2)',
    borderRadius:15,
    marginLeft:15,
    marginRight:15,
  },
  close: {
    marginTop:15,
    marginRight:20,
    alignSelf:'flex-end'
  },
  avatar: {
    marginTop: 40,
    height:100,
    width:100,
    borderRadius:25,
    marginLeft:20
  }
});