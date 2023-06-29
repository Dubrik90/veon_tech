import React, {FC} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import {EffectCoverflow} from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import {FullSliderWrapper} from './style';
import {Link} from "react-router-dom";
import {SimilarCasesArrayType} from "../SimilarCases";
import {Application} from "../application";

type SliderPortfolioProps = {
    similarCasesArray: SimilarCasesArrayType[]
}

export const SimilarSlider: FC<SliderPortfolioProps> = ({similarCasesArray}) => {

    return (
        <FullSliderWrapper>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
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
                    similarCasesArray.map((el, index) => {
                        return (
                            <SwiperSlide key={index} className={'case'}>
                                <Link to={el.to}>
                                    <img src={el.img} alt="slide_image"/>
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }
                <SwiperSlide>
                    <Application/>
                </SwiperSlide>
            </Swiper>
        </FullSliderWrapper>
    );
};

