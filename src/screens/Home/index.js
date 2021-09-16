import React from 'react';

import {Container, StatusBar} from './styles';
import background from '../../assets/images/night.jpeg';
import Info from '../../components/Info';
import TabBar from '../../components/TabBar';

const Home = () => (
  <Container source={background}>
    <StatusBar />
    <TabBar />
    <Info />
  </Container>
);

export default Home;
