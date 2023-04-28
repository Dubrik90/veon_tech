import styled from "styled-components";

type ImageProps = {
    src?: string;
};

export const JointWorkWrapper = styled.div<ImageProps>`
  background: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: 100% 50%;
  background-size: 52%;

  @media (max-width: 1920px) {
    background-size: calc(20% + (52% - 20%) * ((100vw - 768px) / (1920 - 768)));
    background-position: 100% 100%;
  }
  
  @media (max-width: 767px) {
   background-size: 0;
  }
`

export const Text = styled.div`
  font-weight: var(--fw-medium);
  font-size: 40px;
  line-height: 1.4;
  color: var(--colors-text-dark);
  max-width: 890px;
  padding-top: 100px;
  padding-bottom: 300px;
  

  @media (max-width: 1920px) {
    font-size: calc(21px + (40 - 21) * ((100vw - 320px) / (1920 - 320)));
    padding-top: calc(50px + (100 - 50) * ((100vw - 320px) / (1920 - 320)));
    padding-bottom: calc(20px + (200 - 20) * ((100vw - 320px) / (1920 - 320)));
    max-width: calc(350px + (890 - 350) * ((100vw - 768px) / (1920 - 768)));
  }
  @media (max-width: 767px) {
    max-width: 100%
  }

`
export const Block = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
 // align-items: center;
`
export const ImgBlock = styled.div`
 
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`




