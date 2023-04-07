import React from 'react';
import {
    ContentBlock,
    Img,
    ImgBlock,
    PortfolioContent,
    PortfolioWrapper,
    SwiperCardWrapper,
    SwiperWrapper,
    Title, TitleSlider,
    Text
} from './style';
import {Container} from "../../../common/style/Container";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import {allCategoryPortfolio} from "./app/data";


export const Portfolio = () => {


    return (
        <PortfolioWrapper>
            <Container>
                <PortfolioContent>
                    <Title>ПОРТФОЛИО</Title>
                    <SwiperWrapper>
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            className="mySwiper"
                            breakpoints={{
                                320: {
                                    slidesPerView: 1.5,
                                },
                                768: {
                                    slidesPerView: 2.5,
                                },
                                975: {
                                    slidesPerView: 3,
                                },
                                1340: {
                                    slidesPerView: 4,
                                },
                                1600: {
                                    slidesPerView: 5,
                                },
                            }}
                        >
                            {
                                allCategoryPortfolio.map(el => (
                                    <SwiperSlide key={el.id}>
                                        <SwiperCardWrapper>
                                            <ImgBlock>
                                                <Img src={el.img} alt=""/>
                                            </ImgBlock>
                                            <ContentBlock>
                                                <TitleSlider>{el.type}</TitleSlider>
                                               <Text>{el.title}</Text>
                                            </ContentBlock>
                                        </SwiperCardWrapper>

                                    </SwiperSlide>
                                ))
                            }


                        </Swiper>
                    </SwiperWrapper>

                </PortfolioContent>

            </Container>
        </PortfolioWrapper>
    );
};

