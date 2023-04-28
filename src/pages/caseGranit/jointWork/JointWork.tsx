import React from 'react';
import {JointWorkWrapper, Text} from './style';
import {Container} from "../../../common/style/Container";
import bak2 from "../assets/bak2darkTablet.png";


export const JointWork = () => {
    return (
        <JointWorkWrapper src={bak2}>
            <Container>
                <Text>
                    Совместно с заказчиком проработали структуру главной страницы и расположение элементов на сайте,
                    создали уникальный дизайн, обработали изображения для каталога и наполнили сайт. Проработали
                    мобильную версию сайта и настроили корректное отображение элементов на всех устройствах.
                </Text>
            </Container>
        </JointWorkWrapper>
    );
};

