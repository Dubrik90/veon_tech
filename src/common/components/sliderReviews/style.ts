import styled from 'styled-components';


export const SwiperReviewsWrapper = styled.div`
  max-width: 1120px;
  box-sizing: content-box;
  margin: 0 auto;
  padding: 0 40px 30px 40px;
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

export const Review = styled.p`
  width: 100%;
  color: var(--colors-text-dark);
  @media (max-width: 768px) {
    font-weight: 600;
    font-size: 13px;
    line-height: 20px;
  }

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
