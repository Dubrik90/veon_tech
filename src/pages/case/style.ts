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
  display: flex;
  column-gap: 53px;
  max-width: 1480px;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: none;
  }
`

export const ImageBlock = styled.div`

`
export const Img = styled.img`
  max-width: 100%;
`
export const PortfolioBlockSlider = styled.div``







