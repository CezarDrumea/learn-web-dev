import styled from 'styled-components';

export const Form = styled.form`
  padding: 2rem;
  max-width: 60rem;
  margin: 4rem auto;
  border-radius: 8px;
  background: linear-gradient(180deg, #307e6c, #2b996d);

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  input {
    width: 100%;
    padding: 1rem;
    border: 2px solid #76c0ae;
    border-radius: 0.5rem;
    background-color: transparent;
    color: #c2e9e0;
    font-size: 2rem;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 3rem;
`;

export const Actions = styled.p`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export const SubmitBtn = styled.button`
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  background: linear-gradient(180deg, #1f584b, #17493d);
  color: #c2e9e0;
  font-family: 'Roboto Condensed', sans-serif;
  cursor: pointer;

  &:hover {
    background: linear-gradient(180deg, #1b5346, #113c32);
  }
`;

export const ResetBtn = styled.button`
  font-size: 1.5rem;
  font-family: 'Roboto Condensed', sans-serif;
  border: none;
  background: transparent;
  color: #c2e9e0;
  cursor: pointer;

  :hover {
    background: transparent;
    color: #91e1d0;
  }
`;
