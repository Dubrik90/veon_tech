import styled from "styled-components";
import {flexColumn} from "../../../common/style/mixin";

type ImageProps = {
    src: string;
};

export const CentavrasResultWrapper = styled.div<ImageProps>`
  background: url(${(props) => props.src});
  background-position: 100% 0;
  background-repeat: no-repeat;
  background-size: cover;

  padding-bottom: 12%;
  
  @media (max-width: 1237px) {
    background-size: 0;
    padding: 40px 0;
  }

`

export const Content = styled.div`
  ${flexColumn()};
  row-gap: 40px;
  padding-top: 80px;

`

export const Text = styled.p`
  max-width: 840px;
  font-weight: var(--fw-medium);
  font-size: 40px;
  line-height: 1.3;
  color: var(--color-dark);

  @media (max-width: 1920px) {
    font-size: calc(21px + (40 - 21) * ((100vw - 320px) / (1920 - 320)));
  }

  @media (max-width: 1237px) {
    color: var(--colors-text-dark);
    max-width:100%;
  }
`



