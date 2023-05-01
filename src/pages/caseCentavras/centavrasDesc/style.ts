import styled from "styled-components";

export const CentavrasDescWrapper = styled.div`
  position: relative;
  
  @media (max-width: 1439px) {
   padding-top: 50px;
  }
  
`
export const ImgBlock = styled.div`
  width: 100%;
  max-height: 1400px;
  
  
`
export const Img = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  //opacity: 0.4;
`

export const Text = styled.div`
  padding: 10px 15px;
  font-weight: var(--fw-medium);
  font-size: 40px;
  line-height: 1.3;
  color: var(--color-dark);
  max-width: 840px;
  position: absolute;
  right: 12%;
  top: -12%;

  @media (max-width: 1920px) {
    font-size: calc(18px + (40 - 18) * ((100vw - 320px) / (1920 - 320)));
    top: calc(-15% + (-12 - 15) * ((100vw - 320px) / (1308 - 320)));
    right: 0;
  }
  @media (max-width: 1439px) {
    position: relative;
    max-width: 100%;
    margin-bottom: 50px;
  }
  

  @media (max-width: 447px) {
   // top: 10%;
   // left: 50%;
   // transform: translate(-50% -50%);
  //  max-width: 100%;
    
  }
`