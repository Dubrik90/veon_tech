import styled from "styled-components";
import {TitleH2, TitleH4} from "../../../common/style/global";
import {flexColumn} from "../../../common/style/mixin";

export const ContentWrapper = styled.div`
  background-color: var(--color-bg-green-light);
  @media (max-width: 1260px) {
    padding: 40px 0;
  }

  .LockIcon {
    font-size: 170px;
    fill: var(--colors-text-dark);
    z-index: 10;
    @media (max-width: 1760px) {
      font-size: 120px;
    }
    @media (max-width: 1715px) {
      font-size: 100px;
    }
    @media (max-width: 1439px) {
      font-size: 75px;
    }
    @media (max-width: 1260px) {
      display: none;
    }
  }
`
export const TitleHeader = styled(TitleH2)`
  padding-top: 75px;

  @media (max-width: 1439px) {
    margin-bottom: 20px;
    padding-top: 25px;
  }
  @media (max-width: 528px) {
    font-size: 30px;
    padding-top: 0;
  }
  @media (max-width: 407px) {
    font-size: 30px;
  }

`
export const ContentBlock = styled.div`
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 1260px) {
    flex-direction: column;
    row-gap: 15px;
    align-items: stretch;
    height: auto;
  }

  :before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 245px;
    height: 245px;
    background-color: #3d5f47;
    border-radius: 100%;
    @media (max-width: 1760px) {
      width: 200px;
      height: 200px;
    }
    @media (max-width: 1715px) {
      width: 150px;
      height: 150px;
    }
    @media (max-width: 1439px) {
      width: 110px;
      height: 110px;
    }
    @media (max-width: 1260px) {
      display: none;
    }
  }
`
export const Title = styled(TitleH4)`  
  margin-bottom: 10px;
  
  @media (max-width: 767px) {
    font-size: 18px;
    text-align: center;
  }
  @media (max-width: 424px) {
    font-size: 16px;
  }

`
export const Text = styled.div`
  font-size: 17px;
  line-height: 122%;
  color: var(--colors-text-dark);
  @media (max-width: 767px) {
    font-size: 16px;
    text-align: center;
  }
  @media (max-width: 424px) {
    font-size: 13px;
  }
`
export const Block = styled.div`
  ${flexColumn()};
  background-color: var(--colors-bg);
  border-radius: 15px;
  max-width: 400px;
  position: absolute;
  padding: 28px 10px;

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



