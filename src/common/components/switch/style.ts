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