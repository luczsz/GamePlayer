import React from 'react';
import { View, Text } from 'react-native';

import { Container, UserImage, UserName, AddView, Title, TitleUser, LineUser } from './style';

import { useNavigation } from '@react-navigation/native'

import { AntDesign } from '@expo/vector-icons';

export default function Header() {

    const navigation = useNavigation();
 return (
    <Container>
        <UserImage
            source={{ uri: 'https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png' }}
        />
        <UserName>
            <View style={{ flexDirection: 'row' }}>
                <Title> Olá, </Title>
                <TitleUser>Lucas</TitleUser>
            </View>
            <LineUser> Hoje é dia de vitória </LineUser>
        </UserName>
        <AddView
            onPress={ () => navigation.navigate('Agendar', {key:('Sem categoria')})}
        >
        <AntDesign name="plus" size={34} color="#FFF" />
        </AddView>


    </Container>
  );
}