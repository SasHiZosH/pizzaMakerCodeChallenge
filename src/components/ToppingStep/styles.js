import styled from 'styled-components';

export const TitleBlock = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-style: italic;
  font-size: 24px;
  font-weight: bold;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

  width: 480px;
`;

export const CheckBoxDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  margin-top: 10px;
  margin-left: 5px;
  width: 15px;
  height: 15px;
`;

export const Label = styled.label`
  margin-top: 10px;
  margin-left: 5px;

  font-size: 14px;
`;

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 10%;
  width: 200px;
`;

export const Button = styled.button`
  cursor: pointer;
  transition: all 0.1s ease;

  background-color: transparent;

  outline: none;
  text-decoration: none;
  font-weight: bold;

  height: 35px;
  width: 75px;

  border: 1px solid rgba(192, 14, 14, 1);
  border-radius: 0px 0px 30px 30px;
  
  :hover {
    background-color: rgba(192, 14, 14, 0.3);
    transform: scale(1.2);
  }
`;