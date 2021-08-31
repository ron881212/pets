import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  Alert,
  Platform,
} from 'react-native';
import {Button, IconButton, TextInput} from 'react-native-paper';
import * as firebase from 'firebase';

const Login = (props: any) => {
  // static navigationOptions = {
  //   title: 'Sign Up',
  // };

  const [userName, setUserName] = useState<string | null | undefined>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [userID, setUserID] = useState<string | null | undefined>('');

  //add sendEmailVerification(ActionCodeSettings actionCodeSettings)
  const userSignUp = () => {
    if (password === confirmPassword) {
      firebase.default
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((success: any) => {
          if (success) {
            setEmail(firebase.default.auth().currentUser?.email);
            setUserID(firebase.default.auth().currentUser?.uid);
            // this.userInfo = firebase
            //   .firestore()
            //   .collection('Users')
            //   .doc(userID);;
            // firebase.firestore().runTransaction(async (transaction) => {
            //   const doc = await transaction.get(this.userInfo);
            //   if (!doc.exists) {
            //     transaction.set(this.userInfo, {
            //       Name: userName,
            //       Count: 0,
            //       Messages: 0,
            //     });;
            //   }
            // });
          }
        })
        .then((send: any) =>
          firebase.default.auth().currentUser?.sendEmailVerification()
        )
        .catch((error: any) => {
          if (error) {
            Alert.alert(error.code);
          }
        });
    } else if (password !== confirmPassword) {
      Alert.alert("Confirm password doesn't match");
    }
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        // style={styles.container}
        behavior="padding"
        enabled={Platform.OS === 'ios' ? true : false}>
        <TextInput
          placeholder="User Name"
          style={styles.form2}
          mode="outlined"
          onChangeText={(text) => setUserName(text)}
        />
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          mode="outlined"
          style={styles.form2}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          mode="outlined"
          style={styles.form2}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          placeholder="Confirm Password"
          autoCapitalize="none"
          secureTextEntry={true}
          mode="outlined"
          style={styles.form2}
          onChangeText={(text) => setConfirmPassword(text)}
        />

        <View style={styles.container2}>
          <Button
            style={styles.buttons}
            // onPress={() => props.navigation.navigate('LogIn')}
            icon="log-in">
            Log In
          </Button>
          <Button
            style={styles.buttons}
            onPress={() => userSignUp()}
            icon="user-plus">
            Sign Up
          </Button>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flexDirection: 'row',
  },
  form: {
    borderRadius: 50,
    borderWidth: 1,
    margin: 10,
    height: 50,
    borderColor: '#d6d7da',
    backgroundColor: 'rgba(255, 165, 0, 0.4)',
  },
  form2: {
    borderRadius: 50,
    borderWidth: 1,
    margin: 10,
    height: 50,
    borderColor: '#d6d7da',
    backgroundColor: 'rgba(200, 200, 200,0.7)',
  },
  buttons: {
    borderRadius: 50,
    borderWidth: 1,
    margin: 10,
    height: 50,
    width: 155,
    borderColor: '#d6d7da',
  },
});

export default Login;
