import React from 'react';
import { StyleSheet, ActivityIndicator, ImageBackground, StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import FIcon from 'react-native-vector-icons/Fontisto';
import MailIcon from 'react-native-vector-icons/Ionicons';

import {
  Container,
  Title,
  LoginText,
  Form,
  Input,
  SubmitButton,
  SubmitButtonText,
  SignUpLink,
  SignUpLinkText,
} from './styles';

export default function SignUp({ navigation }) {
  return (
    <ImageBackground
      source={require('../../images/signUp.jpg')}
      style={{ width: '100%', height: '100%' }}
    >
      <StatusBar backgroundColor="#7B3E82" />
      <Container>
        <Title>
          Info Native <FIcon name="atom" size={24} />
        </Title>
        <LoginText>Login</LoginText>

        <Form>
          <MailIcon name="ios-mail" size={28} style={styles.MailIcon} />
          <Input
            placeholder="Your email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Icon name="user" size={25} style={styles.UserIcon} />
          <Input
            placeholder="Your username"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Icon name="lock" size={25} style={styles.LockIcon} />
          <Input
            secureTextEntry
            placeholder="Your password"
          />
        </Form>

        <SubmitButton onPress={() => navigation.navigate('Home')} >
          <SubmitButtonText>Register</SubmitButtonText>
        </SubmitButton>

        <SignUpLink>
          <SignUpLinkText onPress={() => navigation.navigate('SignIn')} style={{ color: '#FFF' }} >
            Already have an account? Enter
          </SignUpLinkText>
        </SignUpLink>

      </Container>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  MailIcon: {
    top: 13,
    left: 45,
    width: 26,
    height: 26,
    color: '#221F32',
    position: 'absolute',
  },
  UserIcon: {
    top: 82.5,
    left: 47,
    width: 26,
    height: 26,
    color: '#221F32',
    position: 'absolute',
  },
  LockIcon: {
    color: '#221F32',
    position: 'absolute',
    width: 26,
    height: 26,
    left: 47,
    bottom: 28.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});