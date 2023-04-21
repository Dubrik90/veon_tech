import styled from "styled-components";
import {flexColumn} from "../../../common/style/mixin";

export const ServiceHeaderWrapper = styled.div`
  padding: 100px 0 50px 0;
`

export const HeaderBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  column-gap: 30px;
  justify-content: space-between;

  @media (max-width: 852px) {
    column-gap: 20px;
  }
  @media (max-width: 720px) {
    display: block;
  }
`
export const HeaderContent = styled.div`
  ${flexColumn()};
  row-gap: 25px;

`
export const Title = styled.h2`
  font-weight: var(--fw-bold);
  font-size: calc(33px + (52 - 33) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.3;
  color: var(--colors-text-dark);

  //@media (max-width: 1070px) {
  //  font-size: 28px;
  //}
  //@media (max-width: 852px) {
  //  font-size: 23px;
  //}
  //@media (max-width: 375px) {
  //  font-size: 18px;
  //}

`
export const Text = styled.p`
  line-height: 1.3;
  color: var(--colors-text-dark);

  @media (max-width: 1070px) {
    font-size: 16px;
  }
  @media (max-width: 375px) {
    font-size: 14px;
  }
`
export const HeaderText = styled.div`

`

export const HeaderImage = styled.div`
  justify-self: center;
  max-width: 500px;

  @media (max-width: 720px) {
    display: none;
  }
`
export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`

export const Button = styled.button`
  position: relative;
  align-self: flex-start;
  font-size: var(--fs-16);
  background: var(--colors-bg-green);
  font-weight: var(--fw-extra-bold);
  line-height: 20px;
  color: var(--colors-text-wight);
  padding: 20px 20px;
  display: flex;
  justify-content: center;
  transition: all 0.3s;
  font-family: var(--family);
  text-transform: uppercase;
  border-radius: 5px;

  @media (max-width: 852px) {
    font-size: 16px;
    padding: 20px 15px;
  }
  @media (max-width: 425px) {
    align-self: stretch;
  }
  @media (max-width: 375px) {
    font-size: 14px;
    padding: 15px 10px;
  }

  @media (min-width: 426px) {
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
`