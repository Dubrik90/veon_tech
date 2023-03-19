import styled from 'styled-components';


export const ReviewsWrapper = styled.div`
 // background: var(--color-bg-green-light);
  
  
`
export const Title = styled.h3`
  color: var(--colors-text-dark);
  border-top: 2px solid #6EEC4E;
  padding-top: 80px;
  font-weight: var(--fw-bold);
  line-height: 21px;
  padding-bottom: 40px;
  font-size: 36px;
  text-align: center;
  
  @media (max-width: 768px) {
    text-align: center;
    font-size: 28px;
    line-height: 31px;
    font-weight: var(--fw-bold);
    margin: 0 -15px 30px -15px;
    padding-top: 25px;
    border-top: none;
  }


`
export const Line = styled.div`
  border-bottom: 2px solid #6EEC4E;
  
`

