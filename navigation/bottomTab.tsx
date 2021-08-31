import * as React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {NavigationContainer, StackActions} from '@react-navigation/native';
import Bookmark from '../screens/Bookmark';
import Home from '../screens/Home';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';
import HomeIcon from '../assets/tabs/home.svg';
import HomeIcon_02 from '../assets/tabs/home_02.svg';
import BookIcon from '../assets/tabs/bookmark.svg';
import BookIcon_02 from '../assets/tabs/bookmark_02.svg';
import ProfileIcon from '../assets/tabs/profile.svg';
import ProfileIcon_02 from '../assets/tabs/profile_02.svg';
import NotificationIcon from '../assets/tabs/notification.svg';
import NotificationIcon_02 from '../assets/tabs/notification_02.svg';
import AddIcon from '../assets/tabs/add.svg';

function Add() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text>Add screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        // activeTintColor: '#e91e63',
        style: {
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          borderColor: 'transparent',
          overflow: 'hidden',
          backgroundColor: '#00B4D2', // or #66BEC5
          height: '10%',
          position: 'absolute',
        },
        tabStyle: {
          marginTop: '5%',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ' ',
          tabBarIcon: ({focused /*size*/}) =>
            focused ? <HomeIcon_02 /> : <HomeIcon />,
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          tabBarLabel: ' ',
          tabBarIcon: ({focused /*size*/}) =>
            focused ? <BookIcon_02 /> : <BookIcon />,
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarLabel: ' ',
          tabBarIcon: (/*{color, size}*/) => (
            <AddIcon style={{marginLeft: 15}} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: ' ',
          tabBarIcon: ({focused /*size*/}) =>
            focused ? <NotificationIcon_02 /> : <NotificationIcon />,
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ' ',
          tabBarIcon: ({focused /*size*/}) =>
            focused ? <ProfileIcon_02 /> : <ProfileIcon />,
        }}
      />
    </Tab.Navigator>
  );
}
