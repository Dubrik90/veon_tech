import styled from "styled-components";

export const SwiperWrapper = styled.div`

  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    column-gap: 15px;
    @media (max-width: 425px) {
      .next, .prev {
          display: none;
      }
    }

    .swiper {
      max-width: 415px;
      height: 100%;
      border-radius: 15px;

      .swiper-pagination {
          display: none;
        @media (max-width: 425px) {
          display: block;
        }
      }

      @media (max-width: 540px) {
        max-width: 300px;
      }
      @media (max-width: 425px) {
        max-width: 400px;
      }
      @media (max-width: 400px) {
        max-width: 375px;
      }
      @media (max-width: 375px) {
        max-width: 350px;
      }
      @media (max-width: 350px) {
        max-width: 320px;
      }

      .swiper-slide {
        background-position: center;
        background-size: cover;

        .swiper-slide img {

          display: block;
          width: 100%;
          max-height: 100%;
          object-fit: contain;
          

        }
      }
    }


  }






`
