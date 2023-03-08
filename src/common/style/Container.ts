import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1920px;
  box-sizing: content-box;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;