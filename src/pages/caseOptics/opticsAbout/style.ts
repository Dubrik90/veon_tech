import styled from "styled-components";
import {flexColumn} from "../../../common/style/mixin";

export const OpticsAboutWrapper = styled.div`

`
export const ContentBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 60px;
  padding: 50px 0;
  
  @media (max-width: 1920px) {
    font-size: calc(30px + (48 - 30) * ((100vw - 320px) / (1920 - 320)));
    column-gap: calc(20px + (60 - 20) * ((100vw - 320px) / (1920 - 320)));
  }
  
  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 30px;
  }
`

type ImageProps = {
    src?: string;
};
export const Title = styled.h4`
  font-weight: 600;
  font-size: 48px;
  line-height: 1.3;
  color: var(--colors-text-dark);

  @media (max-width: 1920px) {
    font-size: calc(30px + (48 - 30) * ((100vw - 320px) / (1920 - 320)));
  }
`

export const Text = styled.p`
  font-weight: var(--fw-medium);
  font-size: 40px;
  line-height: 1.4;
  color: var(--colors-text-dark);

  @media (max-width: 1920px) {
    font-size: calc(21px + (40 - 21) * ((100vw - 320px) / (1920 - 320)));
  }

`

export const ImageBlock = styled.div<ImageProps>`
  background: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: 100% 50%;
  background-size: contain;
  height: 100%;
  
  @media (max-width: 599px) {
    background-size: 0;
    padding: 0;
  }
  @media (max-width: 767px) {
    background-size: cover;
    padding-bottom: 70%;
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
  
  @media (max-width: 1024px) {
    p:last-child {
      margin-right: -300px;
    }
  }
  @media (max-width: 767px) {
    padding: 0 15px;
    p:last-child {
      margin-right:0;
    }
  }
`




