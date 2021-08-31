// import {AppLoading} from 'expo';
import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import Splash01 from '../assets/splash/splash01';
import Splash02 from '../assets/splash/splash02';
// import Color from '../constants/Color';
import {NavigationContainer} from '@react-navigation/native';
// import {useDispatch, useSelector} from 'react-redux';

// import Colors from '../../constants/Colors'
// import { User } from '../../models/User'
import Login from './Login';
import SignUpScreen from './SignUp';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const WalkthroughScreen = (props: any) => {
  // const [toggle, setToggle] = React.useState<boolean>(true);
  // const dispatch = useDispatch();
  // const navigation = useNavigation();

  React.useEffect(() => {
    // skips this screen if user logged in
    // if (user.email !== '') {
    //   navigation.navigate('ExploreScreen')
    // }
  }, []);

  // if (user !== null && user.email !== '') {
  //   return <AppLoading />
  // } else {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Swiper
          showsButtons
          showsPagination={false}
          autoplay
          autoplayTimeout={8}
          nextButton={
            <Button
              mode="contained"
              // style={{backgroundColor: toggle ? Color.red : Color.blue}}
              // onPress={() => setToggle(!toggle)}
            >
              Next
            </Button>
          }
          prevButton={<></>}
          buttonWrapperStyle={{
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
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
          <WalkthroughSlide
            text="Saving a life will change yours"
            subtext="We will help you to find your next best friend"
            index={3}
          />
        </Swiper>
        <ActionButtonGroup {...props} />
      </SafeAreaView>
    </NavigationContainer>
  );
};
// }

function WalkthroughSlide(props: {
  color?: string;
  index: number;
  text: string;
  subtext: string;
}) {
  const img = [<Splash01 />, <Splash02 />, <Splash01 />, <Splash02 />];
  return (
    <View style={styles.textContainer}>
      {img[props.index]}
      <View>
        <Text style={styles.textStyle}>{props.text}</Text>
        <Text style={styles.subtitle}>{props.subtext}</Text>
      </View>
    </View>
  );
}

function ActionButtonGroup({navigation}: any) {
  return (
    <View style={styles.containerRow}>
      <View style={{flexDirection: 'column', flex: 1}}>
        <Button
          mode="text"
          style={[styles.button, {}]}
          onPress={() => {
            navigation.navigate('LogIn');
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
      navigationOptions: {headerShown: false},
    },
    LogIn: {
      screen: Login,
      navigationOptions: {headerShown: false},
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: {headerShown: false},
    },
  })
);
