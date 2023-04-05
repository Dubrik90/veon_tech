import styled from 'styled-components';

export const fontSize = (size: number, base = 18) => `
  font-size: ${size}px; // older browsers fallback
  font-size: calc(${size / base}rem);
`;

export const flexColumn = () => `
  display: flex;
  flex-direction: column;
`