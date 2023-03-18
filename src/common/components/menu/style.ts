import styled from "styled-components";
import {fontSize} from "../../style/mixin";

export const NavigateMenu = styled.nav`
  display: flex;
  column-gap: 50px;
  z-index: 5;

  li {
    font-weight: var(--fw-medium);
    line-height: 1.3;
    color: var(--colors-text-dark);
    //@media (max-width: 858px) {
    //  font-size: 18px;
    //}
  }

  @media (max-width: 768px) {
    flex: 1 1 auto;
  }
`
type PropsMenu = {
    isOpenBurger: boolean
}
export const MenuList = styled.ul<PropsMenu>`
  display: flex;
  column-gap: 52px;
  flex-wrap: wrap;

  .about-link {
    display: none;
  }

  @media (max-width: 1469px) {
    column-gap: 30px;
  }
  @media (max-width: 1115px) {
    column-gap: 25px;
  }
  @media (max-width: 1092px) {
    left: ${({isOpenBurger}) => isOpenBurger ? '0' : '-100%'};
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    row-gap: 20px;
    overflow: auto;
    height: 100%;
    position: fixed;
    top: 0;
    padding-top: 120px;
    background-color: var(--colors-bg);
    width: 100%;
    transition: left 0.3s;

    .about-sub-menu {
      display: none;
    }

    .about-link {
      display: block;
    }
  }
`


export const SubMenu = styled.ul`
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s linear 0s;
  transform: translate(0px, 24px);
  min-width: 200px;
  position: absolute;
  left: -16px;
  top: 95%;
  z-index: 10;
  background: var(--colors-bg);
  box-shadow: 0 7px 10px rgba(0, 0, 0, 0.25);
  padding: 24px 15px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  @media (max-width: 1320px) {
    transform: translate(0px, 27px);
  }
  
  :before {
    content: '';
    position: absolute;
    top: -29px;
    left: 0;
    width: 100%;
    height: 36px;
   // background: #007aff;
  }
  
  

  a {
    font-weight: 600;
    font-size: 12px;
    line-height: 11px;
    color: var(--colors-text-dark);
    position: relative;
    padding-left: 30px;
    display: inline-flex;

    :before {
      content: '';
      width: 10px;
      height: 10px;
      background: #79E35E;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 100%;
    }

    :hover {
      color: #79E35E;
    }
  }
`
export const MenuSubItem = styled.li`

`
export const MenuItem = styled.li`
  cursor: context-menu;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 3px;
  padding: 5px 0 5px 10px;
  position: relative;
  text-transform: uppercase;
    z-index: 5;

  @media (max-width: 1320px) {
    font-size: var(--fs-sm);
  }
  @media (max-width: 1092px) {
    ${fontSize(25)};
  }


  svg {
    transition: all 0.3s;
    margin-left: 10px;

    rect {
      fill: var(--colors-text-dark);
    }
  }
  & a.active {
    :before {
      content: '';
      width: 2px;
      height: 20px;
      background: #6EEC4E;
      position: absolute;
      top: -1px;
      left: -6px;
      border-radius: 100%;
      transition: 0.3s;
    }
  }

  :before {
    content: '';
    width: 2px;
    height: 20px;
    background: #6EEC4E;
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 100%;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
   
  }

  //&:hover ~ .content-shadow {
  //  display: block;
  //}

  :hover {
  
    :before {
      opacity: 1;
      visibility: visible;
    }

    svg {
      transform: rotate(-180deg);
    }

    ${SubMenu} {
      opacity: 1;
      visibility: visible;
      transition: visibility .2s linear, opacity .2s linear;
     }
  }
`