import React, { useRef, useEffect } from 'react';
import {BonuseContent, ChoiceBonuseWrapper, SubTitle, Title, Text} from "./style";
import {Container} from "../../../common/style/Container";

import { gsap } from 'gsap';

export const ChoiceBonuse = () => {



    return (
        <ChoiceBonuseWrapper>
            <Container>
                <BonuseContent>
                    <Title>Бонусы и скидки на разработку. Программа лояльности для клиентов компании VEON-TECH</Title>
                    <SubTitle>При работе с нами вы получите дополнительные опции для развития Вашего бизнеса. Улучшаем ваш бизнес вместе !</SubTitle>
                    <Text >Выберите <span>свой</span> бонус!</Text>

                </BonuseContent>
            </Container>
        </ChoiceBonuseWrapper>
    );
};

