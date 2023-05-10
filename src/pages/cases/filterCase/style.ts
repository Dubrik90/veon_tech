import styled from "styled-components";
import Cheked from '../assets/checked-i.svg'
import {flexColumn} from "../../../common/style/mixin";

export const FilterCaseWrapper = styled.div`
  .filter__form {
    display: flex;
    width: 90%;
    z-index: 50;
  }

  .filter__block {
    position: relative;
    margin-right: calc(20px + (90 - 20) * ((100vw - 768px) / (1920 - 768)));
  }

  .filter-btn {
    position: relative;
    width: 35px;
    height: 35px;
  }
  
  .filter__item {
    display: flex;
    cursor: pointer;
    align-items: center
  }

  .filter__title {
    font-weight: var(--fw-bold);
    font-size: 24px;
    line-height: 36px;
    display: flex;
    align-items: flex-end;
    letter-spacing: -.02em;
    color: var(--colors-text-dark);
    margin-right: calc(10px + (24 - 10) * ((100vw - 768px) / (1920 - 768)));
    white-space: nowrap
  }

  .filter__block.show .filter-btn::after {
    transform: rotate(45deg);
    transition: transform .3s
  }

  .filter__block.show .filter-btn::before {
    transform: rotate(45deg);
    transition: transform .3s
  }

  .filter__item .filter-btn::after {
    transform: rotate(0);
    transition: transform .3s
  }

  .filter__item .filter-btn::before {
    transform: rotate(0);
    transition: transform .3s
  }

  .filter-btn::after {
    content: "";
    position: absolute;
    top: 17.5px;
    left: 1px;
    width: 35px;
    height: 2px;
    background-color: var(--colors-text-dark)
  }

  .filter-btn::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 17.5px;
    width: 2px;
    height: 35px;
    background-color: var(--colors-text-dark)
  }

  .filter__content-inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    padding: 30px 10px 30px 28px;
    top: calc(100% + 15px);
    left: -20px;
    background: var(--colors-bg);
    box-shadow: 0 0 27px rgba(0, 0, 0, .14);
    border-radius: 5px;
    z-index: 10;
    width: 280px;
    height: auto;

    @media (min-width: 700px) {
      width: 333px
    }
  }
  
  .filter__content {
    display: none
  }
  
  .filter__block.show .filter__content {
    display: block
  }

  .filter__content-list {
    height: auto;
    max-height: 220px;
    overflow-y: auto;
  }
  .filter__content-btn {
    margin: 35px 0 0;
  }

  .filter__desk-close {
    display: none;
    transition: transform .3s
  }

  .filter__desk-close:active {
    transform: rotate(90deg)
  }

  .filter__desk-close-icon {
    height: 22px;
    width: 22px
  }

  .filter__mob-apply {
    display: none
  }

  @media (min-width: 1024px) {
    .filter-tags-box {
      margin-top: -80px
    }
  }

  @media (min-width: 768px) {
    .filter__desk {
      margin-bottom: 80px
    }
  }

  @media (max-width: 650px) {
    .filter__form {
      display: none;
      
    .filter__content-inner {
      left: 0;
    }
  }

  @media (max-width: 767px) {
    .filter-tags-box {
      margin-bottom: 0
    }

    .filter__mob-open {
      margin-top: 35px
    }

    .cases-grid__el:nth-child(2) {
      margin-top: 0
    }
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
  padding: 15px 30px;
  display: flex;
  justify-content: center;
  transition: all 0.3s;
  font-family: 'Montserrat';
  letter-spacing: 1.1px;
  text-transform: uppercase;
  z-index: 10;
  border-radius: 5px;


  @media (max-width: 480px) {
    width: 100%;
  }

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
    border-radius: 5px;
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


export const FilterFormMobile = styled.div`
  position: relative;
  display: none;

  @media (max-width: 650px) {
    display: block;
  }
`

export const SubMobileMenu = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
 // background-color: var(--colors-bg-green-dark);
  background-color: #E9FDE4;
  z-index: 20;
  padding: 15px;
  max-height: 400px;
  overflow: auto;
  border-radius: 5px;
`
export const TitleSubMobileMenu = styled.h5`
  font-size: 24px;
  font-weight: 600;
  margin: 10px 0 20px 0;
  color: var(--color-dark);
`
export const CheckboxFilter = styled.input`
  appearance: none;
  min-width: 18px;
  height: 18px;
  border: 1px solid var(--colors-text-dark);
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  position: relative;
  margin-right: 10px;

  &:checked:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "\\2714";
    display: block;
    text-align: center;
    font-size: 14px;
    line-height: 13px;
    color: var(--colors-text-dark);

  }

  &:checked {
    background: var(--colors-bg-green);
    border: 1px solid transparent !important;
  }

  &:hover {
    // background-color: #EFEFEF;
  }
`;
type CheckboxLabelProps = {
    checked: boolean
}

export const CheckboxLabel = styled.label<CheckboxLabelProps>`
  display: inline-flex;
  align-items: center;
  margin-right: 12px;
  // margin-bottom: 8px;
  cursor: pointer;
  font-size: 20px;
  color: var(--colors-text-dark);
  font-weight: var(--fw-medium);

  @media (max-width: 650px) {
    font-weight: var(--fw-regular);
    color: var(--color-dark);
  }

`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  .scrollbar-none {
    scrollbar-width: none;
    -ms-overflow-style: none
  }

  .scrollbar-none::-webkit-scrollbar {
    display: none;
    width: 0
  }

  ::-webkit-scrollbar {
    width: 7px
  }

  ::-webkit-scrollbar-track {
    background: #fff
  }

  ::-webkit-scrollbar-thumb {
    background: #d4d4d4;
    border-radius: 6px
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #888
  }

`;
