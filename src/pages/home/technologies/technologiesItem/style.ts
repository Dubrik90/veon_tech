import styled from 'styled-components';
export const TechnologiesItemWrapper = styled.div`

  width: 140px;
  height: 145px;
  padding: 25px;
  margin: 15px;
  border-radius: 17px;
  gap: 30px;
  background-color: var(--colors-bg-card);
  
  @media (max-width: 768px) {
    min-width: 125px;
    height: 133px;
  }
  @media (max-width: 425px) {
        padding: 11px;
        height: 115px;
    min-width: 115px;
  }

  div {
    padding-top: 10px;
    text-align: center;
    color: #606060;
    @media (max-width: 430px) {
      font-size: 16px;
    }
  }


  .img {
    min-width: 100px;
    max-width: 150px;
    min-height: 70px;
  }
`