import styled from "styled-components";
import Cheked from '../assets/checked-i.svg'
import {flexColumn} from "../../../common/style/mixin";

export const FilterCaseWrapper = styled.div`
  .filter__form {
    display: flex;
    width: 90%
  }

  .filter__block {
    position: relative;
    margin-right: calc(20px + (90 - 20) * ((100vw - 768px) / (1920 - 768)));
  }

  @media (max-width: 767.98px) {
    .filter__block {
     // margin-right: 0
    }
  }

  .filter__block:last-child {
   // margin-right: 0
  }

  .filter-btn {
    position: relative;
    width: 35px;
    height: 35px
  }

  .filter__item {
    display: flex;
    cursor: pointer
  }

  .filter-tags .filter__item {
    align-items: center
  }

  .filter__title {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    display: flex;
    align-items: flex-end;
    letter-spacing: -.02em;
    color: #000;
    margin-right: calc(10px + (24 - 10) * ((100vw - 768px) / (1920 - 768)));
    white-space: nowrap
  }

  .filter__block.show .filter-btn::after {
    transform: rotate(45deg);
    transition: transform .3s .2s
  }

  .filter__block.show .filter-btn::before {
    transform: rotate(45deg);
    transition: transform .3s .2s
  }

  .filter__item .filter-btn::after {
    transform: rotate(0);
    transition: transform .3s .2s
  }

  .filter__item .filter-btn::before {
    transform: rotate(0);
    transition: transform .3s .2s
  }

  .filter-btn::after {
    content: "";
    position: absolute;
    top: 17.5px;
    left: 1px;
    width: 35px;
    height: 2px;
    background-color: #000
  }

  .filter-btn::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 17.5px;
    width: 2px;
    height: 35px;
    background-color: #000
  }

  .filter__content-inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    padding: 30px 10px 30px 28px;
    top: calc(100% + 15px);
    left: -20px;
    background: #fff;
    box-shadow: 0 0 27px rgba(0, 0, 0, .14);
    border-radius: 5px;
    z-index: 10;
    width: 280px;
    height: auto
  }

  @media (min-width: 1200px) {
    .filter__content-inner {
      width: 333px
    }
  }

  .filter__content-inner-mob {
    width: 100%;
    height: 100%
  }

  .filter-form-mob {
    position: relative;
    padding: 27px 19px 13px
  }

  .filter__content {
    display: none
  }

  @media (max-width: 767.98px) {
    .filter__content {
    //  display: block
    }
  }

  .filter__overlay {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    left: 0;
    display: none
  }

  .filter__overlay.active {
    display: block
  }

  .filter__block.show .filter__content {
    display: block
  }

  .filter__content-list {
    height: auto;
    max-height: 220px;
    overflow-y: auto
  }

  .filter__content-item {
    display: block;
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 20px;
    line-height: 22px;
    letter-spacing: -.02em;
    color: #000;
    padding-left: 38px;
    padding-right: 10px;
    position: relative;
    min-height: 28px
  }

  .filter__content-item:last-child {
    margin-bottom: 0
  }

  .filter__content-btn {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    margin: 35px 0 0;
    vertical-align: bottom
  }

  .cases-btn__download, .filter__content-apply {
    background-color: #fff200;
    border-radius: 50px;
    width: 192px;
    color: #000;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 20px;
    line-height: 22px;
    padding: 17px;
    border: transparent
  }

  .cases-btn__download {
    width: 281px
  }

  .styled-checkbox {
    position: absolute;
    opacity: 0
  }

  .styled-checkbox + label {
    cursor: pointer;
    padding: 3px 0 0 0;
    width: 100%
  }

  .styled-checkbox:checked + .tabs-nav__link {
    background-color: #22c014
  }

  .styled-checkbox + label:before {
    content: "";
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 28px;
    height: 28px;
    position: absolute;
    left: 0;
    top: 0;
    background: #fff;
    border: 2px solid #000
  }

  .styled-checkbox:active + label:before {
    background: #fff200
  }

  @media (min-width: 1280px) {
    .styled-checkbox:hover + label:before {
      background: #fff200
    }
  }

  .styled-checkbox:focus + label:before {
    border: 2px solid #000;
    background: 0 0
  }

  .styled-checkbox:checked + label:before {
    background: #fff200;
    border-color: transparent;
    color: #000
  }

  .styled-checkbox:checked + label:after {
    content: "";
    background: url(${Cheked}) no-repeat center/contain;
    position: absolute;
    left: 3px;
    top: 6px;
    width: 25px;
    height: 16px
  }

  .cases-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 55px
  }

  @media (min-width: 768px) {
    .cases-btn {
      display: none
    }
  }

  .filter-tags-box {
    margin-bottom: 70px
  }

  .filter-tags {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 28px 0 0
  }

  @media (min-width: 768px) {
    .filter-tags {
      padding: 36px 0 0;
      margin-bottom: -10px
    }
  }

  .filter-tags .filter__item {
    background-color: #fff200;
    border-radius: 50px;
    padding: 11px 20px;
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer
  }

  @media (min-width: 768px) {
    .filter-tags .filter__item {
      margin-right: 15px;
      padding: 15px 30px
    }
  }

  .filter-tags .filter__title {
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    margin-right: 15px;
    white-space: nowrap
  }

  @media (min-width: 768px) {
    .filter-tags .filter__title {
      font-size: 20px;
      line-height: 22px;
      font-weight: 600
    }
  }

  .filter-tags-btn {
    position: relative;
    width: 12px;
    height: 12px
  }

  @media (min-width: 768px) {
    .filter-tags-btn {
      width: 16px;
      height: 16px
    }
  }

  .filter-tags-btn::after {
    content: "";
    position: absolute;
    top: 6px;
    left: 1px;
    width: 12px;
    height: 2px;
    background-color: #000;
    transform: rotate(45deg)
  }

  @media (min-width: 768px) {
    .filter-tags-btn::after {
      top: 7px;
      left: 0;
      width: 16px;
      height: 2px
    }
  }

  .filter-tags-btn::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 6px;
    width: 2px;
    height: 12px;
    background-color: #000;
    transform: rotate(45deg)
  }

  @media (min-width: 768px) {
    .filter-tags-btn::before {
      top: 0;
      left: 7px;
      width: 2px;
      height: 16px
    }
  }

  .filter__mob-open {
    display: none
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
  //  .styled-checkbox + label:before {
  //    top: 6px
  //  }
  //
  //  .styled-checkbox:checked + label:after {
  //    top: 12px
  //  }
  //
  //  .filter__mob-open {
  //    display: block;
  //    margin-bottom: 67px
  //  }
  //
  //  .filter__mob-open .filter__item {
  //    margin-bottom: 0
  //  }
  //
  //  .filter__content-item {
  //    margin-bottom: 0;
  //    padding-left: 0
  //  }
  //
  //  .styled-checkbox + label {
  //    padding: 10px 0 10px 38px
  //  }
  //
  //  .filter-tags {
  //    padding: 0
  //  }
  //
  //  .filter-tags-box {
  //    margin-bottom: 40px
  //  }
  //
    .filter__form {
      ${flexColumn()};
      row-gap: 10px;
      //height: 100%;
      //width: calc(100% + 20px);
      //flex-direction: column;
      //padding: 28px 20px 88px 0;
      //overflow: auto;
      //margin-right: -20px;
      //background-color: #5bacd2;
      //z-index: 10;
    }
  //
  //  .filter__desk {
  //    position: fixed;
  //    top: 0;
  //    left: 0;
  //    right: 0;
  //    bottom: 0;
  //    background-color: #fff;
  //    z-index: 1000;
  //    transition: transform .25s;
  //    transform: translateX(100%)
  //  }
  //
  //  .filter__desk .container {
  //    height: 100%
  //  }
  //
  //  .filter.open .filter__desk {
  //    transform: translateX(0)
  //  }
  //
  //  .filter.open .filter__desk-close {
  //    display: flex;
  //    align-items: center;
  //    justify-content: center;
  //    position: absolute;
  //    top: 32px;
  //    right: 20px;
  //    z-index: 1100
  //  }
  //
  //  .filter__block {
  //    margin-top: 60px
  //  }
  //
  //  .filter__block:first-child {
  //    margin-top: 0
  //  }
  //
  //  .filter__block .filter-btn, .filter__block .filter__content-btn {
  //    display: none
  //  }
  //
  //  .filter__block .filter__title {
  //    margin-right: 0;
  //    font-weight: 500;
  //    font-size: 28px;
  //    line-height: 30px
  //  }
  //
  //  .filter__item {
  //    margin-bottom: 14px
  //  }
  //
  //  .filter__content {
  //    display: block;
  //    z-index: 10;
  //  }
  //
    .filter__content-inner {
      //position: relative;
      //top: 0;
      left: 0;
      //padding: 0;
      //height: auto;
      //width: auto;
      //border-radius: 0;
      //box-shadow: none
    }
  //
  //  .filter__content-list {
  //    height: auto;
  //    overflow: visible;
  //    max-height: unset;
  //    z-index: 10;
  //  }
  //
  //  .filter__mob-apply {
  //    display: block;
  //    position: absolute;
  //    bottom: 0;
  //    left: 0;
  //    width: 100%;
  //    padding: 0 10px 12px;
  //    z-index: 1000
  //  }
  //
  //  .filter__mob-apply .btn {
  //    width: 100%
  //  }
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



