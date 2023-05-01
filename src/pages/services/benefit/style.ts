import styled from "styled-components";
import {flexColumn} from "../../../common/style/mixin";

export const BenefitWrapper = styled.div`

`
export const BenefitContentTop = styled.div`
  margin-bottom: 35px;
`
export const Title = styled.h3`
  text-align: center;
  font-weight: var(--fw-bold);
  font-size: calc(30px + (56 - 30) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.4;
  color: var(--colors-text-dark);
  margin-bottom: 13px;
  position: relative;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
  padding-bottom: 15px;

  :before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: var(--colors-text-green);
  }
`
export const SubTitle = styled.p`
  font-size: calc(18px + (28 - 18) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.3;
  color: var(--colors-text-dark);
  text-align: center;
  font-weight: var(--fw-medium);
  text-transform: uppercase;
`
export const BenefitContentBottom = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }

`
export const СircleWrap = styled.div`
  display: block;
  height: 1px;
  width: 100%;
  //margin-left: -10px;
  background: #d8d8d8;
  margin: 15px 0;
  position: relative;

`
export const Сircle = styled.div`
  display: block;
  width: 80px;
  height: 80px;
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  //margin-left: -40px;
  // background-color: #5DB447;
  border-radius: 100%;

  :before {
    content: '';
    background: var(--colors-text-green);
    border-radius: 50%;
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    transition: all .2s ease-out;
  }

  span {
    visibility: hidden;
    opacity: 0;
    line-height: 80px;
    position: relative;
    color: var(--colors-text-dark);
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    transition: opacity .2s ease-out .1s, font-size .2s ease-out .1s, visibility .2s ease-out .1s;
    height: 80px;
    width: 80px;
    display: block;
  }

`
export const BenefitCard = styled.div`
  ${flexColumn()};
  align-items: center;
  row-gap: 20px;
  margin-bottom: 40px;

  :hover {
    ${Сircle} {
      :before {
        width: 80px;
        height: 80px;
        bottom: 0;
      }

      span {
        visibility: visible;
        opacity: 1;
        font-size: 30px;
      }
    }
  }



`
export const TitleHead = styled.h2`
  font-weight: var(--fw-bold);
  font-size: calc(30px + (76 - 30) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.4;
  margin-bottom: 80px;
  color: var(--colors-text-dark);
`

export const CardTitle = styled.h4`
  font-size: calc(20px + (24 - 20) * ((100vw - 320px) / (1920 - 320)));
  text-transform: uppercase;
  line-height: 1.3;
  font-weight: var(--fw-bold);
  padding: 10px;
  color: var(--colors-text-dark);

  @media (max-width: 1052px) {
    max-width: 230px;
    text-align: center;
  }
  @media (max-width: 767px) {
    max-width: none;
  }

`

export const CardText = styled.h4`
  text-align: center;
  padding: 10px;
  color: var(--colors-text-dark);
  font-size: calc(18px + (20 - 18) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.2;
`
