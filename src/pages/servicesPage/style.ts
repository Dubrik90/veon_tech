import styled from "styled-components";
import {flexColumn} from "../../common/style/mixin";

export const ServicesPageWrapper = styled.div`
  padding-top: 140px;
  padding-bottom: 50px;
`

export const ServicesPageBlock = styled.div`

`
export const Title = styled.h2`
  font-weight: 600;
  font-size: calc(30px + (76 - 30) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.3;
  letter-spacing: -.02em;
  color: var(--colors-text-dark);
  margin-bottom: 50px;

  @media (min-width: 1200px) {
    // font-size: 42px;
    // line-height: 52px;
    margin-bottom: 70px;
  }
`
export const ServiceBlock = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: calc(20px + (40 - 20) * ((100vw - 320px) / (1920 - 320)));

    @media (max-width: 630px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  ul a {
    position: relative;
    align-self: center;
    font-size: calc(18px + (24 - 18) * ((100vw - 320px) / (1920 - 320)));
    background: var(--colors-bg-green);
    font-weight: var(--fw-extra-bold);
    line-height: 1.2;
    color: var(--colors-text-wight);
    padding: 15px 30px;
    display: flex;
    justify-content: center;
    transition: all 0.3s;
    font-family: 'Montserrat';
    text-transform: uppercase;
    z-index: 10;
    border-radius: 5px;

    @media (max-width: 1024px) {
      align-self: stretch;
    }
    
    :before {
      background-color: var(--colors-bg-green);
      border: 2px solid var(--colors-bg-green);
      content: "";
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      transition: background-color .3s ease-in-out, border-color .3s ease-in-out, transform .3s ease-in-out;
      width: 100%;
      z-index: -1;
      border-radius: 5px;
    }

    @media (min-width: 769px) {
      :hover {
        background: var(--colors-text-wight);
        color: black;
        transition: all 0.3s;

        :before {
          transition: all 0.3s;
          background-color: var(--colors-text-wight);
          transform: scale(1.1);
        }
      }
    }
  }
`


