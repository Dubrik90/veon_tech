import React, {FC} from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";



import { Scrollbar } from "swiper";
import {TechnologiesItem} from "../../../pages/home/technologies/technologiesItem/TechnologiesItem";
import {SwiperTehnologiesWrapper} from "./style";

type SwiperTehnologiesPropsType = {
    data: any
}
export const SwiperTehnologies: FC<SwiperTehnologiesPropsType> = ({data}) => {
    return (
        <SwiperTehnologiesWrapper>
            <Swiper
                loop={true}
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                slidesPerView={3}
                spaceBetween={5}
                className="mySwiper"
                breakpoints={{
                    320: {
                        slidesPerView: 1.5,
                    },
                    370: {
                        slidesPerView: 2.5,
                    },
                    570: {
                        slidesPerView: 3.5,
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

