import styled from "styled-components";

export const SimilarCasesWrapper = styled.div`
  padding: 40px 0;

`

export const SimilarCasesDesktop = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  //display: flex;
  column-gap: 20px;
  
  
  @media (max-width: 940px) {
    column-gap: 15px;
  }
  @media (max-width: 768px) {
    display: none;
  }

`
export const SimilarCasesBlock = styled.div`
  max-width: 1480px;
  margin: 0 auto;
`

export const Title = styled.div`
  font-weight: var(--fw-bold);
  font-size: 35px;
  line-height: 129.5%;
  color: var(--colors-text-dark);
  margin-bottom: 30px;
`
export const ImgBlock = styled.div`
  border-radius: 17px;
  overflow: hidden;
  max-width: 329px;
  max-height: 332px;
  
`
export const Img = styled.img`
  max-width: 100%;
  transition: all 0.3s;

  :hover {
    scale: 1.1;
  }
`








