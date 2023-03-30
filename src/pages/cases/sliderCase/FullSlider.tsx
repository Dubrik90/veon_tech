import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import {EffectCoverflow, Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import rentMarket from "../assets/rentMarket.png";
import couchingVisit from "../assets/couchingVisit.png";
import partyCorporat from "../assets/partyCorporat.png";
import prosnowVisit from "../assets/prosnowVisit.png";
import elephantVizit from "../assets/elephantVizit.png";
import granitCatalog from "../assets/granitCatalog.png";
import mediaCorporat from "../assets/mediaCorporat.png";
import noomblistMarket from "../assets/noomblistMarket.png";
import sdCatalog from "../assets/sdCatalog.png";
import sodoxCatalog from "../assets/sodoxCatalog.png";
import wellCatalog from "../assets/wellCatalog.png";
import {FullSliderWrapper} from './FullSlider-style';

export const FullSlider = () => {
    return (
        <FullSliderWrapper>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src={rentMarket} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={couchingVisit} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={partyCorporat} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={prosnowVisit} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={elephantVizit} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={granitCatalog} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={mediaCorporat} alt="slide_image"/>
                </SwiperSlide>
                {/*<div className="slider-controler">*/}
                {/*    <div className="swiper-button-prev slider-arrow">*/}
                {/*        <img src={left_arrow} alt="left_arrow"/>*/}
                {/*    </div>*/}
                {/*    <div className="swiper-button-next slider-arrow">*/}
                {/*        <img src={right_arrow} alt="right_arrow"/>*/}
                {/*    </div>*/}
                {/*    <div className="swiper-pagination"></div>*/}
                {/*</div>*/}
            </Swiper>
        </FullSliderWrapper>
    );
};

