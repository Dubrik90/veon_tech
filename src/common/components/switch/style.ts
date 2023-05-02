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
  cursor: pointer;
  z-index: 9999;

  img {
    max-width: 20px;
  }

  span {
    position: absolute;
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
  bottom: -90px;
  left: -180px;
  opacity: ${({isThemeBlock}) => isThemeBlock ? '1' : '1'};
  overflow: ${({isThemeBlock}) => isThemeBlock ? 'visible' : 'visible'};
  transition: all 0.3s ease;
  width: 250px;
  background-color: #5db447;
  padding: 10px;
  border-radius: 5px;
  
  :before {
    position: absolute;
    content: "";
    background-color: rgb(93, 180, 71);
    width: 30px;
    height: 32px;
    display: block;
    bottom: -6px;
    left: 20%;
    border-radius: 4px;
    transform: skewY(35deg);
    border-top: 0px;
  }
  
`