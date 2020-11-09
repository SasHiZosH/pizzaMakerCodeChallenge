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
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 400px;
`;

export const Span = styled.span`
  font-size: 20px;
  font-style: italic;
  font-weight: bold;
`;

export const InputBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 20px;
  height: 20px;
`;

export const Label = styled.label`
  margin-left: 5px;
  font-size: 20px;
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