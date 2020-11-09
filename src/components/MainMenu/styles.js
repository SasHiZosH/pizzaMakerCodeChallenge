import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  height: 600px;
  width: 600px;
  
  background-color: rgba(255, 255, 255, 0.781);
  box-shadow: 10px 15px rgba(30, 30, 30, 0.8);
  
  border: 1px solid rgba(192, 14, 14, 1);
  border-radius: 50%;
  
  padding: 30px 0;
`;

export const Image = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 50%;

  box-shadow: 10px 15px rgba(30, 30, 30, 0.8);
`;