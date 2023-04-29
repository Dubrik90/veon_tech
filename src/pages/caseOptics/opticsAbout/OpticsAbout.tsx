import React from 'react';
import { OpticsAboutWrapper } from './style';
import {ContentBlock, ImageBlock, Text, TextBlock, Title} from "./style";
import OpticsAboutImg from "../assets/opticsAbout.webp";

export const OpticsAbout = () => {
    return (
        <OpticsAboutWrapper>
            <ContentBlock>
                <TextBlock>
                    <Title>Коннектор Оптикс</Title>
                    <Text>
                        Научно-производственная компания, специализирующаяся на разработке и изготовлении гетероструктур для фотоники, в первую очередь для высокоскоростных вертикально-излучающих лазеров спектрального диапазона 850 – 1550 нм.
                    </Text>
                    <Text>
                        Компания ООО "Коннектор Оптикс" обратилась к нам за доработкой сайта и переноса его на новый шаблон.
                    </Text>
                </TextBlock>
                <ImageBlock src={OpticsAboutImg}></ImageBlock>
            </ContentBlock>
        </OpticsAboutWrapper>
    );
};

