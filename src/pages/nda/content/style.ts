import styled from "styled-components";
import {TitleH2, TitleH4} from "../../../common/style/global";
import {flexColumn} from "../../../common/style/mixin";

export const ContentWrapper = styled.div`
  background-color: var(--color-bg-green-light);
  padding-top: calc(40px + (80 - 40) * ((100vw - 320px) / (1920 - 320)));
  padding-bottom: calc(40px + (60 - 40) * ((100vw - 320px) / (1920 - 320)));
`
export const TitleHeader = styled(TitleH2)`
  font-weight: var(--fw-bold);
  font-size: calc(30px + (76 - 30) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.4;
  margin-bottom: 80px;
  color: var(--colors-text-dark);

`
export const ContentBlock = styled.div`

  .parent {
    display: grid;
    grid-template-columns: 400px 220px 400px;
    grid-template-rows: 1fr 220px 1fr;
    grid-column-gap: calc(30px + (150 - 30) * ((100vw - 1024px) / (1920 - 1024)));
    grid-row-gap: 0;
    align-items: center;
    justify-content: center;

    @media (max-width: 1760px) {
      grid-template-columns: 400px 200px 400px;
      grid-template-rows: 1fr 200px 1fr;
    }
    @media (max-width: 1439px) {
      grid-template-columns: 380px 180px 380px;
      grid-template-rows: 1fr 180px 1fr;
    }
    @media (max-width: 1023px) {
      display: flex;
      flex-direction: column;
      row-gap: 40px;
    }

  }

  .div1, .div2, .div3, .div4 {
    ${flexColumn()};
    background-color: var(--colors-bg);
    border-radius: 15px;
    padding: 28px 20px;
    position: relative;
    z-index: 10;
    
    @media (max-width: 1023px) {
      border-radius: 5px;
    }

    @media (min-width: 1024px) {
      :before {
        content: '';
        position: absolute;
        width: 70px;
        height: 120px;
        clip-path: polygon(50% 0%, 0 100%, 100% 100%);
        background-color: var(--colors-bg);
      }
    }
  }
  
  .div1 {
    grid-area: 1 / 1 / 2 / 2;

    :before {
      bottom: -54px;
      right: -45px;
      transform: rotate(120deg);
    }
  }

  .div2 {
    grid-area: 1 / 3 / 2 / 4;

    :before {
      bottom: -54px;
      left: -45px;
      transform: rotate(-120deg);
    }
  }

  .div3 {
    grid-area: 3 / 1 / 4 / 2;

    :before {
      top: -54px;
      right: -40px;
      transform: rotate(60deg);
    }
  }

  .div4 {
    grid-area: 3 / 3 / 4 / 4;

    :before {
      top: -54px;
      left: -40px;
      transform: rotate(-60deg);
    }
  }

  .div5 {
    grid-area: 2 / 2 / 3 / 3;
    align-self: center;
    justify-self: center;
    fill: var(--colors-text-dark);
    z-index: 10;
    position: relative;

    @media (max-width: 1023px) {
      display: none;
    }
    
    .LockIcon {
      font-size: 120px;
      fill: var(--colors-text-dark);
      z-index: 10;

      @media (max-width: 1760px) {
        font-size: 100px;
      }
      @media (max-width: 1439px) {
        font-size: 75px;
      }
      @media (max-width: 1023px) {
        display: none;
      }
    }

    :before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 220px;
      height: 220px;
      background-color: #3d5f47;
      border-radius: 100%;
      z-index: -1;

      @media (max-width: 1760px) {
        width: 200px;
        height: 200px;
      }
      @media (max-width: 1439px) {
        width: 150px;
        height: 150px;
      }
`
export const Title = styled(TitleH4)`
  color: var(--colors-text-dark);
  margin-bottom: 15px;
  font-size: 24px;
  z-index: 10;

  @media (max-width: 767px) {
    font-size: 20px;
  }
`
export const Text = styled.div`
  font-size: 18px;
  line-height: 1.2;
  color: var(--colors-text-dark);
  z-index: 10;
`
export const Block = styled.div`
  ${flexColumn()};
  background-color: var(--colors-bg);
  border-radius: 15px;
  max-width: 450px;
  position: absolute;
  padding: 28px 20px;

  @media (max-width: 1260px) {
    position: static;
  }
  @media (max-width: 1260px) {
    max-width: 100%;
  }
  @media (max-width: 768px) {
    padding: 15px;
  }


  span {
    position: relative;

    :before {
      content: "";
      width: 60px;
      clip-path: polygon(50% 0, 20% 100%, 80% 100%);
      height: 60px;
      background-color: var(--colors-bg);
      position: absolute;

      @media (max-width: 1260px) {
        display: none;
      }
    }
  }
`
export const Block1 = styled(Block)`
  top: 10%;
  left: 19%;

  @media (max-width: 1760px) {
    top: 13%;
  }
  @media (max-width: 1715px) {
    left: 15%;
  }
  @media (max-width: 1439px) {
    left: 10%;
    top: 18%;
  }

  span {
    :before {
      top: -5px;
      left: 370px;
      transform: rotate(120deg);
    }
  }

`
export const Block2 = styled(Block)`
  top: 10%;
  right: 19%;

  @media (max-width: 1760px) {
    top: 13%;
    right: 19%;
  }
  @media (max-width: 1715px) {
    right: 15%;
  }
  @media (max-width: 1439px) {
    top: 18%;
    right: 10%;
  }

  span {
    :before {
      top: -5px;
      left: -55px;
      transform: rotate(-120deg);
    }
  }


`
export const Block3 = styled(Block)`
  bottom: 10%;
  right: 19%;

  @media (max-width: 1760px) {
    bottom: 13%;
    right: 19%;
  }
  @media (max-width: 1715px) {
    right: 15%;
  }
  @media (max-width: 1439px) {
    bottom: 15%;
    right: 10%;
  }

  span {
    :before {
      top: -175px;
      left: -55px;
      transform: rotate(-63deg);
    }
  }
`
export const Block4 = styled(Block)`
  bottom: 10%;
  left: 19%;

  @media (max-width: 1760px) {
    bottom: 13%;
    left: 19%;
  }
  @media (max-width: 1715px) {
    left: 15%;
  }
  @media (max-width: 1439px) {
    bottom: 15%;
    left: 10%;
  }

  span {
    :before {
      top: -175px;
      left: 370px;
      transform: rotate(63deg);
    }
  }
`



