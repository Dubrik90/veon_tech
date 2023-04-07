import styled from "styled-components";
import {flexColumn} from "../../../../common/style/mixin";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  overflow: hidden;
  transition: scale 0.3s;
  
  @media (max-width: 768px) {
    border-radius: 0;
  }
`

export const DevCardWrapper = styled.div`
  ${flexColumn()};
  row-gap: 15px;
  background: var(--color-grey-light);
  border-radius: 15px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
  overflow: hidden;
  
  @media (max-width: 768px) {
    border-radius: 0;
  }
  @media (min-width: 768px) {
    :hover {
      ${Img} {
        scale: 1.1;
      }
      
    }
  }
`
export const ContentBlock = styled.div`
  ${flexColumn()};
  padding: 0 15px 15px 15px;
  row-gap: 15px;


  a {
    position: relative;
    align-self: flex-start;
    font-size: 14px;
    background: var(--colors-bg-green);
    font-weight: var(--fw-extra-bold);
    line-height: 20px;
    color: var(--colors-text-wight);
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    transition: all 0.3s;
    font-family: var(--family);
    text-transform: uppercase;
    z-index: 10;

    @media (max-width: 980px) {
      align-self: stretch;
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
  }
`
export const Title = styled.h3`
  font-size: 18px;
  font-weight: var(--fw-bold);
  line-height: 1.3;
  color: var(--color-dark);
`

export const ImgBlock = styled.div`
  height: 200px;
  overflow: hidden;
  border-radius: 15px;
  @media (max-width: 768px) {
    border-radius: 0;
  }
  @media (max-width: 425px) {
    height: 160px;
  }
  
`
