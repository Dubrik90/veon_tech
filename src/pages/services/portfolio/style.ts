import styled from "styled-components";
import {TitleH3} from "../../../common/style/global";

export const PortfolioWrapper = styled.div`
`
export const PortfolioContent = styled.div`
`
export const Title = styled(TitleH3)`
  font-size: 30px;
  margin-bottom: 30px;


  @media (max-width: 768px) {
    font-size: 25px;
  }
  @media (max-width: 620px) {
    font-size: 18px;
  }
`
export const SwiperWrapper = styled.div`
  .swiper {
    width: 100%;
    height: 100%;

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-slide img {
      
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`



