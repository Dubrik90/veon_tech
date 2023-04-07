import styled from "styled-components";
import {TitleH3} from "../../../common/style/global";
import {flexColumn} from "../../../common/style/mixin";

export const PortfolioWrapper = styled.div`
  padding: 72px 0 60px 0;

  @media (max-width: 768px) {
    padding: 40px 0 40px 0;
  }
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
  //.swiper {
  //  width: 100%;
  //  height: 100%;
  //
  //  .swiper-slide {
  //    text-align: center;
  //    font-size: 18px;
  //    background: #fff;
  //    max-height: 300px;
  //    
  //
  //    /* Center slide text vertically */
  //    display: flex;
  //    justify-content: center;
  //    align-items: center;
  //  }
  //
  //  .swiper-slide img {
  //    display: block;
  //    width: 100%;
  //    height: 100%;
  //    object-fit: cover;
  //  }
  //}
`
export const SwiperCardWrapper = styled.div`
  ${flexColumn()};
  row-gap: 15px;
  background: var(--color-grey-light);
  border-radius: 15px;
  overflow: hidden;
  
`
export const ImgBlock = styled.div`
  height: 300px;
  @media (max-width: 768px) {
   height: 250px;
  }
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  
`
export const ContentBlock = styled.div`
  ${flexColumn()};
  row-gap: 10px;
  min-height: 85px;
  padding: 0 15px 15px 15px;
  
  @media (max-width: 768px) {
    min-height: auto;
  }

  @media (min-width: 768px) {
    :hover {
      ${Img} {
        scale: 1.1;
      }

    }
  }
`

export const TitleSlider = styled.p`
  font-size: 18px;
  font-weight: var(--fw-bold);
  line-height: 1.3;
  color: var(--color-dark);
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`
export const Text = styled.h4`
  @media (max-width: 768px) {
    font-size: 14px;
  }
`