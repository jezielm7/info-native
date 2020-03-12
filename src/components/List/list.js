import React from 'react';
import { StyleSheet, } from 'react-native';

import { Itens, Item, SubTitle, TextList, } from './styles';

export default function List() {
  return (
      <Itens>
        <SubTitle style={styles.subTitle} >The Content</SubTitle>
        <TextList>Basic</TextList>
        <Item> 1- Introduction in React Native </Item>
        <Item> 2- Principal Libs </Item>
        <Item> 3- First Lines </Item>
        <Item> 4- Using Styled Components </Item>
        <Item> 5- Constructing layouts </Item>
        <Item> 6- State and PropTypes </Item>
        <Item> 7- First Project </Item>

        <TextList >Intermediate</TextList>
        <Item> 1- Introduction in React Native </Item>
        <Item> 2- Principal Libs </Item>
        <Item> 3- First Lines </Item>
        <Item> 4- Using Styled Components </Item>
        <Item> 5- Constructing layouts </Item>
        <Item> 6- State and PropTypes </Item>
        <Item> 7- First Project </Item>

        <TextList >Advanced</TextList>
        <Item> 1- Introduction in React Native </Item>
        <Item> 2- Principal Libs </Item>
        <Item> 3- First Lines </Item>
        <Item> 4- Using Styled Components </Item>
        <Item> 5- Constructing layouts </Item>
        <Item> 6- State and PropTypes </Item>
        <Item style={{ paddingBottom: 10 }}> 7- First Project </Item>
      </Itens>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    top: 5,
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});
