import React from 'react';
import { View, Text } from 'react-native';

import { Container, Title, ImgCatg } from './style';

export default function CategoriaList({ data, alet }) {


  function aqui(){
    alert('deu');
  }

 return (
   <Container
    onPress={ () => alet(data)}
    >
        <ImgCatg
          source={ {uri:(data.item.adress)}}
        />
        <Title> {data.item.type} </Title>
   </Container>
  );
}