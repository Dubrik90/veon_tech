import styled from "styled-components";

export const OpticsResultWrapper = styled.div`
  position: relative;
`
export const Title = styled.h3`
  font-weight: var(--fw-bold);
  font-size: 64px;
  line-height: 1.4;
  color: #FFFFFF;
  width: 100%;
  text-align: center;
  z-index: 50;
  position: absolute;
  top: 8%;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1920px) {
    font-size: calc(30px + (64 - 30) * ((100vw - 320px) / (1920 - 320)));
  }
  @media (max-width: 648px) {
    position: relative;
    color: var(--colors-text-dark);

  }

`








