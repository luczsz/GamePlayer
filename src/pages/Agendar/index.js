import React, {useState} from 'react';
import { View, Text, Image } from 'react-native';

export default function Agendar({route}) {

    return (
   <View>
        <Text> Agendar {route.params.key} </Text>
   </View>
  );
}