import styled from "styled-components";

export const CaseHeaderWrapper = styled.div`
  padding-top: 140px;
  padding-bottom: 85px;
  background-color: var(--colors-bg);
`
export const Content = styled.div`
  position: relative;

`
export const Title = styled.h2`
  font-weight: var(--fw-bold);
  line-height: 1.4;
  font-size: 64px;
  max-width: 1600px;

  @media (max-width: 1920px) {
    font-size: calc(30px + (64 - 30) * ((100vw - 320px) / (1920 - 320)));
    max-width: calc(300px + (1600 - 300) * ((100vw - 320px) / (1920 - 320)));
  }

  color: var(--colors-text-dark);

`
export const LineBlock = styled.div`
  display: none;
  @media (min-width: 1023.98px) {
    display: block;
    position: absolute;
    right: 0;
    top: -47%;

    svg:nth-child(1) {
      transform: translate(71%, -2px);
    }

  }




`