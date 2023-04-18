import {Swiper, SwiperSlide} from "swiper/react";

import {
    LogoBlock, LogoCompany, LogoUser, NavigationBlock, Review, ReviewBlock, ReviewUser, SwiperReviewsWrapper, UserName,
    UserText, UserTitle
} from "./style";
import {reviewData} from "../../../pages/home/reviews/data";

import {Pagination, Autoplay, Navigation, EffectFade} from 'swiper';

// import "swiper/css";
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
                effect="fade"
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
                modules={[Pagination, Navigation, EffectFade]}
            >
                {reviewData.map((el, index) => (
                    <SwiperSlide key={index}>
                        <ReviewBlock background={el.background}>
                            <ReviewUser>
                                <LogoBlock>
                                    <LogoCompany>
                                        <img src={el.logoComp} alt="logo company"/>
                                    </LogoCompany>
                                    <LogoUser>
                                        <img src={el.logoComp} alt="logo client"/>
                                    </LogoUser>
                                </LogoBlock>
                                <UserName>
                                    <UserTitle>{el.userName}</UserTitle>
                                    <UserText>{el.position}</UserText>
                                </UserName>
                            </ReviewUser>
                            <Review>{el.review}</Review>
                        </ReviewBlock>
                    </SwiperSlide>
                ))}
            </Swiper>
        </SwiperReviewsWrapper>
    );


}