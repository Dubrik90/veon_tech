import styled from "styled-components";

export const NavigateMenu = styled.nav`
display: flex;
column-gap: 50px;
  z-index: 5;
  li {
    font-weight: var(--fw-medium);
    line-height: 25px;
    color: var(--colors-text-dark);
    @media (max-width: 858px) {
      font-size: 18px;
    }
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
  }
`


export const SubMenu = styled.ul`
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease 0s;
  transform: translate(0px, 10px);
  pointer-events: none;
  min-width: 200px;
  position: absolute;
  left: 0;
  top: 100%;
  z-index: 50;
  background: var(--colors-bg);
  box-shadow: 0 7px 10px rgba(0, 0, 0, 0.25);
  padding: 15px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  a {
    font-weight: 600;
    font-size: 12px;
    line-height: 11px;
    color: var(--colors-text-dark);
    position: relative;
    padding-left: 30px;

    :before {
      content: '';
      width: 10px;
      height: 10px;
      background: #79E35E;
      position: absolute;
      top: 2px;
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
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 3px;
  padding: 5px 0 5px 10px;
  position: relative;
  cursor: pointer;
  @media (max-width: 1320px) {
    font-size: var(--fs-sm);
  }
  
  
  svg {
    transition: all 0.3s;
    margin-left: 10px;
    rect {
      fill: var(--colors-text-dark);
    }
  }
  
  :before {
    content: '';
    width: 2px;
    height: 20px;
    background: #6EEC4E;
    position: absolute;
    top: 8px;
    left: 4px;
    border-radius: 100%;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;

  }
  
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
      transform: translate(0px, 0px);
      pointer-events: auto;

    }
  }
`