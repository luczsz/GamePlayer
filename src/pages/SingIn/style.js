import styled from 'styled-components/native';

import { theme } from '../../global/theme';

import { Inter_700Bold } from '@expo-google-fonts/inter'

const title500 = theme.fonts.title500;


export const Container = styled.View`
   height: 900px;
   //background-color: #131313;
   align-items: center;
   justify-content: center;
`;

export const Logo = styled.Image`
    width: 445px;
    height: 445px;
`;

export const Title = styled.Text`
    font-size: 40px;
    color: #FFF;
`;

export const BntLogin = styled.TouchableOpacity`
    background-color: #E51C44;
    width: 350px;
    height: 60px;
    margin: 20px;
    align-items: center;
    padding: 14px;
    //justify-content: center;
    flex-direction: row;
    border-radius: 12px;
`;

export const LoginTxt = styled.Text`
    font-size: 22px;
    width: 250px;
    font-weight: bold;
    text-align: center;
    color: white;
`;
export const IconLogin = styled.Image``;
export const Line = styled.View`
    height: 60px;
    width: 2px;
    background-color: #121212;
    marginStart: 12px;
    marginEnd: 12px;
`;