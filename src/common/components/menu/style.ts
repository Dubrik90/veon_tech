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
    padding-bottom: 40px;
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
  transition: all 0.3s;
  transform: translate(0px, 24px);
  min-width: 220px;
  position: absolute;
  left: -16px;
  top: 95%;
  z-index: 10;
  background: var(--colors-bg);
  box-shadow: 0 7px 10px rgba(0, 0, 0, 0.25);
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  
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
  }
  
  a {
    font-weight: 600;
    font-size: 13px;
    line-height: 11px;
    color: var(--colors-text-dark);
    position: relative;
    padding-left: 30px;

    :before {
      content: '';
      width: 10px;
      height: 10px;
      background: var(--colors-bg-green);
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      border-radius: 100%;
    }
    
    :hover {
      color: var(--color-menu-hover);
    }
  }

`
export const MenuSubItem = styled.li`

`
export const MenuItem = styled.li`
  @media (min-width: 1092px) {
    display: flex;
  }
  
  cursor: context-menu;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 3px;
  padding: 5px 0 5px 10px;
  position: relative;
  text-transform: uppercase;
  z-index: 5;
  
  @media (max-width: 1320px) {
    font-size: var(--fs-14);
  }
  @media (max-width: 1092px) {
    font-size: 25px;
  }

  svg {
    transition: all 0.3s;
    margin-left: 10px;
    rect {
      fill: var(--colors-text-dark);
    }
  }

  .active {
    color: var(--colors-text-green);
  }
  
  :hover {
    color: var(--color-menu-hover);
    svg {
      transform: rotate(-180deg);
      rect {
        fill: var(--color-menu-hover);
      }
    }

    ${SubMenu} {
      opacity: 1;
      visibility: visible;
      transition: visibility .2s , opacity .2s ;
    }
  }
`