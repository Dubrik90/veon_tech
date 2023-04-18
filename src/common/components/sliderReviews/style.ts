import styled from 'styled-components';
import {flexColumn} from "../../style/mixin";


export const SwiperReviewsWrapper = styled.div`
 // max-width: 1120px;
 // box-sizing: content-box;
  margin: 0 auto;
  padding: 0 30px 30px 30px;
 // background: var(--color-bg-green-light);

  .swiper {
    width: 100%;
    height: 100%;
    
    .swiper-wrapper {
      margin-bottom: 20px;
    }
  }

  .swiper-slide {
    align-items: center;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    overflow: hidden;

    color: var(--colors-text-dark);
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-pagination {
    position: relative;
  }

  .swiper-pagination-bullet {
    border-radius: 50%;
    height: 18px;
    width: 18px;
    background-color: #D5D5D5;
    z-index: 5;
    opacity: 1;
  }


  .swiper-pagination-bullet-active {
    position: relative;
    border: 3px solid #5db447;

    :after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 10px;
      border: 2px solid #ffffff;
      border-radius: 100%;
    }
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
