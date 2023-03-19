import {Swiper, SwiperSlide} from "swiper/react";

import {NavigationBlock, Review, SwiperReviewsWrapper} from "./style";
import {reviewData} from "../../../pages/home/reviews/data";

import {Pagination, Autoplay, Navigation} from 'swiper';

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import {Container} from "../../style/Container";
import {ArrowLeft, ArrowRight} from "./assets";
import React from "react";


export const SliderReviews = () => {

    return (
        <SwiperReviewsWrapper>
            <Container>
                <NavigationBlock>
                    <ArrowLeft className="prev"/>
                    <ArrowRight className="next"/>
                </NavigationBlock>
            </Container>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false
                }}
                navigation={{
                    nextEl: '.next',
                    prevEl: '.prev',
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
            >
                {reviewData.map((el, index) => (
                    <SwiperSlide key={index}>
                        <Review>{el.review}</Review>
                    </SwiperSlide>
                ))}
            </Swiper>
        </SwiperReviewsWrapper>
    );


}