import styled from 'styled-components';

export const WorkDeskWrapper = styled.div`
  
  :nth-child(1) {
    grid-area: img1;
  }

  :nth-child(2) {
    grid-area: img2;
  }

  :nth-child(3) {
    grid-area: img3;
  }

  :nth-child(4) {
    grid-area: img5;
  }

  :nth-child(5) {
    grid-area: img4;
  }
  
@media (max-width: 768px) {
  display: none;
}
    
`
export const WorkDeskImage = styled.div`
  margin-bottom: 5px;
  overflow: hidden;
  border-radius: 10px;
  
    img {
      width: 100%;
      height: 100%;
      transition: scale 0.3s;
      :hover {
        scale: 1.1;
      }
    }
`
export const Title = styled.p`
  font-weight: var(--fw-extra-bold);
  font-size: 24px;
  line-height: 1.1;
  color: #DBE8D3;
  @media (max-width: 1254px) {
    font-size: 20px;
  }
  @media (max-width: 830px) {
    font-size: 18px;
  }
`
export const SubTitle = styled.p`
  font-weight: var(--fw-extra-bold);
  font-size: 20px;
  line-height: 1.1;
  color: var(--colors-text-green);

  @media (max-width: 1254px) {
    font-size: 18px;
  }
  @media (max-width: 830px) {
    font-size: 16px;
  }
`


