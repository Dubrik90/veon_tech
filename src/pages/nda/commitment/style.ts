import styled from "styled-components";
import {TextRegular, TitleH2} from "../../../common/style/global";
import {flexColumn} from "../../../common/style/mixin";

export const CommitmentWrapper = styled.div`
  padding-top: 140px;
  @media (max-width: 768px) {
    padding-bottom: 20px;


`
export const CommitmentBlock = styled.div`
  display: flex;
  column-gap: 50px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
   // border-bottom: 2px solid var(--colors-bg-green);
    padding-bottom: 20px;
    column-gap: 10px;
  }
  @media (max-width: 848px) {
    flex-direction: column;
    row-gap: 40px;
  }
`
export const Content = styled.div`
  ${flexColumn()};
  row-gap: 31px;
`
export const Title = styled(TitleH2)`
  color: var(--colors-text-dark);
  
  @media (max-width: 1024px) {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`
export const Text = styled(TextRegular)`
  position: relative;
  padding-left: 30px;
  font-size: calc(20px + (28 - 20) * ((100vw - 320px) / (1920 - 320)));
  //font-size: 21px;
  //
  //
  //@media (max-width: 916px) {
  //  font-size: 18px;
  //  padding-left: 20px;
  //}
  //@media (max-width: 807px) {
  // // padding-left: 0;
  //  font-size: 18px;
  //}
  //@media (max-width: 560px) {
  //  font-size: 14px;
  //}

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background-color: var(--colors-bg-green);

    @media (max-width: 768px) {
      display: none;
    }
  }

`
export const ImageBlock = styled.div`
  flex: 1 0 40%;
  align-self: flex-end;
  @media (max-width: 848px) {
    align-self: center;
    margin-bottom: 60px;
  }
`
export const Img = styled.img`
  max-width: 100%;
  object-fit: cover;
`
