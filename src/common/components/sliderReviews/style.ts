import styled from 'styled-components';
import {flexColumn} from "../../style/mixin";


export const SwiperReviewsWrapper = styled.div`


  .swiper {
    //  width: 100%;
    // height: 100%;

    .swiper-wrapper {
      //  margin-bottom: 20px;
    }
  }

  .swiper-slide {
    //align-items: center;
    //font-weight: 600;
    //font-size: 20px;
    //line-height: 25px;
    //overflow: hidden;
    color: var(--color-withe);
    min-height: 780px;

    @media (max-width: 768px) {
   //   min-height: 640px
    }
    @media (max-width: 768px) {
      min-height: 480px
    }

    .container {
      max-width: 1920px;
      box-sizing: content-box;
      margin: 0 auto;
      padding: 0 40px;
      // position: relative;

      @media (max-width: 768px) {
        padding: 0 15px;
      }
    }

    .feedback__inner {
      display: flex;
      padding-top: 185px;
      padding-bottom: 190px;

      @media (max-width: 1199.98px) {
        flex-direction: column;
        padding-top: 50px;
        padding-bottom: 50px;
        align-items: center
      }

      @media (max-width: 767.98px) {
        padding-top: 36px;
        padding-bottom: 36px
      }
    }

    .feedback__box {
      width: 50%
    }

    @media (max-width: 1199.98px) {
      .feedback__box {
        width: 100%
      }
    }

    .feedback__text {
      width: 50%;
      font-size: 32px;
      line-height: 42px;
      position: relative;
      margin-top: 28px
    }

    @media (max-width: 1199.98px) {
      .feedback__text {
        width: 100%
      }
    }

    .feedback__qouts {
      position: absolute;
      left: 0;
      top: 0;
      transform: translate(-50%, -50%);
      max-width: 162px;
      max-height: 106px;

      img {
        max-width: 100%;
        display: block;
        object-fit: contain;
      }
    }

    .feedback__full {
      display: block;
      //  width: -webkit-fit-content;
      width: -moz-fit-content;
      width: fit-content;
      text-decoration: underline;
      opacity: .5;
      transition: opacity .3s;
      margin-top: 15px;
      font-weight: 500;
      font-size: 32px;
      line-height: 42px
    }

    @media (max-width: 1199.98px) {
      .feedback__full {
        margin-top: 36px
      }
    }

    @media (max-width: 767.98px) {
      .feedback__full {
        font-size: 18px;
        line-height: 25px
      }
    }

    .feedback__full:hover {
      opacity: 1;
      cursor: pointer
    }

    .feedback__line {
      width: 540px;
      position: relative;
      margin-bottom: 20px
    }

    @media (max-width: 767.98px) {
      .feedback__line {
        width: 100%
      }
    }

    .feedback__block {
      display: flex;
      align-items: center;
      position: relative;
      height: 100px
    }

    @media (max-width: 767.98px) {
      .feedback__block {
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        height: auto
      }
    }

    .feedback__person {
      margin-left: 10px
    }

    @media (max-width: 767.98px) {
      .feedback__person {
        padding-right: 0
      }
    }

    .feedback__name {
      font-size: 20px;
      line-height: 30px;
      font-weight: 700;
      margin-bottom: 8px
    }

    @media (max-width: 767.98px) {
      .feedback__name {
        font-weight: 600;
        font-size: 16px;
        line-height: 25px;
        margin-bottom: 8px
      }
    }

    .feedback__position {
      font-size: 20px;
      line-height: 30px;
      font-weight: 400;
      opacity: .5
    }

    @media (max-width: 767.98px) {
      .feedback__position {
        font-weight: 600;
        font-size: 16px;
        line-height: 18px
      }
    }

    .feedback__navigation {
      display: block;
      position: absolute;
      width: 115px;
      left: 0;
      top: 240px
    }

    .feedback_img {
      flex: 0 0 auto;
      border-radius: 50%;
      overflow: hidden;
      z-index: 1;
      width: 90px;
      height: 90px
    }

    @media (max-width: 767.98px) {
      .feedback_img {
        margin-top: 6px;
        width: 84px;
        height: 84px
      }
    }

    .feedback_img:nth-child(2) {
      transform: translateX(-30px);
      z-index: 0
    }

    .feedback__descr {
      max-width: 720px;
      position: relative;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow-y: hidden;
      margin-top: 20px;
      font-weight: 400;
      letter-spacing: -.02em;
      font-size: 32px;
      line-height: 42px
    }

    @media (max-width: 767.98px) {
      .feedback__descr {
        max-width: 100%;
        margin-top: 0;
        font-size: 18px;
        line-height: 25px
      }
    }

    @media (max-width: 1199.98px) {
      .feedback__navigation {
        display: none
      }

      .feedback__qouts {
        display: none
      }
    }

    @media (max-width: 767.98px) {
      .feedback__heading {
        display: none
      }
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .awards-feedback {
    display: none
  }

  @media (min-width: 1200px) {
    .awards-feedback {
      display: flex;
      align-items: center
    }
  }

  .awards-feedback__link {
    width: auto;
    font-weight: 600;
    font-size: 22px;
    line-height: 28px;
    letter-spacing: -.02em;
    color: #fff;
    margin-right: 15px
  }

  @media (min-width: 992px) {
    .awards-feedback__link {
      font-size: 42px;
      line-height: 52px;
      margin-right: 20px
    }
  }

  .awards-feedback__link:hover {
    color: #fff
  }


  //.swiper-pagination {
  //  position: relative;
  //}
  //
  //.swiper-pagination-bullet {
  //  border-radius: 50%;
  //  height: 18px;
  //  width: 18px;
  //  background-color: #D5D5D5;
  //  z-index: 5;
  //  opacity: 1;
  //}
  //
  //
  //.swiper-pagination-bullet-active {
  //  position: relative;
  //  border: 3px solid #5db447;
  //
  //  //:after {
  //  //  content: '';
  //  //  position: absolute;
  //  //  top: 50%;
  //  //  left: 50%;
  //  //  transform: translate(-50%, -50%);
  //  //  width: 10px;
  //  //  height: 10px;
  //  //  border: 2px solid #ffffff;
  //  //  border-radius: 100%;
  //  //}
  //}

  .swiper-button-next:after, .swiper-button-prev:after {
    display: none;
  }

`
type ReviewBlockProps = {
    background: string
}
export const ReviewBlock = styled.div<ReviewBlockProps>`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background-color: ${({background}) => background ? `${background}` : '#fff'};
`
export const ReviewUser = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 20px;
`
export const LogoBlock = styled.div`
  display: flex;
  column-gap: 30px;
  

`
export const LogoCompany = styled.div`
  width: 100px;
  background-color: #dbe8d3;
  border-radius: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 60px;
    max-height: 60px;
    object-fit: contain;
  }
`
export const LogoUser = styled.div`
  width: 100px;
  background-color: #5DB447;
  border-radius: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -50px;

  img {
    max-width: 60px;
    max-height: 60px;
    object-fit: contain;
  }

`
export const UserName = styled.div`
  ${flexColumn()};
  font-weight: var(--fw-regular);
  padding-top: 20px;
`
export const UserTitle = styled.p`
    font-weight: var(--fw-medium);
  font-size: 20px;

    
`
export const UserText = styled.p`
  font-size: 20px;
  opacity: 0.6;
    
`



export const Review = styled.p`
  max-width: 600px;
  color: var(--colors-text-dark);
  font-weight: var(--fw-regular);
  
  
`

export const NavigationBlock = styled.div`
  position: absolute;
  right: 21px;
  top: -40px;
  display: flex;
  column-gap: 30px;
  z-index: 50;
  @media (max-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 769px) and (max-width: 2000px) {
    svg {
      cursor: pointer;
      transition: all 0.3s;
      path {
        fill: var(--colors-text-dark);
      }
    }

    svg:hover {
      transform: translateX(5px);
      transition: all 0.3s;

      path {
        transition: all 0.3s;
        fill: #6EEC4E;
      }
    }

    .prev {
      :hover {
        transform: translateX(-5px) rotate(-180deg);
      }

      transform: rotate(-180deg);
    }

  }

  .prev {
    transform: rotate(-180deg);
  }
`
