import styled from "styled-components";
import {flexColumn} from "../../../common/style/mixin";

type ImageProps = {
    src?: string;
};

export const CaseSwissResultWrapper = styled.div`


`

export const Text = styled.div`
  font-weight: var(--fw-medium);
  font-size: 40px;
  line-height: 1.4;
  color: var(--colors-text-dark);
  // max-width: 890px;
  // padding-top: 100px;
  // padding-bottom: 300px;


  @media (max-width: 1920px) {
    font-size: calc(21px + (40 - 21) * ((100vw - 320px) / (1920 - 320)));
    //  padding-top: calc(50px + (100 - 50) * ((100vw - 320px) / (1920 - 320)));
    //  padding-bottom: calc(20px + (200 - 20) * ((100vw - 320px) / (1920 - 320)));
    //  max-width: calc(350px + (890 - 350) * ((100vw - 768px) / (1920 - 768)));
  }
  @media (max-width: 767px) {
    max-width: 100%
  }

`
export const ContentBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 60px;
  
  @media (max-width: 599px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 30px;
    padding: 50px 0;
  }
`
export const ImageBlock = styled.div<ImageProps>`
  background: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
  padding-bottom: 1100px;

  @media (max-width: 1920px) {
     padding-bottom: calc(750px + (1100 - 750) * ((100vw - 600px) / (1920 - 600)));
    //   background-position: 100% 100%;
  }

  @media (max-width: 599px) {
    background-size: 0;
    padding: 0;
  }
`

export const TextBlock = styled.div`
  ${flexColumn()};
  row-gap: 50px;
  align-self: center;
  padding-left: 30%;

  @media (max-width: 1920px) {
    padding-left: 5%;
  }
  @media (max-width: 599px) {
    padding: 0 15px;
  }

`





