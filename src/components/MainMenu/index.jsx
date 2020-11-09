import React from 'react';
import logoImg from '../../images/logo.jpg'
import { Container, Image } from './styles';

function MainMenu({children}) {
  return (
    <Container>
      <Image src={logoImg} alt="Logo Pizzaria"/>
      {children}
    </Container>
  )
}

export default MainMenu;