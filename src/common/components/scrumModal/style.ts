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
  padding: 100px 0;
  opacity: ${({openModal}) => openModal ? '1' : '0'};
  visibility: ${({openModal}) => openModal ? 'visible' : 'hidden'};
  scale: ${({openModal}) => openModal ? '1' : '0'};

  //  
  //  position: fixed;
  //  top: 0;
  //  left: 0;
  //  width: 100vw;
  //  height: 100%;
  //  align-items: center;
  //  justify-content: center;
  //  background: rgba(21, 21, 21, 0.96);
  //  z-index: 100;
  //  transition: all 0.3s;
    //  opacity: ${({openModal}) => openModal ? '1' : '0'};
    //  visibility: ${({openModal}) => openModal ? 'visible' : 'hidden'};
    //  scale: ${({openModal}) => openModal ? '1' : '0'};
  //  overflow-y: auto;
  // // padding: 100px 0 30px 0;
`

export const GridContainer = styled.div`
  position: relative;

  .cross {
    display: inline-block;
    width: 35px;
    height: 35px;
    line-height: 22px;
    text-align: center;
    font-size: 25px;
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

  .scrum-parent {
    display: grid;
    grid-template-columns: 50px repeat(3, 1fr) 50px;
    grid-template-rows: repeat(5, 30px) 35px;
    grid-column-gap: 20px;
    width: 90vw;
    overflow-x: auto;
    padding: 20px 0;
    position: relative;
  }

  .div1 {
    grid-area: 1 / 2 / 2 / 3;
  }

  .div2 {
    grid-area: 1 / 3 / 2 / 4;
  }

  .div3 {
    grid-area: 1 / 4 / 2 / 5;
  }

  .div4 {
    grid-area: 2 / 2 / 3 / 3;
  }

  .div5 {
    grid-area: 3 / 2 / 4 / 3;
  }

  .div6 {
    grid-area: 4 / 2 / 5 / 3;
  }

  .div7 {
    grid-area: 5 / 2 / 6 / 3;
  }

  .div8 {
    grid-area: 2 / 3 / 3 / 4;
  }

  .div9 {
    grid-area: 3 / 3 / 4 / 4;
  }

  .div10 {
    grid-area: 4 / 3 / 5 / 4;
  }

  .div11 {
    grid-area: 5 / 3 / 6 / 4;
  }

  .div12 {
    grid-area: 2 / 4 / 3 / 5;
  }

  .div13 {
    grid-area: 3 / 4 / 4 / 5;
  }

  .div14 {
    grid-area: 4 / 4 / 5 / 5;
  }

  .div15 {
    grid-area: 5 / 4 / 6 / 5;
    position: relative;
  }

  .div16 {
    grid-area: 6 / 1 / 7 / 6;
    background: linear-gradient(111deg, rgba(61, 95, 71, 1) 0%, rgba(93, 180, 71, 1) 100%);
    border-radius: 10px;
  }

  .div17 {
    grid-area: 1 / 1 / 6 / 2;
  }

  .div18 {
    grid-area: 1 / 5 / 6 / 6;
  }


  .div1, .div2, .div3 {
    justify-self: center;
    font-weight: var(--fw-bold);
    font-size: 22px;
  }

  .div1, .div2, .div3, .div4, .div5, .div6, .div7, .div8, .div9, .div10, .div11, .div12, .div13, .div14, .div15 {
    color: #dbe8d3;
    padding: 3px 10px;
    //  font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)));

  }

  .div4, .div5, .div6, .div7, .div8, .div9, .div10, .div11, .div12, .div13, .div14, .div15 {
    border-left: 2px solid var(--color-dg-footer);
  }

  .div7, .div11, .div15 {
    position: relative;

    span {
      position: absolute;
      bottom: -26px;
      right: 55px;

      :before {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: -40px;
        height: 35px;
        width: 35px;
        clip-path: polygon(70% 1%, 100% 50%, 70% 100%, 40% 100%, 70% 51%, 40% 0);
        background: #dbe8d3;
      }

    }
  }
`
export const HeaderBlock = styled.div`

  color: #dbe8d3;
  display: flex;
  column-gap: calc(30px + (300 - 30) * ((100vw - 768px) / (1920 - 768)));
  justify-content: center;
  align-items: center;
  margin-bottom: calc(30px + (60 - 30) * ((100vw - 320px) / (1920 - 320)));

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






