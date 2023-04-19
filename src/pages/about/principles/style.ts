import styled from "styled-components";
import {flexColumn} from "../../../common/style/mixin";

export const PrinciplesWrapper = styled.div`
  background-color: #fff200;
  padding: 50px 0;

  @media (min-width: 992px) {
    padding: 148px 0 301px
  }
`
export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: .5rem;
  font-weight: 500;
  line-height: 1.2;
  font-size: calc(1.375rem + 1.5vw);
  padding-bottom: 32px;
  padding-top: 0;

  @media (min-width: 1200px) {
    font-size: 2.5rem;
  }

  @media (min-width: 992px) {
    padding-bottom: 66px;
  }
`
export const PrinciplesAccordeon = styled.div`
  ${flexColumn()};
`
export const AccordionItem = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 25px 0;
  color: #000;
  border-top: 2px solid #000;
  transition: color .3s;

  @media (min-width: 992px) {
    align-items: center;
    padding: 40px 0;
    flex-direction: row;

    .active {
      align-items: flex-start;
    }
  }

  :last-of-type {
    border-bottom: 2px solid #000;

    @media (max-width: 767.98px) {
      border-bottom: 1px solid transparent;
    }
  }

  :first-of-type {
    border-top: none;
  }
`
export const AccordionListTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 992px) {
    width: 50%;
  }

`
export const TitleList = styled.div`
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: -.02em;

  @media (min-width: 992px) {
    font-size: 42px;
    line-height: 52px;
  }
`
export const ListBtn = styled.div`
  display: flex;
  position: relative;
  height: 22px;
  width: 22px;
 
  
  @media (min-width: 992px) {
    display: none;
  }

  .open &:before {
    transform: rotate(90deg);
    transition: transform .2s .2s;
  }

  :after {
    content: "";
    position: absolute;
    top: 12px;
    left: 2px;
    width: 22px;
    height: 2px;
    background-color: #000;
  }

  :before {
    content: "";
    position: absolute;
    top: 2px;
    left: 12px;
    width: 2px;
    height: 22px;
    background-color: #000;
    transition: transform .2s .2s;
  }
`
export const AccordionListInner = styled.div`
  width: 100%;
  overflow: hidden;

  @media (min-width: 992px) {
    width: 52%;
  }
`
export const AccordionBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 40px;

  .open & {
    display: none
  }
`
export const AccordionDesk = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    width: 22px;
    height: 22px;
    cursor: pointer;
    z-index: 2;
    transition: transform .3s;
    color: #fff;
    transform: rotate(-45deg);

    :hover {
      transform: rotate(0);
    }

    span:nth-child(1) {
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 20px;
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
      width: 20px;
      height: 2px;
      background-color: black;
      border-radius: 2px;
    }
  }
`
export const AccordionContent = styled.div`
  max-height: 0;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
  flex-direction: column;
  transition: all .5s ease;

  &.open {
    transition: all .5s ease;
    max-height: none;
    opacity: 1;
    visibility: visible;
  }

`
export const AccordionContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  transition: all .5s ease;

  @media (min-width: 992px) {
    padding-top: 0;
  }
`
export const AccordionText = styled.p`
  font-weight: 400;
  letter-spacing: -.02em;
  transition: all .3s;
  font-size: 18px;
  line-height: 25px;

  @media (min-width: 992px) {
    font-size: 20px;
    line-height: 30px
  }
`



