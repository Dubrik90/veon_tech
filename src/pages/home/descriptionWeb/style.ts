import styled from 'styled-components';
import {flexColumn} from "../../../common/style/mixin";

export const DescriptionWebWrapper = styled.div`
  opacity: 0;
  clip-path: polygon(0 100%, 100% 100%, 100% 38%, 0 38%);
  background-color: var(--colors-bg-green-dark);
  padding-top: calc(50px + (120 - 50) * ((100vw - 320px) / (1920 - 320)));
  padding-bottom: calc(30px + (40 - 30) * ((100vw - 320px) / (1920 - 320)));
`
export const DescriptionWebContent = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 42px;
  @media (max-width: 1256px) {
    flex-direction: column;
    row-gap: 40px;
  }


`
export const AboutText = styled.p`
 // opacity: 0;
 // clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
 // transform: translateY(150px);
  font-weight: var(--fw-regular);
  font-size: calc(18px + (28 - 18) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.3;
  color: var(--colors-text-light);
  
  @media (max-width: 760px) {
   
    span {
      color: var(--color-menu-hover);
    }
  }

`
export const DescriptionWebBlock = styled.div`
  flex: 1 0 45%;
  @media (max-width: 1448px) {
    flex: 1 0 40%;
  }

  ${AboutText} {
    &:not(:last-child) {
      margin-bottom: 25px
    }
  }

`

export const Title = styled.h2`
  //will-change: transform;
 // top: 140px;
 // transform: rotate(20deg);
 // opacity: 0;
  position: relative;
  font-weight: var(--fw-bold);
  //font-size: calc(30px + (60 - 30) * ((100vw - 320px) / (1920 - 320)));
  font-size: calc(min(60px, 32px + (32 * ((100vw - 320px) / (1920 - 320)))));
  line-height: 1.1;
  margin-bottom: 15px;
  color: var(--colors-text-dark);
  ${flexColumn()};
  row-gap: 10px;
  
  p:nth-child(3) {
  //  font-size: 18px;
  }

  p span {
    color: var(--colors-text-green)
  }

  //@media (max-width: 760px) {
  //  font-size: 41px;
  //  line-height: 36px;
  //}

`

export const Cards = styled.div`
  align-self: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: 1844px) {
    justify-content: center;
  }
  
  @media (max-width: 1256px) {
    justify-content: space-evenly;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

export const CardsMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    align-self: center;
   
  }
`
export const CardImageMobile = styled.div`
  display: flex;
  column-gap: 10px;
  justify-content: center;
  flex: 0 0 55px;
  margin-top: -55px;

  img {
    width: 55px;
    height: 55px;
    transition: all 0.3s;
    border-radius: 14px;
    
  }
  img.activeCard {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transform: translateY(-10px);
  }

  @media (max-width: 406px) {
    img {
      width: 50px;
      height: 50px
    }

    column-gap: 5px;
  }
`

export const TitleMobile = styled.h3`
  font-weight: var(--fw-extra-bold);
  font-size: 25px;
  line-height: 129.5%;
  color: var(--color-dark);
  @media (max-width: 406px) {
    font-size: 22px;
  }
`
export const SubTitleMobile = styled.p`

`
