import styled from "styled-components";
import {flexColumn} from "../../../common/style/mixin";

export const MethodologyWrapper = styled.div`
  padding-top: calc(30px + (50 - 30) * ((100vw - 320px) / (1920 - 320)));
  padding-bottom: calc(30px + (40 - 30) * ((100vw - 320px) / (1920 - 320)));

`
export const MethodologyContent = styled.div`
  ${flexColumn()};
  justify-content: center;
`
export const Title = styled.h2`
  text-align: center;
  font-weight: var(--fw-bold);
  font-size: calc(25px + (45 - 25) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.4;
  margin-bottom: 66px;
  color: var(--colors-text-dark);
  
  @media (max-width: 768px) {
  //  font-size: 38px;
    margin-bottom: 30px;
  }
  @media (max-width: 500px) {
   // font-size: 28px;
   // line-height: 37px;
  }
`
export const MethodologyBlock = styled.div`
  display: flex;
  column-gap: calc(50px + (200 - 50) * ((100vw - 768px) / (1920 - 768)));
  justify-content: center;
  
  @media (max-width: 600px) {
    flex-direction: column;
    row-gap: 20px;
   // align-items: center;
  }
`
export const BlockColumn = styled.div`
  position: relative;
  
  :not(:last-child) {
    :after {
      content: '';
      position: absolute;
      bottom: 0;
      right: calc(-25px + (-100 - -25) * ((100vw - 768px) / (1920 - 768)));
      width: 1px;
      height: 100%;
      background: #D9D9D9;

      @media (max-width: 600px) {
        display: none;
        //width: 100%;
        //height: 1px;
        //bottom: calc(-25px + (-100 - -25) * ((100vw - 768px) / (1920 - 768)));
        //right: 0;
      }
    }
  }
  
`
export const TitleMethodology = styled.h4`
  text-transform: uppercase;
  font-size: calc(28px + (60 - 28) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.3;
  font-weight: var(--fw-bold);
  margin-bottom: 14px;
  color: var(--colors-text-green);
`
export const Ul = styled.ul`
  ${flexColumn()};
  row-gap: 10px;
  margin-bottom: 15px;
`
export const Li = styled.li`
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: var(--colors-text-dark);
  
  img {
    max-width: 28px;
  }
  
  span {
    font-size: calc(18px + (28 - 18) * ((100vw - 320px) / (1920 - 320)));
    line-height: 1.3;
  }
`
export const Button = styled.button`
  position: relative;
  align-self: center;
  font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)));
  background: var(--colors-bg-green);
  font-weight: var(--fw-extra-bold);
  line-height: 1.2;
  color: var(--colors-text-wight);
  padding: 15px 50px;
  display: flex;
  justify-content: center;
  transition: all 0.3s;
  font-family: 'Coolvetica';
  letter-spacing: 1.1px;
  text-transform: uppercase;
  z-index: 10;

  @media(max-width: 480px) {
    width: 100%;
  }


  //@media (max-width: 980px) {
  //  align-self: stretch;
  //}

  :before {
    background-color: var(--colors-bg-green);
    border: 2px solid var(--colors-bg-green);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: background-color .3s ease-in-out, border-color .3s ease-in-out, transform .3s ease-in-out;
    width: 100%;
    z-index: -1;
  }

  @media (min-width: 769px) {
    :hover {
      background: var(--colors-text-wight);
      color: black;
      transition: all 0.3s;

      :before {
        transition: all 0.3s;
        background-color: var(--colors-text-wight);
        transform: scale(1.1);
      }
    }
  }
`


