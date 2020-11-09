import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';

import { TitleBlock, Title, Form, CheckBoxDiv, Input, Label, ButtonBlock, Button } from './styles';

const ToppingStep = () => {
  const [toppings, setToppings] = useState([])
  const [selectedToppings, setSelectedToppings] = useState([])
  const stillSelectedToppings = useSelector(state => state.topping)

  const dispatch = useDispatch();

  useEffect(() => {
    if (stillSelectedToppings.length > 0) {
      setSelectedToppings(stillSelectedToppings)
    }
    api.get("toppings").then((res) => {
      setToppings(res.data)
    })
  }, [stillSelectedToppings]);

  function handleChange(topping) {
    if (selectedToppings.findIndex(item => item === topping) !== -1) {
      const remainingToppings = selectedToppings.filter(item => item !== topping)
      return setSelectedToppings(remainingToppings)
    }
    selectedToppings.length < 6 && setSelectedToppings(prevState => [...prevState, topping])
  }

  function toppingDispatch() {
    dispatch({ type: 'ADD_TOPPING', choice: selectedToppings})
  }

  return (
    <>
      <TitleBlock>
        <Title>Quarto passo:</Title>
        <Title>Escolha até 6 recheios (min 2) </Title>
      </TitleBlock>
      <Form action="">
        {toppings.length > 0 && toppings.map(topping => (
          <React.Fragment key={topping}>
            <CheckBoxDiv>
              <Input  checked={selectedToppings.findIndex(item => item === topping) > -1} disabled={selectedToppings.length === 6 && selectedToppings.findIndex(item => item === topping) === -1} 
              type="checkbox" name="topping" value={topping} onChange={() => handleChange(topping)}/>
              <Label htmlFor="topping">{topping}</Label>
            </CheckBoxDiv>
          </React.Fragment>
        ))}
      </Form>
      <ButtonBlock>
        <Link to="/borderstep">
          <Button>Voltar</Button>
        </Link>
        <Link to="/confirmationstep">
          <Button disabled={selectedToppings.length < 2} onClick={toppingDispatch}>Finalizar</Button>
        </Link>
      </ButtonBlock>
    </>
  )
}

export default ToppingStep;