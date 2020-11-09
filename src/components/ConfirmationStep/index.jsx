import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { TitleBlock, Title, ListBlock, List, Item, ToppingsBlock, ButtonBlock, Button } from './styles';

const ConfirmationStep = () => {
  const size = useSelector(state => state.size);
  const format = useSelector(state => state.format);
  const border = useSelector(state => state.border);
  const filling = useSelector(state => state.filling);
  const toppings = useSelector(state => state.topping);
  const points = useSelector(state => state.points);

  const dispatch = useDispatch();
  
  function clearState() {
    dispatch({type: 'CLEAR'})
  }
  
  return (
    <>
      <TitleBlock>
        <Title>Último passo:</Title>
        <Title>Dados do seu pedido:</Title>
      </TitleBlock>
      <ListBlock>
        <List>
          <Item>Tamanho: {size && size}</Item>
          <Item>Massa: {format && format}</Item>
          <Item>Borda: {border && border} - {filling && filling}</Item>
          <Item>Recheio:</Item>
          <ToppingsBlock>
            {toppings.length > 0 && toppings.map(topping => (
              <React.Fragment key={topping}>
                <Item>{topping}</Item>
              </React.Fragment>
            ))}
          </ToppingsBlock>
        </List>
      </ListBlock>
      <ButtonBlock>
        <Link to={points ? "/" : "/toppingstep"}>
          <Button onClick={points && clearState}>Voltar</Button>
        </Link>
        <Link to="/final">
          <Button>Confirmar pedido</Button>
        </Link>
      </ButtonBlock>
    </>
  )
}

export default ConfirmationStep;