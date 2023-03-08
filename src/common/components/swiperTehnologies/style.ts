import styled from "styled-components";

export const SwiperTehnologiesWrapper = styled.div`

  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    column-gap: 15px;

    .swiper {
    
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
