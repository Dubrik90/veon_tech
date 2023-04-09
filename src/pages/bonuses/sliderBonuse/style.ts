import styled from 'styled-components';

export const SliderBonuseWrapper = styled.div`

  display: none;

  @media (max-width: 768px) {
    padding: 40px 0;
    display: block;

    .swiper_container {
      padding-bottom: 2rem;
      position: relative;
    }

    .swiper-3d {
      perspective: 918px;
      //  overflow: visible;
      @media (max-width: 425px) {
        perspective: 450px;
      }
    }

    .swiper-slide {
      width: 20rem;
      position: relative;
      padding-top: 55px;

      @media (max-width: 425px) {
        width: 19.6rem;
      }
      @media (max-width: 390px) {
        width: 15.6rem;
      }
    }

    .swiper-slide-prev, .swiper-slide-next {
      transform: translateX(50%) scale(0.8);
    }

    .swiper-slide-active {
      opacity: 1;
    }

    .swiper-slide img {
      width: 100%;
      object-fit: cover;
    }

    .swiper-slide-shadow-left,
    .swiper-slide-shadow-right {
      display: none;
    }

    .slider-controler {
      display: none;
      //@media (min-width: 1024.98px) {
      //  position: relative;
      //  bottom: 22rem;
      //  display: flex;
      //  align-items: center;
      //  justify-content: center;
      //}
    }

    .slider-controler .swiper-button-next {
      left: 58% !important;
      transform: translateX(-58%) !important;
    }

    @media (max-width: 990px) {
      .slider-controler .swiper-button-next {
        left: 70% !important;
        transform: translateX(-70%) !important;
      }
    }

    @media (max-width: 450px) {
      .slider-controler .swiper-button-next {
        left: 80% !important;
        transform: translateX(-80%) !important;
      }
    }

    @media (max-width: 990px) {
      .slider-controler .swiper-button-prev {
        left: 30% !important;
        transform: translateX(-30%) !important;
      }
    }

    @media (max-width: 450px) {
      .slider-controler .swiper-button-prev {
        left: 20% !important;
        transform: translateX(-20%) !important;
      }
    }

    .slider-controler .slider-arrow {
      width: 3.5rem;
      height: 17.5rem;
      left: 42%;
      filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
    }

    .slider-controler .slider-arrow ion-icon {
      font-size: 2rem;
      color: #222224;
    }

    .slider-controler .slider-arrow::after {
      content: '';
    }
  }
`
