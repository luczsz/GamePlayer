import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/theme';
import { category } from '../../components/listCategoria';
import CategoriaList from '../../components/CategoriaList';


import Header from '../../components/Header';

import { Container, ImgTest, ListCategory, BntCategory, TitleCategory, ImgCategory, AreaTitle, TitleArea, SubTitleArea } from './style';

export default function Home() {
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
      
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ margin: 10, }}
      >
          
          <BntCategory
            onPress={ () => alert('Ranqueada')}
          >

              <ImgCategory
                source={require('../../assets/podio.png')}
              />

            <TitleCategory>
               Raqueada 
            </TitleCategory>
          </BntCategory>

          <BntCategory>

              <ImgCategory
                source={require('../../assets/duel.png')}
              />

            <TitleCategory>
               Duelo 1x1 
            </TitleCategory>
          </BntCategory>
          
          <BntCategory>
              <ImgCategory
                source={require('../../assets/userGm.png')}
              />
            <TitleCategory> 
              Diversão 
            </TitleCategory>
          </BntCategory>
         

      </ScrollView>

      <AreaTitle>
        <TitleArea>
          Partidas Agendadas
        </TitleArea>
        <SubTitleArea>
          Total: 9
        </SubTitleArea>
      </AreaTitle>

    </Container>


  );
}