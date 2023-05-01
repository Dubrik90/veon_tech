import React from 'react';
import {Content, Img, JointWorkWrapper, Text} from './style';
import {Container} from "../../../common/style/Container";
import bak2 from "../assets/bak2.webp";


export const JointWork = () => {
    return (
        <JointWorkWrapper src={bak2}>
            <Container>
                <Content>
                    <Text>
                        Совместно с заказчиком проработали структуру главной страницы и расположение элементов на сайте,
                        создали уникальный дизайн, обработали изображения для каталога и наполнили сайт. Проработали
                        мобильную версию сайта и настроили корректное отображение элементов на всех устройствах.
                    </Text>
                    <img src={bak2} alt=""/>
                </Content>
            </Container>
            <Img src={bak2} alt=""/>
        </JointWorkWrapper>
    );
};

