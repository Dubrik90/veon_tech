import styled from "styled-components";

export const CustomInputFile = styled.input`

  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  top: 0;
  left: 0;

`
export const InputFileText = styled.span`
  display: block;
  position: relative;
  cursor: pointer;
  margin-bottom: 15px;
  padding: 5px;
  z-index: 10;
`