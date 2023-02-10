import styled from 'styled-components/native';

import { theme } from '../../global/theme';


export const Container = styled.View`
    margin-top: 32px;
    //background-color: #FFF;
    height: 90px;
    padding: 14px;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
`;

export const UserImage = styled.Image`
    width: 60px;
    height: 60px;
    background-color: #0D133D;
`;
export const UserName = styled.View`
    flex: 1;
    margin-left: 14px;
`;
export const AddView = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    background-color: #E51C44;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
`;

export const Title = styled.Text`
    font-size: 22px;
    color: #FFF;
`;
export const TitleUser = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #FFF;
`;
export const LineUser = styled.Text`
    font-size: 18px;
    color: #FFF;
`;
