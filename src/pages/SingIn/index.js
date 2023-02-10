import React from 'react';
import { View, Text, requireNativeComponent } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Logo, Title, BntLogin, LoginTxt, IconLogin, Line } from './style';

import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/theme';

export default function SingIn() {

  const navigation = useNavigation();

 return (
   <Container>
      <LinearGradient
      colors={[ theme.colors.secondary80, theme.colors.secondary100 ]}

      style={{position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 900,}}
    />

    <Logo
      source={ require('../../assets/illustration.png')}
    />
    <Title>
      Conecte-se {`\n`}
      suas jogatinas {`\n`}
      facilmente...
    </Title>

    <BntLogin
      activeOpacity={0.7}
      onPress={ () => navigation.navigate('Home') }
    >
      <IconLogin
        source={ require('../../assets/discord.png')}
      />
      <Line/>
      <LoginTxt>Entrar com discord</LoginTxt>
    </BntLogin>
   </Container>
  );
}