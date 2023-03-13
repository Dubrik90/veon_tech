import React, {FC} from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

import {FreeMode, Scrollbar} from "swiper";
import {TechnologiesItem} from "../../../pages/home/technologies/technologiesItem/TechnologiesItem";
import {SwiperTehnologiesWrapper} from "./style";

type SwiperTehnologiesPropsType = {
    data: any
}
export const SwiperTehnologies: FC<SwiperTehnologiesPropsType> = ({data}) => {
    return (
        <SwiperTehnologiesWrapper>
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar, FreeMode]}
                slidesPerView={3}
                spaceBetween={5}
                freeMode={true}
                className="mySwiper"
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                    },
                    390: {
                        slidesPerView: 3,
                    },

                    640: {
                        slidesPerView: 4,
                    },
                }}
            >
                {data.map((el:any, index: number) => (
                    <SwiperSlide key={index}>
                        <TechnologiesItem tech={el}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </SwiperTehnologiesWrapper>
    );
};

