import styled from 'styled-components';

export const ResultTable = styled.table`
  max-width: 100rem;
  margin: 4rem auto;
  padding: 2rem;
  table-layout: fixed;
  border-spacing: 2rem;
  text-align: right;

  thead {
    font-size: 1.4rem;
    color: #83e6c0;
  }

  tbody {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.7rem;
    color: #c2e9e0;
  }
`;

export const Fallback = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;
