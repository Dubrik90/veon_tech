import styled from "styled-components";
import {flexColumn} from "../../../common/style/mixin";

export const PortfolioSliderWrapper = styled.div`
  padding-top: calc(50px + (120 - 50) * ((100vw - 320px) / (1920 - 320)));
  padding-bottom: calc(56px + (180 - 56) * ((100vw - 320px) / (1920 - 320)));

  .swiper {
    width: 100%;
    height: 100%;

    a {
      display: block;
      height: 100%;
      width: 100%;
    }

    a:hover {
      span {
        color: var(--colors-text-green);
      }
    }

    .swiper-slide {
      ${flexColumn()};
      row-gap: 10px;
      text-align: center;
      font-size: 18px;
      background: var(--colors-bg);

      /* Center slide text vertically */
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`

export const SubTitle = styled.p`
  font-weight: var(--fw-medium);
  text-align: center;
  line-height: 1.3;
  font-size: calc(16px + (18 - 16) * ((100vw - 320px) / (1920 - 320)));
  color: #5DB447;
  margin-bottom: 15px;

`
export const Title = styled.h3`
  text-align: center;
  font-weight: var(--fw-bold);
  font-size: calc(30px + (76 - 30) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.4;
  margin-bottom: calc(20px + (40 - 20) * ((100vw - 320px) / (1920 - 320)));
  color: var(--colors-text-dark);

`
export const ArrowBlock = styled.div`
  display: flex;
  // width: 100%;
  justify-content: flex-end;
  margin-bottom: 20px;
  column-gap: 15px;
  @media (max-width: 768px) {
    display: none;
  }


  svg {
    width: 40px;
    height: 35px;
    transition: all 0.3s;
    fill: var(--colors-text-dark);

    :hover {
      fill: var(--color-menu-hover);
    }
  }

  .prev {
    transform: rotate(180deg);
  }
`

export const AboutBlock = styled.div`
  display: flex;
  row-gap: 5px;
  justify-content: start;
  width: 100%;
`
export const TitleCase = styled.span`
  font-weight: var(--fw-regular);
  font-size: calc(18px + (24 - 18) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.1;
  color: var(--colors-text-dark);
  border-bottom: 3px solid var(--colors-text-green);
  align-self: flex-start;
  text-align: start;
  transition: color 0.3s;

`
export const SubTitleCase = styled.p`
  font-weight: var(--fw-medium);
  font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.1;
  color: var(--colors-text-green);


`
