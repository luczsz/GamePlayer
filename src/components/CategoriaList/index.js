import React from 'react';
import { View, Text } from 'react-native';

import { Container, Title, ImgCatg } from './style';

export default function CategoriaList( {data} ) {
 return (
   <Container>
        
        <Title> {data.type} </Title>
   </Container>
  );
}