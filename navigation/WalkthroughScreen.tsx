import {useNavigation} from '@react-navigation/native';
import {AppLoading} from 'expo';
import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Button} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
// import {useDispatch, useSelector} from 'react-redux';

// import Colors from '../../constants/Colors'
// import { User } from '../../models/User'
import Login from './Login';
import SignUpScreen from './SignUp';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const WalkthroughScreen = () => {
  // const dispatch = useDispatch();
  // const navigation = useNavigation();

  // if (user !== null && user.email !== '') {
  //   return <AppLoading />
  // } else {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Swiper
          showsButtons={false}
          showsPagination
          autoplay
          autoplayTimeout={8}
          nextButton
          // activeDotColor={Colors.green}
          style={{backgroundColor: 'white', padding: 0}}>
          <WalkthroughSlide
            text="Find your next best friend"
            subtext="We will help you find your next best friend"
            index={0}
          />

          <WalkthroughSlide
            text="Life is better with a pet"
            subtext="We will help you to find your next best friend"
            index={1}
          />

          <WalkthroughSlide
            text="Saving a life will change yours"
            subtext="We will help you to find your next best friend"
            index={2}
          />
        </Swiper>
      </ScrollView>
      <ActionButtonGroup />
    </SafeAreaView>
  );
};
// }

function WalkthroughSlide(props: {
  color?: string;
  index: number;
  text: string;
  subtext: string;
}) {
  const img = [
    require('../assets/splash/splash01.png'),
    require('../assets/splash/splash02.png'),
    require('../assets/splash/splash01.png'),
  ];
  return (
    <View style={styles.textContainer}>
      <Image style={styles.imageStyle} source={img[props.index]} />

      <View>
        <Text style={styles.textStyle}>{props.text}</Text>
        <Text style={styles.subtitle}>{props.subtext}</Text>
      </View>
    </View>
  );
}

function ActionButtonGroup() {
  // const navigation = useNavigation();

  return (
    <View style={styles.containerRow}>
      <View style={{flexDirection: 'column', flex: 1}}>
        <Button mode="contained" style={styles.button}>
          Next
        </Button>
        <Button
          mode="text"
          style={styles.button}
          onPress={() => {
            // navigation.navigate('Login');
          }}>
          Login
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  containerRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  button: {
    margin: 12,
  },
  buttonText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
  },
  logo: {
    zIndex: 2,
    width: 300,
    height: 100,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  imageStyle: {
    marginHorizontal: '2%',
    resizeMode: 'contain',
    // height: layout.width / 2,
    // width: layout.width / 2,
  },
  subtitle: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
    flexShrink: 1,
    marginHorizontal: '2%',
    marginVertical: '2%',
  },
  textStyle: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    flexShrink: 1,
    marginHorizontal: '2%',
    marginVertical: '2%',
  },
  textContainer: {
    // width: layout.width,
    // height: layout.height / 1.6,
    alignItems: 'center',
  },
});

export default createAppContainer(
  createStackNavigator({
    Walkthrough: {
      screen: WalkthroughScreen,
    },
    LogIn: {
      screen: Login,
    },
    SignUp: {
      screen: SignUpScreen,
    },
  })
);
