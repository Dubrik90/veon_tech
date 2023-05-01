import styled from "styled-components";
import {flexColumn} from "../../../common/style/mixin";

type ImageProps = {
    src: string;
};

export const HappyElephantResultWrapper = styled.div<ImageProps>`
  background: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 63% 50%;
  height: 1524px;
  // padding-bottom: 20%;

  @media (max-width: 1920px) {

    // background-position: calc(25% + (0 - 20) * ((100vw - 320px) / (1920 - 320))) 50%;
    height: calc(768px + (1424 - 768) * ((100vw - 1024px) / (1920 - 1024)));
  }
  @media (max-width: 767px) {
    //  background-size: 0;
    //  height: auto;
    //  padding-bottom: 40px;
    //  padding-top: 40px;
  }
  @media (max-width: 1439px) {
    display: none;
  }


`
export const ResultContent = styled.div`
  ${flexColumn()};
  row-gap: 50px;
  padding-top: 40px;

  @media (max-width: 1920px) {
    row-gap: calc(21px + (40 - 21) * ((100vw - 1440px) / (1920 - 1440)));

  }
  @media (max-width: 767px) {
    row-gap: 30px;
  }
`

export const Text = styled.p`
  font-weight: var(--fw-medium);
  font-size: 40px;
  line-height: 1.3;
  color: var(--color-dark);
  max-width: 735px;
  padding-top: 20px;


  @media (max-width: 1920px) {
    font-size: calc(21px + (40 - 21) * ((100vw - 320px) / (1920 - 320)));
    // padding-top: calc(50px + (104 - 50) * ((100vw - 1024px) / (1920 - 1024)));
    //   padding-bottom: calc(50px + (172 - 50) * ((100vw - 1024px) / (1920 - 1024)));
  }
  @media (max-width: 1440px) {
    max-width: 645px;
  }

  @media (max-width: 767px) {
    color: var(--colors-text-dark);
    max-width: 100%;
    padding-top: 0;
  }

`

export const HappyElephantResultWrapperMob = styled.div`
  display: none;
  @media (max-width: 1439px) {
    display: block;
 //   padding-bottom: 50px;
    
  }
`
export const TextMob = styled.p`
  font-weight: var(--fw-medium);
  font-size: 40px;
  line-height: 1.3;
  color: var(--color-dark);
  padding-top: 30px;
  margin-bottom: 50px;


  @media (max-width: 1920px) {
    font-size: calc(21px + (40 - 21) * ((100vw - 320px) / (1920 - 320)));
    margin-bottom: calc(30px + (50 - 30) * ((100vw - 320px) / (1920 - 320)));
    // padding-top: calc(50px + (104 - 50) * ((100vw - 1024px) / (1920 - 1024)));
    //   padding-bottom: calc(50px + (172 - 50) * ((100vw - 1024px) / (1920 - 1024)));
  }

  
`





