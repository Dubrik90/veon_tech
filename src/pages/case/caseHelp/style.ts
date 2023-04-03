import styled from "styled-components";

export const CaseHelpWrapper = styled.div`
  background: rgba(193, 193, 193, 0.36);
  padding: 60px 0 30px 0;
  @media(max-width: 768px) {
    padding: 40px 0 25px 0;
  }
`
export const HelpContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`
export const SubTitle = styled.h4`
  text-align: center;
  font-weight: var(--fw-bold);
  font-size: 30px;
  line-height: 1.4;
  color: var(--colors-text-dark);
  margin-bottom: 20px;

  span {
    color: var(--colors-text-green);
  }
  @media(max-width: 768px) {
    font-size: 22px;
    margin-bottom: 10px;
  }
  @media(max-width: 425px) {
    font-size: 18px;
  }
`

export const Title = styled.button`
  font-family: Coolvetica, sans-serif;
  font-weight: 400;
  line-height: 1.2em;
  --transition-time: .5s;
  color: var(--colors-text-dark);
  border: none;
  display: block;
  overflow: hidden;
  position: relative;
  transition: color var(--transition-time) ease-in-out;
  z-index: 2;
  font-size: 60px;
 // font-size: calc(30px + 70 * (100vw / 1920));

  @media(max-width: 768px) {
    font-size: 50px;
   // font-size: calc(30px + (70 + 70 * 0.7) * ((100vw - 320px) / 1600));
  }
  @media(max-width: 425px) {
    font-size: 30px;
  }

  :before {
    background: var(--colors-bg-green);
    transform: translateX(-175%);
    height: 6px;
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    transition: transform var(--transition-time) ease-in-out;
    width: 100%;
    z-index: -1;
    @media(max-width: 768px) {
      height: 5px;
    }
  }

  :after {
    background: #6EEC4E;
    bottom: 0;
    content: "";
    height: 6px;
    left: 0;
    position: absolute;
    transition: transform var(--transition-time) ease-in-out;
    width: 100%;
    z-index: -1;
    @media(max-width: 768px) {
      height: 5px;
    }
  }

  :hover {
    color: var(--colors-bg-green);

    :before {
      background: var(--colors-bg-green);
      transform: translateX(0);
    }

    :after {
      //background: #007aff;
      transform: translateX(175%);
    }

  }

`



