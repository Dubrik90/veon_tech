import styled from "styled-components";
import {flexColumn} from "../../../common/style/mixin";

export const ChoiceBonuseWrapper = styled.div`
  background: var(--colors-bg);
  padding: 40px 0 60px 0;
`
export const BonuseContent = styled.div`
  ${flexColumn()};
  row-gap: 5px;

  .typing-text {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    font-size: 24px;
    font-weight: bold;
  }

`
export const Title = styled.h4`
  font-weight: var(--fw-bold);
  font-size: calc(16px + (28 - 16) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.3;
  color: var(--colors-text-dark);
  
`
export const SubTitle = styled.p`
  font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.3;
  color: var(--colors-text-dark);
  margin-bottom: calc(30px + (60 - 30) * ((100vw - 320px) / (1920 - 320)));
  
`
export const Text = styled.p`
  align-self: center;
  font-weight: var(--fw-bold);
  font-size: calc(18px + (40 - 18) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.4;
  color: var(--colors-text-dark);
  position: relative;
  display: inline-block;
  padding: 10px 0;
  text-decoration: none;
  overflow: hidden;

  @media(max-width: 1024px) {
    //font-size: 30px;
  }
  
  :before {
    content: "";
    position: absolute;
    bottom: 0;
    left: -50%;
    width: 100%;
    height: 5px;
    background-color: var(--colors-text-green);
    animation: circle 2s linear infinite;
  }

  @keyframes circle {
    0% {
      transform: translateX(-50%) rotate(0deg);
    }
    100% {
      transform: translateX(170%);
    }
  }


  span {
    color: var(--colors-text-green);
  }
`






