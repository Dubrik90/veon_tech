import styled from "styled-components";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import {flexColumn} from "../../../common/style/mixin";
import {TitleH4} from "../../../common/style/global";

export const CaseBlockWrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 40px;

`

export const CaseContent = styled.div`
  // max-width: 1100px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
//  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;

  @media (max-width: 1023px) {
    ${flexColumn()}
  }

  div:nth-child(1) {
    grid-area: 1 / 1 / 2 / 6;
  }

  div:nth-child(2) {
    grid-area: 2 / 1 / 3 / 2;
  }

  div:nth-child(3) {
    grid-area: 2 / 2 / 3 / 4;
  }

  div:nth-child(4) {
    grid-area: 3 / 3 / 4 / 4;
  }

  div:nth-child(5) {
    grid-area: 3 / 1 / 4 / 3;
  }

  div:nth-child(6) {
    grid-area: 4 / 1 / 5 / 4;
  }

  div:nth-child(7) {
    grid-area: 5 / 1 / 6 / 2;
  }

  div:nth-child(8) {
    grid-area: 5 / 2 / 6 / 4;
  }

  div:nth-child(9) {
    grid-area: 6 / 1 / 7 / 3;
  }

  div:nth-child(10) {
    grid-area: 6 / 3 / 7 / 4;
  }

  //display: grid;
  //grid-template-columns: repeat(3, 1fr);
  ////display: flex;
  //gap: 60px;
  //justify-content: space-around;
  //flex-wrap: wrap;
  //padding: 30px 0;


  //@media (max-width: 1440px) {
  //  gap: 20px;
  //}
  //@media (max-width: 768px) {
  //  display: none;
  //}

`
export const Button = styled.button`
  font-size: 20px;
  line-height: 1.2;
  color: var(--colors-text-dark);
`

type ButtonBlockProps = {
    showMore: boolean
}
export const ButtonBlock = styled.div<ButtonBlockProps>`
  display: ${({showMore}) => showMore ? 'none' : 'flex'};
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  background: var(--colors-bg);
  border: 1px solid var(--colors-bg-green);
  border-radius: 10px;
  font-size: 24px;
  padding: 8px 10px;
  max-width: 300px;
  margin: 0 auto 20px auto;
  transition: all 0.3s;
  cursor: pointer;
  margin-top: 40px;
  
  span {
    color: var(--colors-text-dark);
  }


  :hover {
    color: #5db447;

    ${Button} {
      color: #5db447;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`
export const ArrowIcon = styled(KeyboardDoubleArrowDownIcon)`
  fill: var(var(--colors-text-dark)) !important;
`

export const HiddenBlock = styled.div`

  position: absolute;
  top: 10px;
  left: 30px;


  width: 100%;
  height: 100%;
  // background-color: var(--colors-text-green);
  opacity: 1;
  //  visibility: hidden;
  border-radius: 17px;
  transition: all 0.3s;


  // scale: 0;
  // backdrop-filter: blur(5px);

  :hover {

  }

  div {
    ${flexColumn()};
    align-items: flex-start;
    justify-content: flex-start;
    row-gap: 10px;
    position: relative;
    padding: 10px 20px;


    //:before {
    //  content: '';
    //  position: absolute;
    //  opacity: 0.5;
    //  top: 0;
    //  left: 0;
    //  width: 100%;
    //  height: 200px;
    //  background-color: #d3e3ec;
    //}
  }


  a {
    display: inline-flex;
    padding: 10px 15px;
    font-size: 16px;
    line-height: 1.1;
    font-weight: var(--fw-bold);
    background-color: var(--colors-text-green);
    color: var(--color-grey-light);
    transition: all 0.3s;
    border-radius: 5px;

    :hover {
      background-color: var(--color-grey-light);
      color: var(--color-grey);
    }
  }
`
export const Title = styled(TitleH4)`
  // color: var(--color-grey-light);
  z-index: 1;
  font-size: 24px;
  line-height: 29px;
  font-weight: var(--fw-regular);
  color: #000000;

  .wight & {
    color: #fff;
  }

  @media (max-width: 1920px) {
    font-size: calc(14px + (32 - 14) * ((100vw - 320px) / (1920 - 320)));
  }

`
export const TextDesk = styled.p`

`
export const Text = styled.p`
  font-weight: 700;
  font-size: 32px;
  color: #000000;
  line-height: 1.1;

  .wight & {
    color: #fff;
  }

  @media (max-width: 1920px) {
    font-size: calc(14px + (32 - 14) * ((100vw - 320px) / (1920 - 320)));
  }
`


export const ImgBlock = styled.div`

`
type ContentProps = {
    showMore: boolean
}
export const Content = styled.div<ContentProps>`
  transition: all 0.3s;
  
  :hover {
      transition: all 0.3s;
      scale: 1.03;
  }


  position: relative;
  border-radius: 20px;
  // max-width: 512px;
  overflow: hidden;
  //
  //
  //
  //
  :nth-child(n + 9) {
    ${({showMore}) => showMore ? 'display: block' : 'display: none'}

  }

  //
  // @media (max-width: 1440px) {
  //   max-width: 400px;
  // }
  // @media (max-width: 1024px) {
  //   max-width: 290px;
  // }
  :before {
    //  background: #000;
    border-radius: 10px;
    opacity: 1;
    //   visibility: hidden;
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
    transition: all 0.3s;

  }


  // :hover {
    //   ${HiddenBlock} {
  //     opacity: 1;
  //     visibility: visible;
  //     left: 0;
  //     // scale: 1;
  //   }
  //
  //   :before {
  //     transition: all 0.3s;
  //     opacity: .8;
  //     visibility: visible;
  //     left: 0;
  //   }
  //
  // }
`

export const Img = styled.img`
  max-width: 1860px;
  height: 632px;
  object-fit: cover;
  border-radius: 15px;
  transition: all 0.3s;

  @media (max-width: 1439px) {
    width: 100%;
    height: calc(280px + (632 - 280) * ((100vw - 320px) / (1439 - 320)));
  }

`



