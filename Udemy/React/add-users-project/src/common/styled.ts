import styled from 'styled-components';

export const Card = styled.div`
  width: 500px;
  background-color: white;
  border-radius: 10px;
  margin: 1rem auto;
  padding: 10px;
`;

export const Button = styled.button`
  font: inherit;
  border: 1px solid #4f005f;
  background: #4f005f;
  color: white;
  padding: 0.25rem 1rem;
  cursor: pointer;

  &:hover,
  &:active {
    background: #741188;
    border-color: #741188;
  }

  &:focus {
    outline: none;
  }
`;
