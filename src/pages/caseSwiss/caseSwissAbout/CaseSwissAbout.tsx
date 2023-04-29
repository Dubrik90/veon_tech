import React from 'react';
import {CaseSwissAboutWrapper, CaseSwissContent, Text} from './style';
import swissImg1 from '../assets/swissImg1.png'
import {Container} from "../../../common/style/Container";


export const CaseSwissAbout = () => {
    return (
        <CaseSwissAboutWrapper src={swissImg1}>
            <Container>
                <CaseSwissContent>
                    <Text>Компания B.Well Swiss занимается разработкой медицинских товаров</Text>
                    <Text>Заказчика беспокоило отсутствие визуального представления новостей и статей на сайте.</Text>
                </CaseSwissContent>
            </Container>
        </CaseSwissAboutWrapper>
    );
};

