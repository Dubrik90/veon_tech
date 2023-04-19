import React from 'react';
import {PortfolioSliderWrapper, Title, SubTitleCase, SubTitle, ArrowBlock, AboutBlock, TitleCase} from "./style";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import ArrowRight  from '@mui/icons-material/EastOutlined';
import ArrowLeft  from '@mui/icons-material/EastOutlined';



// import required modules
import {Navigation} from "swiper";
import {portfolioData} from "../portfolio/data";
import {Container} from "../../../common/style/Container";
import {Link} from "react-router-dom";


export const PortfolioSlider = () => {
    return (
        <PortfolioSliderWrapper>
            <Container>
                <SubTitle className='animate'>МЫ РУЧАЕМСЯ ЗА КАЧЕСТВО</SubTitle>
                <Title className='animate'>НАШИ КЕЙСЫ</Title>
                <ArrowBlock>
                    <ArrowRight className="prev"/>
                    <ArrowLeft className="next"/>
                </ArrowBlock>
            </Container>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                centeredSlides={true}
                navigation={{
                    nextEl: '.next',
                    prevEl: '.prev',
                }}
                modules={[ Navigation]}
                className="mySwiper"
                breakpoints={{
                    320: {
                        slidesPerView: 1.2,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },

                }}
            >
                {portfolioData.map((el, index) => (
                    <SwiperSlide key={index} className='animate'>
                        <Link to={el.link}>
                            <img src={el.img} alt='img'/>
                            <AboutBlock>
                                <TitleCase>{el.header}</TitleCase>
                                {/*<SubTitleCase>{el.desc}</SubTitleCase>*/}
                            </AboutBlock>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </PortfolioSliderWrapper>
    );
};

