import styled from 'styled-components';

export const WorkDeskWrapper = styled.div`
@media (max-width: 768px) {
  display: none;
}
    
`
export const WorkDeskImage = styled.div`
  
    img {
      max-width: 100%;
      height: 100%;
      transition: scale 0.3s;
      :hover {
        scale: 1.05;
      }
    }
`
export const Title = styled.p`
  font-weight: var(--fw-extra-bold);
  font-size: 24px;
  line-height: 30px;
  color: #DBE8D3;
`
export const SubTitle = styled.p`
  font-weight: var(--fw-extra-bold);
  font-size: 24px;
  line-height: 30px;
  color: var(--colors-text-green);
`


