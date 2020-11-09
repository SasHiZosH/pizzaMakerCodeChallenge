import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { TitleBlock, Title, Text, ButtonBlock, Button } from './styles';

function Final() {
  const points = useSelector(state => state.points);

  const dispatch = useDispatch();

  function clearState() {
    dispatch({type: 'CLEAR'})
  }

  return (
    <>
      <TitleBlock>
        <Title>Muito obrigado pela preferência!</Title>
        <Title>Nós da Pizzaria Dev agradecemos!</Title>
      </TitleBlock>
        {points > 0 && <Text>A sua pontuação é de: {points}</Text>}
      <Text>Volte sempre!</Text>
      <ButtonBlock>
        <Link to="/">
          <Button onClick={clearState}>Voltar para o menu</Button>
        </Link>
      </ButtonBlock>
    </>
  )
}

export default Final;