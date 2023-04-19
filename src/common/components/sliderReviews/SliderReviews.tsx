import {Swiper, SwiperSlide} from "swiper/react";

import {
    LogoBlock, LogoCompany, LogoUser, NavigationBlock, Review, ReviewBlock, ReviewUser, SwiperReviewsWrapper, UserName,
    UserText, UserTitle
} from "./style";
import {reviewData} from "../../../pages/home/reviews/data";

import {Pagination, Autoplay, Navigation, EffectFade} from 'swiper';

import "./stypeSwiper.css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import {Container} from "../../style/Container";
import {ArrowLeft, ArrowRight} from "./assets";
import React from "react";
import Logo1 from "../../../assets/logo1.jpg";
import Logo2 from "../../../assets/logo2.png";
import Logo3 from "../../../assets/logo3.jpg";
import User1 from "../../../assets/user1.jpg";
import User2 from "../../../assets/user2.jpg";
import User3 from "../../../assets/user3.jpg";
import Left from "../../../assets/chevron_left.svg";
import Right from "../../../assets/chevron_right.svg";

import Quots from "../../../assets/quots.svg";


export const SliderReviews = () => {

    return (
        <SwiperReviewsWrapper>
            <Container>
                {/*<NavigationBlock>*/}
                {/*    <ArrowLeft className="prev"/>*/}
                {/*    <ArrowRight className="next"/>*/}
                {/*</NavigationBlock>*/}
            </Container>
            <Swiper
                loop={true}
                //   effect="fade"
                //    autoplay={{
                //        delay: 1000,
                //        disableOnInteraction: false
                //    }}
                navigation={{
                    nextEl: '.feedback__next',
                    prevEl: '.feedback__prev',
                }}
                modules={[Navigation]}
            >
                <SwiperSlide>
                    <div className="swiper-slide feedback__slide" style={{backgroundColor: '#F02F10'}}>
                        <div className="feedback__inner container">
                            <div className="feedback__box">
                                <div className="feedback__line">
                                    <div className="feedback__block">
                                        <span className="feedback_img">
											 <img src={Logo1}
                                                  alt="Альфа-Банк" className="feedback_img" loading="lazy"/>
										</span>
                                        <img src={User1}
                                             alt="Д.В. Гуща " className="feedback_img" loading="lazy"/>
                                        <div className="feedback__person">
                                            <div className="feedback__name">Д.В. Гуща</div>
                                            <div className="feedback__position">Менеджер проектов «Альфа-Банк»</div>
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
                                <div className="feedback__heading h3">Альфа-Банк</div>
                                <div className="feedback__descr">
                                    Начиная с момента бизнес-анализа успешных банковских продуктов и составления ТЗ и
                                    заканчивая программной разработкой, компания «Новый Сайт» на всех этапах
                                    демонстрировала
                                    высокую компетенцию и постоянную вовлеченность в проект, креативный подход к каждому
                                    бизнес-требованию и предлагала действительно свежие и понятные решения в разработке
                                    сайта.
                                </div>
                                <span className="feedback__full js-open-modal" data-modal-id="267201">
									Весь отзыв								</span>
                                <img src={Quots} className="feedback__qouts" alt="Цитата"
                                     loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide feedback__slide" style={{backgroundColor: '#3a3937'}}>
                        <div className="feedback__inner container">
                            <div className="feedback__box">
                                <div className="feedback__line">
                                    <div className="feedback__block">
                                        <span className="feedback_img">
											 <img src={Logo2}
                                                  alt="Галантэя" className="feedback_img" loading="lazy"/>
										</span>
                                        <img src={User2}
                                             alt="А.В. Гливинская" className="feedback_img" loading="lazy"/>
                                        <div className="feedback__person">
                                            <div className="feedback__name">А.В. Гливинская</div>
                                            <div className="feedback__position">Заместитель директора по маркетингу
                                                и продажам
                                            </div>
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
                                <div className="feedback__heading h3">Галантэя</div>
                                <div className="feedback__descr">
                                    ОАО «Галантэя» — крупнейший производитель кожгалантерейных изделий в Республике
                                    Беларусь. В рамках предприятия производится разнообразный ассортимент аксессуаров:
                                    от
                                    портмоне, ремня и ключницы до сумки, портфеля и чемодана — на все случаи жизни.
                                </div>
                                <span className="feedback__full js-open-modal" data-modal-id="267204">
									Весь отзыв								</span>
                                <img src={Quots} className="feedback__qouts" alt="Цитата"
                                     loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide feedback__slide" style={{backgroundColor: '#108fd3'}}>
                        <div className="feedback__inner container">
                            <div className="feedback__box">
                                <div className="feedback__line">
                                    <div className="feedback__block">
                                        <span className="feedback_img">
											 <img src={Logo3}
                                                  alt="Планета Здоровья" className="feedback_img" loading="lazy"/>
										</span>
                                        <img src={User3}
                                             alt="Е.В. Голынникова" className="feedback_img" loading="lazy"/>
                                            <div className="feedback__person">
                                                <div className="feedback__name">Е.В. Голынникова</div>
                                                <div className="feedback__position">Директор</div>
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
                                <div className="feedback__heading h3">Планета Здоровья</div>
                                <div className="feedback__descr">
                                    «Планета Здоровья» — одна из крупнейших аптечных сетей на рынке Беларуси. Более 300
                                    аптек в разных городах республики, более 15&nbsp000 товаров в ассортименте и сотни
                                    тысяч
                                    покупателей.
                                </div>
                                <span className="feedback__full js-open-modal" data-modal-id="267206">
									Весь отзыв								</span>
                                <img src={Quots} className="feedback__qouts" alt="Цитата"
                                     loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </SwiperReviewsWrapper>
);


}