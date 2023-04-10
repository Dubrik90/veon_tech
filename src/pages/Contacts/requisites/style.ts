import styled from "styled-components";
import {flexColumn} from "../../../common/style/mixin";

export const RequisitesWrapper = styled.div`
  padding-top: calc(30px + (50 - 30) * ((100vw - 320px) / (1920 - 320)));
  padding-bottom: calc(30px + (50 - 30) * ((100vw - 320px) / (1920 - 320)));
`
export const Title = styled.h5`
  font-weight: var(--fw-medium);
  font-size: calc(16px + (32 - 16) * ((100vw - 320px) / (1920 - 320)));
  line-height: 145.5%;
  color: var(--colors-text-dark);
`
export const RequisitesBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: calc(10px + (300 - 10) * ((100vw - 320px) / (1920 - 320)));
`
export const RequisitesContent = styled.div`
  ${flexColumn()};
`
export const P = styled.p`
  font-weight: var(--fw-medium);
  font-size: calc(10px + (17 - 10) * ((100vw - 320px) / (1920 - 320)));
  line-height: 145.5%;
  color: var(--colors-text-dark);
`
export const DocBlock = styled.div`
  ${flexColumn()};
  justify-content: center;
  align-items: center;
  row-gap: 15px;
`
export const ImgBlock = styled.div`
  max-width: calc(80px + (191 - 80) * ((100vw - 320px) / (1920 - 320)));
`

export const Img = styled.img`
  max-width: 100%;
`

export const Button = styled.a`
  position: relative;
  font-size: calc(12px + (16 - 12) * ((100vw - 320px) / (1920 - 320)));
  background: var(--colors-bg-green);
  font-weight: var(--fw-extra-bold);
  line-height: 1.2;
  color: var(--colors-text-wight);
  padding-top: calc(5px + (15 - 5) * ((100vw - 320px) / (1920 - 320)));
  padding-bottom: calc(5px + (15 - 5) * ((100vw - 320px) / (1920 - 320)));
  padding-left: calc(15px + (50 - 15) * ((100vw - 320px) / (1920 - 320)));
  padding-right: calc(15px + (50 - 15) * ((100vw - 320px) / (1920 - 320)));
  display: flex;
  justify-content: center;
  transition: all 0.3s;
  font-family: 'Coolvetica';
  letter-spacing: 1.1px;
  text-transform: uppercase;
  z-index: 10;
  align-self: stretch;
  cursor: pointer;
  
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
