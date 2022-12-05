/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import nothingImg from '../utils/assets/nothing.png';
import {colors} from '../utils/styles/colors';
import {SafeAreaView} from 'react-navigation';
import {Image, Text} from 'react-native';

const Nothing = () => {
  return (
    <SafeAreaView
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Image source={nothingImg} style={{width: '100%', height: '80%'}} />
      <Text style={{fontSize: 20, color: colors.primary[1]}}>
        Nothing Here ...
      </Text>
    </SafeAreaView>
  );
};

export default Nothing;
