import styled from 'styled-components/native';

export const Container = styled.View`
    margin-bottom: 32px;
`;

export const ImgTest = styled.Image`
    width: 45px;
    height: 45px;
    margin-top: 23px;
`;

export const ListCategory = styled.FlatList`
    margin: 10px;
`;

export const BntCategory = styled.TouchableOpacity`
    background-color: #ABB1CC;
    width: 114px;
    height: 136px;
    margin-left: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
`;

export const TitleCategory = styled.Text`
    color: #FFF;
    font-size: 15px;
    font-weight: bold;
`;

export const ImgCategory = styled.Image`
    //width: 48px;
    height: 48px;
    margin-bottom: 10px;
`;

export const AreaTitle = styled.View`
    flex-direction: row;
    //background-color: #DDD;
    height: 60px;
    align-items: center;
    justify-content: space-between;
    padding-Start: 14px;
    padding-End: 14px;
`;

export const TitleArea = styled.Text`
    color: #FFF;
    font-size: 18px;
    font-weight: bold;
`;
export const SubTitleArea = styled.Text`
    color: #DDD;
    font-size: 16px;
`;