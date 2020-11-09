import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';

import { TitleBlock, Title, Form, Span, InputBlock, Input, Label, ButtonBlock, Button } from './styles';

const BorderStep = () => {
  const [borders, setBorders] = useState([])
  const [fillings, setFillings] = useState([])
  const [borderValue, setBorderValue] = useState('')
  const [fillingValue, setFillingValue] = useState('')
  const borderValueSelected = useSelector(state => state.border)
  const fillingValueSelected = useSelector(state => state.filling)

  const dispatch = useDispatch();

  useEffect(() => {
    if (borderValueSelected) {
      setBorderValue(borderValueSelected)
    } 
    if (fillingValueSelected) {
      setFillingValue(fillingValueSelected)
    }
    api.get("border").then((res) => {
      const { options, filling } = res.data
      setBorders(options)
      setFillings(filling)
    });
  }, [borderValueSelected, fillingValueSelected])

  function handleChangeOnBorder(border) {
    setBorderValue(border)
    dispatch({ type: 'ADD_BORDER', choice: border})
  };

  function handleChangeOnFilling(filling) {
    setFillingValue(filling)
    dispatch({ type: 'ADD_FILLING', choice: filling})
  };

  return (
    <>
      <TitleBlock>
        <Title>Terceiro passo:</Title>
        <Title>Escolha a borda</Title>
      </TitleBlock>
      <Form>
        <Span>Borda:</Span>
        {borders.length > 0 && borders.map(border => (
          <InputBlock key={border}>
            <Input checked={borderValue === border} type="radio" name="border" value={border} onChange={() => handleChangeOnBorder(border)}/>
            <Label htmlFor="border">{border}</Label>
          </InputBlock>
        ))}
      </Form>
      <Form>
        <Span>Recheio da borda:</Span>
        {fillings.length > 0 && fillings.map(filling => (
          <InputBlock key={filling}>
            <Input disabled={borderValue === "Normal"} checked={fillingValue === filling} type="radio" name="filling" value={filling} onChange={() => handleChangeOnFilling(filling)}/>
            <Label htmlFor="filling">{filling}</Label>
          </InputBlock>
        ))}
      </Form>
      <ButtonBlock>
        <Link to="/formatstep">
          <Button>Voltar</Button>
        </Link>
        <Link to="/toppingstep">
          <Button disabled={!borderValue || (borderValue === 'Recheada' && !fillingValue)}>Avançar</Button>
        </Link>
      </ButtonBlock>
    </>
  )
}

export default BorderStep;