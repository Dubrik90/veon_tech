import styled from "styled-components";
import {flexColumn, fontSize} from "../../style/mixin";

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

  @media (max-width: 1920px) {
    column-gap: calc(15px + (52 - 15) * ((100vw - 1092px) / (1920 - 1092)));
  }

  .about-link {
    display: none;
  }
  
  @media (max-width: 1092px) {
    left: ${({isOpenBurger}) => isOpenBurger ? '0' : '-100%'};
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    row-gap: 20px;
    overflow: auto;
    height: 100vh;
    position: fixed;
    top: 0;
    padding-top: 120px;
    padding-bottom: 40px;
    background-color: var(--colors-bg);
    width: 100%;
    transition: left 0.3s;

    :after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 80px;
      background-color: var(--colors-bg);
      z-index: 10;
    }

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
  transform: translate(15px, 24px);
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
  row-gap: 8px;
  border-radius: 5px;

  @media (max-width: 1320px) {
    transform: translate(15px, 29px);
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
    font-size: 13px;
    line-height: 11px;
    color: var(--colors-text-dark);
    position: relative;
    display: flex;
    border-radius: 3px;
    padding: 5px;

    :hover {
      background: var(--color-menu-hover);
    }
  }

`
export const MenuSubItem = styled.li`

`
export const MenuItem = styled.li`
  cursor: context-menu;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 3px;
  padding: 5px 0 5px 10px;
  position: relative;
  text-transform: uppercase;
  z-index: 5;
  
  .link__wrap {
    display: block;
    position: relative;
    overflow: hidden;
  }
  .link__title {
    position: relative;
    display: block;
    transition: transform 467ms cubic-bezier(.55, 0, .1, 1) 0s;
    -webkit-transition: transform 467ms cubic-bezier(.55, 0, .1, 1) 0s, -webkit-transform 467ms cubic-bezier(.55, 0, .1, 1) 0s;
    transition-property: transform;
    transition-duration: 467ms, 467ms;
    transition-timing-function: cubic-bezier(.55, 0, .1, 1), cubic-bezier(.55, 0, .1, 1);
    transition-delay: 0s, 0s
  }
  .link__title--duplicate {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    transform: translateY(100%)
  }
  
  .link__wrap:hover .link__title {
    transform: translateY(-100%);
    transition: transform 467ms cubic-bezier(.55, 0, .1, 1) 0s;
    -webkit-transition: transform 467ms cubic-bezier(.55, 0, .1, 1) 0s, -webkit-transform 467ms cubic-bezier(.55, 0, .1, 1) 0s;
    transition-property: transform;
    transition-duration: 467ms, 467ms;
    transition-timing-function: cubic-bezier(.55, 0, .1, 1), cubic-bezier(.55, 0, .1, 1);
    transition-delay: 0s, 0s
  }
  
  @media (min-width: 1092px) {
    display: flex;
  }
  
  @media (max-width: 1370px) {
    font-size: var(--fs-14);
  }
  @media (max-width: 1092px) {
    font-size: 22px;
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