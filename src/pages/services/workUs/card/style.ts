import styled from "styled-components";
import {flexColumn} from "../../../../common/style/mixin";
import {TextRegular, TitleH3} from "../../../../common/style/global";

export const CardWrapper = styled.div`
  ${flexColumn()};
  row-gap: 20px;
 // background: var(--color-grey-light);
 // border-radius: 15px;
 // box-shadow: 0 4px 4px rgba(0,0,0,.25);
  padding: 20px 40px 60px 40px;
  align-items: center;
  border-bottom: 1px solid  rgb(217, 217, 217);

  @media (max-width: 767px) {
    padding: 20px 20px 60px 20px;
  }

  @media (min-width: 768px) {
    border-right: 1px solid  rgb(217, 217, 217);
  }
  
  :nth-child(2) {
    border-right: none;
  }
  :nth-child(4) {
    border-right: none;
  }
  

  @media(max-width: 1018px) {
    row-gap: 10px;
  }
  @media(max-width: 767px) {
    row-gap: 15px;
  }
  
  //@media(max-width: 768px) {
  // margin: 0 -15px;
  //  border-radius: 0;
  //}
  
`
export const ImgBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 15px;

  @media(max-width: 1136px) {
    flex-direction: column;
   // row-gap: 15px;
  }
  
  @media (max-width: 767px) {
    flex-direction: row;
  }
  @media (max-width: 527px) {
    flex-direction: column;
    row-gap: 15px;
  }
  
`
export const Img = styled.img`
  max-width: 45px;
  max-height: 45px;
  
  @media(max-width: 1136px) {
    margin-bottom: 15px;
  }
  @media (max-width: 767px) {
    margin-bottom: 0;
  }
`
export const Title = styled.h3`
  font-size: calc(18px + (22 - 18) * ((100vw - 320px) / (1920 - 320)));
  //min-height: 45px;
  font-weight: var(--fw-bold);
  line-height: 1.3;
  color: var(--colors-text-dark);
  text-transform: uppercase;

  @media(max-width: 1136px) {
    min-height: 47px;
    text-align: center;
    display: flex;
    align-items: center;
  }
  @media (max-width: 767px) {
    min-height: auto;
  }
  //@media(max-width: 1018px) {
  //  min-height: auto;
  //}
  //@media(max-width: 425px) {
  //  font-size: 14px;
  //}
`
export const Text = styled(TextRegular)`
  font-size:  calc(16px + (18 - 16) * ((100vw - 320px) / (1920 - 320)));
  text-align: justify;
  color: var(--colors-text-dark);
  
  //@media(max-width: 1112px) {
  //  font-size: 14px;
  //}
  //@media(max-width: 425px) {
  //  font-size: 13px;
  //}
`





