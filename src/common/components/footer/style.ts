import styled from 'styled-components';
import {flexColumn} from "../../style/mixin";


export const FooterWrapper = styled.footer`
  background-color: var(--color-dg-footer);
  padding-top: calc(20px + (50 - 20) * ((100vw - 320px) / (1920 - 320)));
`
export const FooterContent = styled.div`
  ${flexColumn()}
`

export const FooterTop = styled.div`
  display: flex;
  column-gap: 20px;
  justify-content: space-between;
  padding-bottom: 20px;
  align-items: center;
 // min-height: 200px;

  @media (max-width: 1227px) {
    flex-direction: column;
  }
  @media (max-width: 456px) {
    min-height: 150px;
  }

  img {
  //  padding: 70px 0;
    max-width: 100%;
    max-height: 100%;
    @media (max-width: 1227px) {
      padding: 0;
      max-height: 85px;
      object-fit: contain;
    }
  }

`
type ImgWrapProps = {
    img: string
}

export const FooterIcons = styled.div`
  display: flex;
  justify-content: center;
 // align-self: flex-end;
  flex-wrap: wrap;
  column-gap: 12px;
  
  @media (max-width: 1227px) {
    align-self: center;
    column-gap: 20px;
  }
  @media (max-width: 511px) {
    column-gap: 10px;
  }
   
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
   width: 66px;
    height: 66px;
    border-radius: 50%;
   // background-color: var(--color-withe);
    cursor: pointer;
    transition: all 0.3s;
    
    :hover {
      opacity: 0.5;
    }

    @media (max-width: 456px) {
      width: 54px;
      height: 54px;
    }
    @media (max-width: 395px) {
      width: 40px;
      height: 40px;
    }
  }
`
export const ImgBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 66px;
  height: 66px;
  border-radius: 50%;
  background-color: var(--color-withe);
  cursor: pointer;
  transition: all 0.3s;
  
  :hover {
    opacity: 0.5;
  }
  
  @media (max-width: 456px) {
    width: 54px;
    height: 54px;
  }
`
export const ImgWrap = styled.div<ImgWrapProps>`
  background-image: url(${props => props.img});
  background-position: center;
  background-size: contain;
  width: 41px;
  height: 41px;
  
  @media (max-width: 395px) {
    width: 30px;
    height: 30px;
  }
`
export const ImgWrapBottom = styled(ImgWrap)<ImgWrapProps>`
  width: 70px;
  height: 70px;
`
export const FooterBottom = styled.div`
  padding: 56px 0 54px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid var(--color-grey-light);
  color: var(--color-withe);
  column-gap: 15px;
  
  @media (max-width: 1227px) {
    ${flexColumn()}
    row-gap: 70px;
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`
export const About = styled.div`
  ${flexColumn()}
  row-gap: 40px;
  align-self: flex-end;
  
  @media (max-width: 1227px) {
    align-self: center;
    row-gap: 15px;
  }
  @media (max-width: 768px) {
    align-self: center;
    row-gap: 5px;
  }
`

export const AboutContact = styled.div`
  ${flexColumn()}
  row-gap: 15px;
  align-self: flex-start;
  
  @media (max-width: 1227px) {
    align-self: center;
  }
  @media (max-width: 768px) {
    align-self: center;
    row-gap: 5px;
  }
`
export const Corporation = styled.div`
  ${flexColumn()}
  row-gap: 15px;
  align-self: center;
  
  @media (max-width: 768px) {
    align-self: center;
    row-gap: 5px;
  }
`