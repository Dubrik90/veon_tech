import styled from "styled-components";

export const CaseWrapper = styled.div`

`
export const Title = styled.h3`
  font-weight: var(--fw-bold);
  font-size: 35px;
  line-height: 1.4;
  text-align: center;
  color: var(--colors-text-dark);
  margin-bottom: 70px;

  @media (max-width: 1024px) {
    font-size: 25px;
    margin-bottom: 50px;
  }
  @media (max-width: 844px) {
    font-size: 18px;
    margin-bottom: 30px;
  }
  @media (max-width: 586px) {
    font-size: 16px;
  }
`
export const CaseBlock = styled.div`
  padding: 55px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 425px) {
    padding: 30px 0;
  }
`
export const PortfolioBlock = styled.div`
    
`





