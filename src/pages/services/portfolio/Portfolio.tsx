import React from 'react';
import {PortfolioContent, PortfolioWrapper, SwiperWrapper, Title} from './style';
import {Container} from "../../../common/style/Container";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import {Pagination} from "swiper";
import {allCategoryPortfolio} from "./app/data";


export const Portfolio = () => {


    return (
        <PortfolioWrapper>
            <Container>
                <PortfolioContent>
                    <Title>ПОРТФОЛИО</Title>
                    <SwiperWrapper>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {
                                allCategoryPortfolio.map(el => (
                                    <SwiperSlide key={el.id}>
                                        <img src={el.img} alt=""/>
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

