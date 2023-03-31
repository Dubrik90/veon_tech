import React, {FC} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import {EffectCoverflow, Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import {FullSliderWrapper} from './FullSlider-style';
import {FilterCaseType} from "../../../common/types/types";
import {casesData} from "../../app/data";
import {Link} from "react-router-dom";

type CasesSliderPropsType = {
    filter: FilterCaseType
}

export const CasesSlider: FC<CasesSliderPropsType> = ({filter}) => {
    return (
        <FullSliderWrapper>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                // centeredSlides={true}
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
                    casesData[filter].map((el) => {
                        return (
                            <SwiperSlide key={el.id}>
                                <Link to={`/case/${el.type}`}>
                                    <img src={el.img} alt="slide_image"/>
                                </Link>

                            </SwiperSlide>
                        )
                    })
                }
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

