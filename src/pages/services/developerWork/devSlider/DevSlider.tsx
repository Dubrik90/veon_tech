import React, {FC, useEffect, useMemo, useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import {EffectCoverflow, Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import {Link} from "react-router-dom";
import gsap from "gsap";
import {DevSliderWrapper} from "./style";
import {CardDeveloperWorkType} from "../DeveloperWork";
import {DevCard} from "../devCard";

type DevSliderProps = {
    developerWorkData: CardDeveloperWorkType[]
}

export const DevSlider:FC<DevSliderProps> = ({developerWorkData}) => {

    return (
        <DevSliderWrapper>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                // centeredSlides={true}
                //loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                modules={[EffectCoverflow]}
                className="swiper_container"
                breakpoints={{
                    320: {
                        centeredSlides: true
                    },
                    769: {
                        centeredSlides: false
                    },
                }}
            >
                {
                    developerWorkData.map((el, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <DevCard el={el}/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </DevSliderWrapper>
    );
};

