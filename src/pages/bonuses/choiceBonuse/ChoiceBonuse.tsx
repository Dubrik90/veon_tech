import React, { useRef, useEffect } from 'react';
import {BonuseContent, ChoiceBonuseWrapper, SubTitle, Title, Text} from "./style";
import {Container} from "../../../common/style/Container";
import { gsap, SteppedEase } from 'gsap';

export const ChoiceBonuse = () => {

    return (
        <ChoiceBonuseWrapper>
            <Container>
                <BonuseContent>
                    <SubTitle >При работе с нами вы получите дополнительные опции для развития Вашего бизнеса. Улучшаем ваш бизнес вместе!</SubTitle>
                    <Title> Программа лояльности для клиентов компании <span>RIZOFT</span></Title>
                    <Text>Выберите <span>свой</span> бонус!</Text>
                </BonuseContent>
            </Container>
        </ChoiceBonuseWrapper>
    );
};

