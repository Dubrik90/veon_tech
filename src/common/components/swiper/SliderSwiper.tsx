import React, {useRef} from 'react';
import {EffectFade, FreeMode, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import "swiper/css";
import "swiper/css/effect-fade";


import {portfolioData} from "../../../pages/home/portfolio/data";
import {SwiperWrapper} from "./style";
import {ArrowNext, ArrowPrev} from './assets';


type SwiperSliderPropsType = {
    image: string[]
}

export const SliderSwiper = () => {
    return (
        <SwiperWrapper>
            <ArrowPrev className="prev"/>
            <Swiper
                loop={true}
                navigation={{
                    nextEl: '.next',
                    prevEl: '.prev',
                }}
                pagination={{
                    clickable: true,
                }}
                effect="fade"
                modules={[FreeMode, Navigation, EffectFade, Pagination]}
            >
                {portfolioData.map((el, index) => (
                    <SwiperSlide key={index}>
                        <img src={el.img} alt='img'/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <ArrowNext className="next"/>
        </SwiperWrapper>
    );
};

