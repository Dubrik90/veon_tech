import React, {FC} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import {EffectCoverflow} from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import {FullSliderWrapper} from './style';
import {Link} from "react-router-dom";

type SliderPortfolioProps = {
    activeCaseImg: Array<{ img: string, src: string }>
}

export const SliderPortfolio: FC<SliderPortfolioProps> = ({activeCaseImg}) => {

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
                    activeCaseImg.map((el, index) => {
                        return (
                            <SwiperSlide key={index} className={'case'}>
                                <Link to={el.src}>
                                    <img src={el.img} alt="slide_image"/>
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </FullSliderWrapper>
    );
};

