import styled from "styled-components";
import {flexColumn} from "../../../common/style/mixin";

export const ServiceHeaderWrapper = styled.div`
  padding: 130px 0 50px 0;
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
    grid-template-columns: repeat(1, 1fr);
    row-gap: 20px;
  }
`
export const HeaderContent = styled.div`
  ${flexColumn()};
  row-gap: 40px;

`
export const Title = styled.h2`
  font-weight: var(--fw-bold);
  font-size:  calc(38px + (68 - 38) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.3;
  color: var(--colors-text-dark);
  span {
    color: var(--colors-text-green);
  }

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
  position: relative;


  .about-us__btn {
    bottom: 20px;
    left: 55px;
    width: 161px;
    height: 161px;
    background: var(--colors-bg-green);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    border-radius: 50%;
    padding: 0 10px;
    color: var(--colors-text-dark);
    font-weight: 600;
    font-size: calc(16px + (20 - 16) * ((100vw - 320px) / (1920 - 320)));
    line-height: 22px;
    text-align: center;
    letter-spacing: -.02em;
    cursor: pointer;
    z-index: 4;
    transition: color .15s;

    @media (max-width: 1024px) {
      bottom: -13px;
      left: 16px;
      width: 140px;
      height: 140px;
    }
  }

  .about-us__btn-icon {
    position: relative;
    bottom: 2px;
    display: inline;
    height: 22px;
    width: 22px;
    margin: 0 4px
  }

  @media (min-width: 1400px) {
    .about-us__btn {
      width: 184px;
      height: 184px;
      padding: 0 30px;
      bottom: 19px;
      left: 18px
    }
  }

  .about-us__btn:active {
    color: #000
  }

  @media (any-hover: hover) {
    .about-us__btn:hover {
      color: #000
    }
  }


  @media (max-width: 720px) {
    //  display: none;
    max-width: 400px;
  }
`
export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`

export const Button = styled.button`
  position: relative;
  align-self: flex-end;
  font-size: var(--fs-16);
  background: var(--colors-bg-green);
  font-weight: var(--fw-extra-bold);
  line-height: 20px;
  color: var(--colors-text-wight);
  padding: 25px 20px;
  display: flex;
  justify-content: center;
  transition: all 0.3s;
  font-family: var(--family);
  text-transform: uppercase;

  @media (max-width: 852px) {
    font-size: 16px;
    padding: 20px 15px;
  }
  @media (max-width: 720px) {
    align-self: center;
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