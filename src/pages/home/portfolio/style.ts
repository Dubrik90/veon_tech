import styled from 'styled-components';

export const PortfolioWrapper = styled.div`
  background: #3D5F47;
  padding: 50px 0 78px 100px;

  @media (max-width: 1450px) {
    padding: 50px 0;
  }
    @media (max-width: 768px) {
    padding-top: 40px;
     padding-bottom: 150px;
  }
`

export const PortfolioContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const SubTitle = styled.p`
  font-weight: var(--fw-bold);
  line-height: 25px;
  color: #5DB447;
  margin-bottom: 15px;
   @media (max-width: 415px) {
    font-size: 19px;
  }
 
`
export const Title = styled.h3`
  font-weight: var(--fw-extra-bold);
  font-size: 42px;
  line-height: 53px;
  color: #DBE8D3;
  margin-bottom: 50px;
   @media (max-width: 415px) {
    font-size: 38px;
  }
`
export const Works = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 95px;
  row-gap: 64px;
  align-items: center;
  justify-content: center;
  

`