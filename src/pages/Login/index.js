import React from 'react';
import { StyleSheet, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';

import {
  Container,
  Title,
  LoginText,
  NavTxtButton,
  SignUpText
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

export default function Login({ navigation }) {
  return (
    <ImageBackground
      source={require('../../images/login-wpp.jpg')}
      style={{ width: '100%', height: '100%' }}
    >
      <StatusBar backgroundColor="#221F32" />
      <Container>
        <Title>Info Native</Title>

        <LoginText>Login</LoginText>

        <Input
          maxLength={14}
          style={styles.input}
          autoCapitalize="none"
          placeholder='Username'
          placeholderTextColor="#fff"
          inputStyle={{ color: "#fff" }}

          leftIcon={
            <Icon
              size={28}
              color='#fff'
              name='user-circle'
              style={{ marginRight: 10 }}
            />
          }
        />

        <Input
          maxLength={14}
          style={styles.input}
          autoCapitalize="none"
          placeholder='Password'
          placeholderTextColor="#fff"
          inputStyle={{ color: "#fff" }}

          leftIcon={
            <Icon
              size={28}
              name="lock"
              color='#fff'
              style={{ marginRight: 12, marginLeft: 5 }}
            />
          }
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <NavTxtButton style={styles.text} >Enter</NavTxtButton>
        </TouchableOpacity>

        <SignUpText>
          Don't have an account? Register
        </SignUpText>

      </Container>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  button: {
    top: 80,
    left: 23,
    margin: 10,
    height: 54,
    padding: 20,
    width: '80%',
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  input: {
    padding: 8,
    width: '​100%​',
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255, 0.06)',
  },
  // userInput: {
  //   borderRadius: 50,
  //   backgroundColor: 'rgba(255, 255, 255, 0.06)',
  // },
  // passInput: {
  //   borderRadius: 50,
  //   backgroundColor: 'rgba(255, 255, 255, 0.06)',
  // },
});