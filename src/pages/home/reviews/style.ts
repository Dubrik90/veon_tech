import styled from 'styled-components';


export const ReviewsWrapper = styled.div`
`
export const Title = styled.h3`
  text-align: center;
  font-weight: var(--fw-bold);
  font-size: calc(30px + (76 - 30) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.4;
  color: var(--colors-text-dark);
  margin-bottom: calc(30px + (40 - 30) * ((100vw - 320px) / (1920 - 320)));
  
  @media (max-width: 768px) {
    //margin: 0 -15px 30px -15px;
    //padding-top: 25px;
    //border-top: none;
  }


`
export const Line = styled.div`
  border-bottom: 2px solid #6EEC4E;
  
`

