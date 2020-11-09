import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { Title, TextBlock, Text, Arrow, ButtonBlock, Button } from './styles';

import api from '../../services/api'

import { useDispatch } from 'react-redux';

const Menu = () => {
  const [suggestion, setSuggestion] = useState('')
  const dispatch = useDispatch();

  useEffect(() => {
    api.get("suggestions").then((res) => {
      setSuggestion(res.data)
    });
  }, [])
  

  function submitOrder() {
    dispatch({type: 'ADD_SUGGESTION', choice: suggestion})
  }

  return (
    <>
      <Title>Sejam bem-vindo(s) à Pizzaria Dev</Title>
      <TextBlock>
        <Text>Aqui você é o pizzaiolo e põe a mão na massa... virtual</Text>
        <Text>Clique no botão abaixo para começar a montar a pizza do seu jeito!</Text>
        <Text>Ou você pode escolher a pizza do dia que nós montamos pra você!</Text>
        <Arrow size={30} color="rgb(192, 14, 14)"/>
      </TextBlock>
      <ButtonBlock>
        <Link to="/confirmationstep">
          <Button onClick={submitOrder}>Pizza do dia</Button>
        </Link>
        <Link to="/sizestep">
          <Button>Iniciar</Button>
        </Link>
      </ButtonBlock>
    </>
  )
}

export default Menu;