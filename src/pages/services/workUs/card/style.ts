import styled from "styled-components";
import {flexColumn} from "../../../../common/style/mixin";
import {TextRegular, TitleH3} from "../../../../common/style/global";

export const CardWrapper = styled.div`
  ${flexColumn()};
  row-gap: 20px;
  background: var(--color-grey-light);
  border-radius: 15px;
  box-shadow: 0 4px 4px rgba(0,0,0,.25);
  padding: 20px;

  @media(max-width: 1018px) {
    row-gap: 10px;
  }
  @media(max-width: 425px) {
   margin: 0 -15px;
    border-radius: 0;
  }
  
`
export const ImgBlock = styled.div`
  max-width: 45px;
`
export const Img = styled.img`
  max-width: 100%;
`
export const Title = styled.h3`
  font-size: 18px;
  min-height: 45px;
  font-weight: var(--fw-bold);
  line-height: 1.3;
  color: var(--color-dark);

  @media(max-width: 1112px) {
    font-size: 16px;
    min-height: 40px;
  }
  @media(max-width: 1018px) {
    min-height: auto;
  }
  @media(max-width: 425px) {
    font-size: 14px;
  }
`
export const Text = styled(TextRegular)`
  font-size: 16px;
  color: var(--color-dark);
  @media(max-width: 1112px) {
    font-size: 14px;
  }
  @media(max-width: 425px) {
    font-size: 13px;
  }
`





