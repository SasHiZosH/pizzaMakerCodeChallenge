import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import api from "../../services/api"

import { TitleBlock, Title, Form, Input, Label, ButtonBlock, Button } from './styles';


const SizeStep = () => {
  const [sizes, setSizes] = useState([])
  const [sizeValue, setSizeValue] = useState('')
  const selectedSize = useSelector(state => state.size)

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedSize) {
      setSizeValue(selectedSize)
    }
    api.get("sizes").then((res) => {
      setSizes(res.data)
    });
  }, [selectedSize])

  function handleChange(size) {
    dispatch({ type: 'ADD_SIZE', choice: size})
  };

  return (
    <>
      <TitleBlock>
        <Title>Primeiro passo:</Title>
        <Title>Escolha o tamanho da pizza</Title>
      </TitleBlock>
      <Form>
        {sizes.length > 0 && sizes.map(size => (
          <React.Fragment key={size}>
            <Input checked={sizeValue === size} type="radio" name="size" value={size} onChange={() => handleChange(size)} />
            <Label htmlFor="size">{size}</Label>
          </React.Fragment>
        ))}
      </Form>
      <ButtonBlock>
        <Link to="/">
          <Button>Voltar</Button>
        </Link>
        <Link to="/formatstep">
          <Button disabled={sizeValue === ''}>Avançar</Button>
        </Link>
      </ButtonBlock>
    </>
  )
}

export default SizeStep;