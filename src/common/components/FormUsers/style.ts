import styled from "styled-components";

export const Error = styled.p`
  color: #de0000;
  width: 100%;
  position: absolute;
  bottom: -18px;
  z-index: 100;
  font-size: 16px;
  display: flex;
  justify-content: center;
  
  @media (max-width: 1920px) {
    font-size: calc(12px + (16 - 12) * ((100vw - 320px) / (1920 - 320)));
    bottom: calc(-12px + (-18 - -12) * ((100vw - 320px) / (1920 - 320)));
  }
`
