import React, {useEffect, useState} from 'react';
import GetLocation from 'react-native-get-location';
import Icon from 'react-native-vector-icons/Feather';
import moment from 'moment';
import 'moment/locale/pt-br';
import Loader from 'react-native-loading-spinner-overlay';

import * as Location from 'expo-location'

import {
  Container,
  Header,
  Description,
  DateInfo,
  Temp,
  Localization,
  Divisor,
  ValueView,
  ValueTitle,
  Value,
  Button,
  ButtonText,
  Main,
} from './styles';
import api from '../../services/api';


console.log("Log",api);


export default function Info() {

 
  return (
    <Container>
      {/* <Loader
        visible={load}
        animation="fade"
        overlayColor="rgba(0, 0, 0, 0.8)"
        textContent="Carregando..."
        textStyle={{color: 'white', fontSize: 25}}
      /> */}

      <Header>
        <Icon name="cloud-rain" size={50} color="white" fontWeight={444}/>

        <Localization>Araguaína</Localization>

        <DateInfo>
          15/09/2021
        </DateInfo>
      </Header>

      <Main>
        <Temp>27 °c</Temp>

        <Divisor />

        <Description>Descrição</Description>

        <ValueView>
          <ValueTitle>min </ValueTitle>

          <Value>14 ° / </Value>

          <ValueTitle>max </ValueTitle>

          <Value>37 °</Value>
        </ValueView>
      </Main>

      <Button onPress=''activeOpacity={0.8}>
        <ButtonText>Atualizar</ButtonText>
      </Button>
    </Container>
  //   <Container>
  //   {/* <Loader
  //     visible={load}
  //     animation="fade"
  //     overlayColor="rgba(0, 0, 0, 0.8)"
  //     textContent="Carregando..."
  //     textStyle={{color: 'white', fontSize: 25}}
  //   /> */}

  //   <Header>
  //     <Icon name="sun" size={50} color="white" />

  //     <Localization>{local}</Localization>

  //     <DateInfo>
  //       {moment(date).locale('pt-br').format('dddd, D [de] MMMM')}
  //     </DateInfo>
  //   </Header>

  //   <Main>
  //     <Temp>{temp} °c</Temp>

  //     <Divisor />

  //     <Description>{desc.toUpperCase()}</Description>

  //     <ValueView>
  //       <ValueTitle>min </ValueTitle>

  //       <Value>{min} ° / </Value>

  //       <ValueTitle>max </ValueTitle>

  //       <Value>{max} °</Value>
  //     </ValueView>
  //   </Main>

  //   <Button onPress={getData} activeOpacity={0.8}>
  //     <ButtonText>Atualizar</ButtonText>
  //   </Button>
  // </Container>
  );
}
