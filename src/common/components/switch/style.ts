import styled from "styled-components";
import {ThemeType} from "../../types/types";

type SwitchWrapperProps = {
    theme: ThemeType
}
export const SwitchWrapper = styled.div<SwitchWrapperProps>`
  background: #E8FCE3;
  padding: 3px 5px;
  border-radius: 15px;
  position: relative;
  display: flex;
  column-gap: 10px;
  cursor: pointer;

  img {
    max-width: 22px;
  }
  
  span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${({theme}) => theme === 'light' ? '4px' : '35px'};
    width: 25px;
    height: 25px;
    border-radius: 100px;
    background: #5DB447;
    transition: all 0.3s;
  }
`