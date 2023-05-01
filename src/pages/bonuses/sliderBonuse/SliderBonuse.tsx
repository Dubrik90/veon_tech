import React, {FC} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import {EffectCoverflow} from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import {SliderBonuseWrapper} from "./style";
import {SaleCardsType} from "../Bonuses";
import {BonusesCard} from "../bonusesCard";


type SliderBonuseProps = {
    saleCards: SaleCardsType[]
}

export const SliderBonuse:FC<SliderBonuseProps> = ({saleCards}) => {

    return (
        <SliderBonuseWrapper>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                 centeredSlides={true}
                loop={true}
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
                    saleCards.map((el, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <BonusesCard card={el} key={index}/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </SliderBonuseWrapper>
    );
};

