import styled from "styled-components";
import {Placeholder} from "../modalWindow/style";


export const InputWrap = styled.input`
  width: 100%;
  height: 38px;
  padding: 10px;
  color: #363636;
  background-color: #F9F9FA;;
  border: 1px solid #A6A6A6;
  border-radius: 5px;
  font-size: 14px;

  ::placeholder {

  }

  &:focus {
    color: var(--dark);
    outline: none;
  }

  &:focus ~ ${Placeholder} {
    transform: translateY(-14px);
    font-size: 12px;
    line-height: 16px;
    color: var(--black40);
  }

`

