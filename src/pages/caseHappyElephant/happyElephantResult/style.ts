import styled from "styled-components";
import {flexColumn} from "../../../common/style/mixin";

type ImageProps = {
    src: string;
};

export const HappyElephantResultWrapper = styled.div<ImageProps>`
  background: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0% 50%;
  height: 1424px;

  @media (max-width: 1920px) {
    background-position: calc(25% + (0 - 20) * ((100vw - 320px) / (1920 - 320))) 50%;
    height: calc(1016px + (1424 - 1016) * ((100vw - 1024px) / (1920 - 1024)));
  }
  @media (max-width: 767px) {
    background-size: 0;
    height: auto;
    padding-bottom: 40px;
    padding-top: 40px;
  }
`
export const ResultContent = styled.div`
  ${flexColumn()};
  row-gap: 50px;

  @media (max-width: 767px) {
    row-gap: 30px;
  }
`

export const Text = styled.p`
  font-weight: var(--fw-medium);
  font-size: 40px;
  line-height: 1.3;
  color: var(--color-dark);
  max-width: 745px;
  padding-top: 80px;


  @media (max-width: 1920px) {
    font-size: calc(21px + (40 - 21) * ((100vw - 320px) / (1920 - 320)));
    // padding-top: calc(50px + (104 - 50) * ((100vw - 1024px) / (1920 - 1024)));
    //   padding-bottom: calc(50px + (172 - 50) * ((100vw - 1024px) / (1920 - 1024)));
  }

  @media (max-width: 767px) {
    color: var(--colors-text-dark);
    max-width: 100%;
    padding-top: 0;
  }

`







