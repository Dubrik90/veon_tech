import styled from "styled-components";
import {flexColumn} from "../../common/style/mixin";

export const CaseGranitWrapper = styled.div`
  overflow: hidden;
`
export const GranitTextContent = styled.div`
 // margin-top: 80px;
  margin-bottom: 80px;
  position: relative;
  z-index: 15;
  ${flexColumn()};
  row-gap: 50px;
  margin-top: 80px;

 }

  @media (max-width: 1920px) {
    row-gap: calc(30px + (50 - 30) * ((100vw - 320px) / (1920 - 320)));
    margin-top: calc(40px + (80 - 40) * ((100vw - 320px) / (1920 - 320)));

    margin-bottom: calc(50px + (80 - 50) * ((100vw - 320px) / (1920 - 320)));
  }


`
export const Text = styled.p`
  font-weight: var(--fw-regular);
  font-size: 40px;
  line-height: 1.3;
  color: var(--colors-text-dark);

  span {
    font-weight: var(--fw-medium);
  }

  @media (max-width: 1920px) {
    font-size: calc(21px + (40 - 21) * ((100vw - 320px) / (1920 - 320)));
  }
`




