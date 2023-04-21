import styled from "styled-components";
import {flexColumn} from "../../style/mixin";

type ModalReviewWrapperProps = {
    isOpen: boolean | null
}
export const ModalReviewWrapper = styled.div<ModalReviewWrapperProps>`
  position: fixed;
  width: 100vw;
  height: 100%;
  overflow-y: scroll;
  color: #fff;
  top: 0;
  left: 0;
  z-index: 100;
  transition: visibility .3s,opacity .3s,transform .3s;
  opacity: ${({isOpen}) => isOpen ? '1' : '0'};
  visibility: ${({isOpen}) => isOpen ? 'visible' : 'hidden'};
  scale: ${({isOpen}) => isOpen ? '1' : '0'};

`
export const WrapperCenter = styled.div`
  position: relative;
  padding: 100px 0;
`

export const Clouse = styled.div`
  position: absolute;
  right: 0;
  top: -60px;
  cursor: pointer;
  z-index: 2;
  transition: transform .3s;
  color: #fff;
  transform: rotate(-45deg);
  width: 40px;
  height: 40px;
  
  :hover {
    transform: rotate(0);
  }
  
  span:nth-child(1) {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 2px;
    background-color: black;
    border-radius: 2px;
  }
  span:nth-child(2) {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    width: 40px;
    height: 2px;
    background-color: black;
    border-radius: 2px;
  }
    
`
export const Content = styled.div`
  position: relative;
  max-width: 960px;
  margin: 0 auto;
  box-sizing: content-box;
  ${flexColumn};

  .feedback__line {
    width: 540px;
    position: relative;
    margin-bottom: 20px;

    @media (max-width: 767.98px) {
      width: 100%
    }
    @media (max-width: 575.98px) {
      margin: 0;
      top: 0
    }
  }

  .feedback__block {
    display: flex;
    align-items: center;
    position: relative;
    height: 100px;
    @media (max-width: 767.98px) {
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      height: auto;
    }
  }

  .feedback_img {
    flex: 0 0 auto;
    border-radius: 50%;
    overflow: hidden;
    z-index: 1;
    width: 90px;
    height: 90px;

    @media (max-width: 767.98px) {
      margin-top: 6px;
      width: 84px;
      height: 84px;
    }

    :nth-child(2) {
      transform: translateX(-30px);
      z-index: 0;
    }
  }

  .feedback__person {
    margin-left: 10px;

    @media (max-width: 767.98px) {
      padding-right: 0
    }
  }

  .feedback__name {
    font-weight: 400;
    line-height: 25px;
    letter-spacing: -.02em;
    font-size: 18px;

    @media (min-width: 992px) {
      line-height: 30px;
      font-size: 20px;
    }
  }

  .feedback__position {
    font-size: 20px;
    line-height: 30px;
    font-weight: 400;
    opacity: .5;

    @media (max-width: 767.98px) {
      font-weight: 600;
      font-size: 16px;
      line-height: 18px;
    }
    @media (max-width: 575.98px) {
      max-width: 300px;
    }
  }

  .modal-review__content {
    margin-top: 20px;
    color: #dbe8d3;
  }

  .modal-review__title {
    font-weight: 500;
    margin-bottom: 35px;

    @media (max-width: 575.98px) {
      margin-top: 30px;
      font-weight: 600
    }
  }

  .modal-review__description {
    margin-bottom: 30px;

  }

  .modal-review__description p {
    margin-bottom: 35px;

    :last-of-type {
      margin-bottom: 0
    }
  }

  a {
    align-self: flex-start;
    position: relative;
    font-size: 16px;
    background: var(--colors-bg-green);
    font-weight: var(--fw-extra-bold);
    line-height: 20px;
    color: var(--colors-text-wight);
    padding: 15px 20px;
    display: flex;
    justify-content: center;
    transition: all 0.3s;
    font-family: var(--family);
    text-transform: uppercase;
    z-index: 10;


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


    @media (max-width: 834px) {
      font-size: 12px;
      padding: 10px;
    }
    @media (max-width: 425px) {
      font-size: 11px;
      padding: 5px;
    }

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



