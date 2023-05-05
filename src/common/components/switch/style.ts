import styled from "styled-components";
import {ThemeType} from "../../types/types";

type SwitchWrapperProps = {
    theme: ThemeType
}
export const SwitchWrapper = styled.div<SwitchWrapperProps>`
  background: #E8FCE3;
  align-self: center;
  padding: 4px 5px;
  border-radius: 15px;
  position: relative;
  display: flex;
  column-gap: 10px;
  z-index: 9999;

  img {
    max-width: 20px;
    cursor: pointer;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
    left: ${({theme}) => theme === 'light' ? '31px' : '4px'};
    width: 25px;
    height: 25px;
    border-radius: 100px;
    background: #5DB447;
    transition: all 0.3s;
  }
`
type ModalSwichProps = {
    isThemeBlock: boolean
}

export const ModalSwich = styled.div<ModalSwichProps>`
  position: absolute;
  bottom: -100px;
  left: -180px;
  opacity: ${({isThemeBlock}) => isThemeBlock ? '1' : '0'};
  overflow: ${({isThemeBlock}) => isThemeBlock ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  width: 260px;
  background-color: #5db447;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 18px;
  color: var(--color-grey-light);
  
  :before {
    position: absolute;
    content: "";
    background-color: rgb(93, 180, 71);
    width: 30px;
    height: 32px;
    display: block;
    top: -6px;
    right: 20%;
    border-radius: 4px;
    transform: skewY(150deg);
    border-top: 0;
    z-index: -1;
  }
  @media (max-width: 1092px) {
    left: 50%;
    transform: translateX(-50%);
    :before {
      right: 50%;
    }
  }
`