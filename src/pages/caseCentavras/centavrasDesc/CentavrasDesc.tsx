import React from 'react';
import {CentavrasDescWrapper, Img, ImgBlock, Text} from './style';
import CentavrasImg from './assets/CentavrasDescImg.webp'

export const CentavrasDesc = () => {
    return (
        <CentavrasDescWrapper>
            <Text>
                Веб-интерфейс представляет собой программу для упрощения формирования коммерческих предложений
                Заказчиком. <br/> Наша команда разработала уникальный дизайн и логотип компании.
            </Text>
            <ImgBlock>
                <Img src={CentavrasImg} alt={'Centavras'}/>
            </ImgBlock>
        </CentavrasDescWrapper>
    );
};

