import React, {useState} from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/theme';
import { category, List } from '../../components/listCategoria';
import CategoriaList from '../../components/CategoriaList';

import { useNavigation } from '@react-navigation/native'

import Header from '../../components/Header';

import { Container, ImgTest, ListCategory, BntCategory, TitleCategory, ImgCategory, AreaTitle, TitleArea, SubTitleArea } from './style';

export default function Home() {


  const [categoria, setCategoria] = useState('');

  const podio = '../../assets/podio.png';
  const duel = '../../assets/duel.png';
  const userGm = '../../assets/userGm.png';

  const navigation = useNavigation();


    function candy(data){
      setCategoria( data.item.type );
      navigation.navigate('Agendar', {key:(data.item.type)});
    }

 return (

    <Container>
      <LinearGradient
        colors={[ theme.colors.secondary80, theme.colors.secondary100 ]}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 900,
        }}
      />

      <Header/>

      <View style={{ marginTop: 10, marginBottom: 10, }} >

          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={category}
            keyExtractor={ (item) => item.id }
            renderItem={ (item) => <CategoriaList data={item} alet={ candy } />}
          />

      </View>

      <AreaTitle>
        <TitleArea>
          Partidas Agendadas {categoria}
        </TitleArea>
        <SubTitleArea>
          Total: 9
        </SubTitleArea>
      </AreaTitle>

    </Container>


  );
}