import styled from 'styled-components';

export const TitleBlock = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-style: italic;
  font-size: 24px;
  font-weight: bold;
`;

export const ListBlock = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  list-style: none;
`;

export const Item = styled.li`
  margin-top: 15px;
`;

export const ToppingsBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
`;

export const ButtonBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  width: 75px;

  border: 1px solid rgba(192, 14, 14, 1);
  border-radius: 0px 0px 30px 30px;
  
  :hover {
    background-color: rgba(192, 14, 14, 0.3);
    transform: scale(1.2);
  }
`;