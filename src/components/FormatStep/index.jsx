import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';

import { TitleBlock, Title, Form, InputBlock, Input, Label, ButtonBlock, Button } from './styles';

const FormatStep = () => {
  const [formats, setFormats] = useState([])
  const [formatValue, setFormatValue] = useState('')
  const selectedFormat = useSelector(state => state.format)

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedFormat) {
      setFormatValue(selectedFormat)
    }
    api.get("format").then((res) => {
      setFormats(res.data)
    });
  }, [selectedFormat])

  function handleChange(format) {
    dispatch({ type: 'ADD_FORMAT', choice: format})
  };

  return (
    <>
      <TitleBlock>
        <Title>Segundo passo:</Title>
        <Title>Escolha o tipo de massa</Title>
      </TitleBlock>
      <Form>
        {formats.length > 0 && formats.map(format => (
          <InputBlock key={format}>
            <Input checked={formatValue === format} type="radio" name="format" value={format} onChange={() => handleChange(format)}/>
            <Label htmlFor="format">{format}</Label>
          </InputBlock>
        ))}
      </Form>
      <ButtonBlock>
        <Link to="/sizestep">
          <Button>Voltar</Button>
        </Link>
        <Link to="/borderstep">
          <Button disabled={formatValue === ''}>Avançar</Button>
        </Link>
      </ButtonBlock>
    </>
  )
}

export default FormatStep;