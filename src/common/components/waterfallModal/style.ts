import styled from "styled-components";
import {flexColumn} from "../../style/mixin";

type ModalWindowWrapperProps = {
    openModal?: boolean
}

export const WaterfallModalWrapper = styled.div<ModalWindowWrapperProps>`
  width: 100%;
  background: rgba(21, 21, 21, 0.96);
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  -webkit-transform: translateY(0);
  transform: translateY(0);
  height: 100vh;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
  overflow-y: auto;
  padding: 170px 0 50px 0;
  opacity: ${({openModal}) => openModal ? '1' : '0'};
  visibility: ${({openModal}) => openModal ? 'visible' : 'hidden'};
  scale: ${({openModal}) => openModal ? '1' : '0'};

  @media (max-width: 768px) {
    padding-top: 100px;
  }
`

export const GridContainer = styled.div`
  position: relative;

  .cross {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 35px;
    text-align: center;
    font-size: 40px;
    color: #faf8f8;
    cursor: pointer;
    position: fixed;
    top: 40px;
    right: 40px;
    transition: color 0.3s;

    @media (min-width: 768px) {
      :hover {
        color: var(--color-dg-footer);
      }
    }

  }
  
  .parent {
    display: grid;
    grid-template-columns: 100px repeat(6, 1fr);
    grid-template-rows: 75px 35px 75px;
    grid-column-gap: 10px;
    width: 90vw;
    overflow-x: auto;  
    padding: 20px 0;
  }

  .div1 {
    grid-area: 1 / 1 / 2 / 2;
  }

  .div2, .div3, .div4, .div5, .div6, .div7 {
    padding: 45px 5px 5px 10px;
    border-left: 2px solid var(--color-dg-footer);
    color: #dbe8d3;
    font-weight: var(--fw-bold);
    position: relative;

    :after {
      content: '';
      position: absolute;
      bottom: -28px;
      left: -12px;
      width: 22px;
      height: 22px;
      background: var(--colors-bg);
      border-radius: 100%;
    }

    :before {
      position: absolute;
      font-size: 14px;
      bottom: -24px;
      left: -4px;
      z-index: 10;
      color: var(--colors-text-dark);
    }
  }

  .div10, .div11, .div12, .div13, .div14, .div15 {
    padding: 10px 5px;
    border-left: 2px solid var(--color-dg-footer);
    color: #dbe8d3;
    font-size: 13px;
    line-height: 1.2;
  }

  .div2 {
    grid-area: 1 / 2 / 2 / 3;

    :before {
      content: '1';
    }
  }

  .div3 {
    grid-area: 1 / 3 / 2 / 4;

    :before {
      content: '2';
      left: -5px;
    }
  }

  .div4 {
    grid-area: 1 / 4 / 2 / 5;

    :before {
      content: '3';
      left: -5px;
    }
  }

  .div5 {
    grid-area: 1 / 5 / 2 / 6;

    :before {
      content: '4';
      left: -6px;
    }
  }

  .div6 {
    grid-area: 1 / 6 / 2 / 7;

    :before {
      content: '5';
      left: -5px;
    }
  }

  .div7 {
    grid-area: 1 / 7 / 2 / 8;

    :before {
      content: '6';
      left: -7px;
    }
  }

  .div8 {
    grid-area: 2 / 1 / 3 / 8;
    background: linear-gradient(111deg, rgba(61, 95, 71, 1) 0%, rgba(93, 180, 71, 1) 100%);
    border-radius: 10px;
  }

  .div9 {
    grid-area: 3 / 1 / 4 / 2;
  }

  .div10 {
    grid-area: 3 / 2 / 4 / 3;
  }

  .div11 {
    grid-area: 3 / 3 / 4 / 4;
  }

  .div12 {
    grid-area: 3 / 4 / 4 / 5;
  }

  .div13 {
    grid-area: 3 / 5 / 4 / 6;
  }

  .div14 {
    grid-area: 3 / 6 / 4 / 7;
  }

  .div15 {
    grid-area: 3 / 7 / 4 / 8;
  }

`
export const HeaderBlock = styled.div`

  color: #dbe8d3;
  display: flex;
  column-gap: calc(30px + (300 - 30) * ((100vw - 768px) / (1920 - 768)));
  justify-content: center;
  align-items: center;
  margin-bottom: calc(30px + (100 - 30) * ((100vw - 320px) / (1920 - 320)));

  @media (max-width: 1000px) {
    flex-direction: column;
    row-gap: 20px;
    align-items: flex-start;
  }

`
export const Title = styled.h4`
  font-size: calc(30px + (65 - 30) * ((100vw - 320px) / (1920 - 320)));
  font-weight: var(--fw-bold);
`
export const Text = styled.p`
  max-width: calc(300px + (630 - 300) * ((100vw - 320px) / (1920 - 320)));
  font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.2;

`






