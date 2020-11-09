import { FiArrowDown } from 'react-icons/fi';

import styled from 'styled-components';

export const Title = styled.h1`
  font-style: italic;
  font-size: 28px;
  font-weight: bold;
`;

export const TextBlock = styled.div`
  text-align: center;
`;

export const Text = styled.p`
  font-style: italic;
  font-size: 18px;
`;

export const Arrow = styled(FiArrowDown)`
  margin-top: 30px;
  transition: all 0.2s ease;

  :hover {
    transform: scale(1.2);
  }
`;

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 200px;
`;
 
export const Button = styled.button`
  cursor: pointer;
  transition: all 0.1s ease;

  background-color: transparent;

  outline: none;
  text-decoration: none;
  font-weight: bold;

  height: 45px;
  width: 70px;

  border: 1px solid rgba(192, 14, 14, 1);
  border-radius: 0px 0px 30px 30px;
  
  :hover {
    background-color: rgba(192, 14, 14, 0.3);
    transform: scale(1.2);
  }
`;