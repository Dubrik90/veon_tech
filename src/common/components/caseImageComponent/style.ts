import styled from "styled-components";

export const CaseImageCompWrapper = styled.div`
  position: relative;
  z-index: 10;
 // margin-bottom: 80px;
  
  @media (max-width: 1920px) {
  //  margin-bottom: calc(40px + (80 - 40) * ((100vw - 320px) / (1920 - 320)));
  }
`
export const ImgBlock = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
   
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  @media (max-width: 768px) {
    scale: 1.2;

  }
  

`

