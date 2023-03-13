import styled from "styled-components";

export const SwiperTehnologiesWrapper = styled.div`

  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    column-gap: 15px;

    .swiper {
      .swiper-wrapper {
        margin-bottom: 10px;
      }
    
      .swiper-slide {
        background-position: center;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;

        .swiper-slide img {

          display: block;
          width: 100%;
          max-height: 100%;
          object-fit: contain;

        }
      }
      
      .swiper-scrollbar.swiper-scrollbar-horizontal {
        opacity: 1!important;
      }
    }
    

  }






`
