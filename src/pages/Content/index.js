import React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

import {
  Container,
  LoginNavView,
  SubTitle,
  Text,
  NavTxtButton
} from './styles';

import List from '../../components/List/list';

export default function Content({ navigation }) {
  return (
    <Container>
      <StatusBar backgroundColor="#7159c1" />
      <ScrollView showsVerticalScrollIndicator={false} >

        <List />

        <LoginNavView>
          <SubTitle style={styles.SubTitle} >Were you interested?</SubTitle>
          <Text style={{ color: '#fff', }}>Sign up and join the team!</Text>

          <TouchableOpacity
            style={styles.logButton}
            onPress={() => navigation.navigate('SignIn')}
          >
            <NavTxtButton>Go to Login</NavTxtButton>
          </TouchableOpacity>
        </LoginNavView>

        
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  logButton: {
    width: 180,
    margin: 10,
    height: 36,
    padding: 12,
    borderRadius: 4,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SubTitle: {
    top: 2,
    color: '#fff', 
  },
});