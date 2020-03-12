import React from 'react';
import { Button, ScrollView, StyleSheet, TouchableOpacity, } from 'react-native';
import Lottie from 'lottie-react-native';

import rocket from '../../components/json-animated/rocket-flying.json';
import deploy from '../../components/json-animated/deployment.json';

import {
  Container,
  Title,
  TextTitle,
  SubTitle,
  CourseArea,
  Text,
  NavView,
  NavTxtButton,
} from './styles';

export default function Home({ navigation }) {

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Welcome to the Rocket!</Title>
        <TextTitle>Are you ready?</TextTitle>
        <Lottie style={{ width: 350 }} source={rocket} autoPlay loop />

        <SubTitle>About The Course</SubTitle>
        <CourseArea>
          <Lottie style={styles.lottie} source={deploy} autoPlay loop />
          <Text style={styles.text} >
            this course is for developers to leverage
            their careers and contribute significantly
            to the world of technology!
        </Text>
        </CourseArea>

        <NavView style={{ top: 7, }}>
          <SubTitle style={{ color: '#f5f5f5', top: 3, }}>Learn more about the Course</SubTitle>
          <Text style={{ color: '#f5f5f5', fontWeight: 'bold', }}>click in the button!</Text>
        
          <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <NavTxtButton>Go to Content</NavTxtButton>
        </TouchableOpacity>
        </NavView>
        
      </ScrollView>
    </Container >
  );
}

const styles = StyleSheet.create({
  button: {
    width: 180,
    margin: 10,
    height: 36,
    padding: 20,
    borderRadius: 4,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    top: 5,
    marginBottom: 3,
    paddingBottom: 10,
  },
  lottie: {
    top: 0.3,
    right: 1.5,
    width: 370,
  },
});