import React from 'react';
import { StyleSheet, ActivityIndicator, ImageBackground, StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import AtomIcon from 'react-native-vector-icons/Fontisto';

import {
  Container,
  Title,
  LoginText,
  Form,
  Input,
  SubmitButton,
  SubmitButtonText,
  SignInLink,
  SignInLinkText,
} from './styles';

export default function SignIn({ navigation }) {
  return (
    <ImageBackground
      source={require('../../images/signIn.jpg')}
      style={{ width: '100%', height: '100%' }}
    >
      <StatusBar backgroundColor="#221F32" />
      <Container>
        <Title>
          Info Native <AtomIcon name="atom" size={24} color="#fff" />
        </Title>
        
        <LoginText>Logon</LoginText>

        <Form>
          <Icon name="user" size={25} style={styles.Icon} />
          <Input
            placeholder="Your username"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Icon name="lock" size={25} style={styles.Icon2} />
          <Input
            secureTextEntry
            placeholder="Your password"
          />
        </Form>

        <SubmitButton onPress={() => navigation.navigate('Home')} >
          <SubmitButtonText>Enter</SubmitButtonText>
        </SubmitButton>

        <SignInLink>
          <SignInLinkText onPress={() => navigation.navigate('SignUp')} style={{ color: '#FFF' }} >
            Don't have an account? Register
          </SignInLinkText>
        </SignInLink>

      </Container>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Icon: {
    top: 14,
    left: 47,
    width: 26,
    height: 26,
    color: '#fff',
    position: 'absolute',
  },
  Icon2: {
    color: '#fff',
    position: 'absolute',
    width: 26,
    height: 26,
    left: 47,
    top: 84,
    alignItems: 'center',
    justifyContent: 'center',
  },
});