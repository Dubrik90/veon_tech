import {Swiper, SwiperSlide} from "swiper/react";

import {
    LogoBlock, LogoCompany, LogoUser, NavigationBlock, Review, ReviewBlock, ReviewUser, SwiperReviewsWrapper, UserName,
    UserText, UserTitle
} from "./style";
import {reviewData, reviewDataType} from "../../../pages/home/reviews/data";

import {Pagination, Autoplay, Navigation, EffectFade} from 'swiper';

import "./stypeSwiper.css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import {Container} from "../../style/Container";
import {ArrowLeft, ArrowRight} from "./assets";
import React, {useState} from "react";

import Left from "../../../assets/chevron_left.svg";
import Right from "../../../assets/chevron_right.svg";

import Quots from "../../../assets/quots.svg";
import {ModalReview} from "../modalReview/ModalReview";
import {useScrollBlock} from "../../hook/use-scroll-block";
import {setIsConsultantModalOpenAC} from "../../../app/app-reduser";


export const SliderReviews = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [activeReview, setActiveReview] = useState<reviewDataType | null>(null)
    const [blockScroll, allowScroll] = useScrollBlock();

    const handleOpenModal = (el: reviewDataType) => {
        setActiveReview(el)
        blockScroll()
        setModalIsOpen(true);
    };

    const handleCloseModal = () => {
        allowScroll()
        setModalIsOpen(false);
    };


    return (
        <>
            <SwiperReviewsWrapper>
                <Container>
                </Container>
                <Swiper
                    loop={true}
                    navigation={{
                        nextEl: '.feedback__next',
                        prevEl: '.feedback__prev',
                    }}
                    modules={[Navigation]}
                >
                    {reviewData.map((el, index) => (
                        <SwiperSlide key={index}>
                            <div className="swiper-slide feedback__slide" style={{backgroundColor: el.background}}>
                                <div className="feedback__inner container">
                                    <div className="feedback__box">
                                        <div className="feedback__line">
                                            <div className="feedback__block">
                                                <img src={el.logoUser}
                                                     alt="Д.В. Гуща " className="feedback_img" loading="lazy"/>
                                                <div className="feedback__person">
                                                    <div className="feedback__name">{el.userName}</div>
                                                    <div className="feedback__position">{el.position}</div>
                                                </div>
                                            </div>
                                            <div className="feedback__navigation">
                                                <div className="swiper-button-prev feedback__prev">
                                                    <img src={Left} alt="Свайп влево"
                                                         loading="lazy"/>
                                                </div>
                                                <div className="swiper-button-next feedback__next">
                                                    <img src={Right} alt="Свайп вправо"
                                                         loading="lazy"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feedback__text">
                                        <div className="feedback__heading h3">{el.header}</div>
                                        <div className="feedback__descr">
                                            {el.review}
                                        </div>
                                        <span onClick={() => handleOpenModal(el)}
                                              className="feedback__full js-open-modal"
                                              data-modal-id="267201">Весь отзыв
                                        </span>
                                        <img src={Quots} className="feedback__qouts" alt="Цитата"
                                             loading="lazy"/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </SwiperReviewsWrapper>
            <ModalReview reviewData={activeReview}
                         isOpen={modalIsOpen}
                         onRequestClose={handleCloseModal}
            />
        </>
    );
}