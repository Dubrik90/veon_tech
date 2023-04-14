import React, { useRef, useEffect } from 'react';
import {BonuseContent, ChoiceBonuseWrapper, SubTitle, Title, Text} from "./style";
import {Container} from "../../../common/style/Container";

import { gsap, SteppedEase } from 'gsap';



export const ChoiceBonuse = () => {
    const tl = gsap.timeline()
  
    const textAnimate = useRef(null)

    useEffect(() => {

        tl.fromTo(".type-me", 2, {
            width: "0",
        }, {
            width: "100%",
            delay: 0.5,
            ease: SteppedEase.config(83),
        }, 0);

        tl.fromTo(".type-me2", 2, {
            width: "0",
        }, {
            width: "100%",
            delay: 0,
            ease: SteppedEase.config(83)
        }, 2);

    }, [])


    return (
        <ChoiceBonuseWrapper>
            <Container>
                <BonuseContent>
                    <Title ref={textAnimate} className={'text-description type-me'}>Бонусы и скидки на разработку. Программа лояльности для клиентов компании VEON-TECH</Title>
                    <SubTitle ref={textAnimate} className={'type-me2'}>При работе с нами вы получите дополнительные опции для развития Вашего бизнеса. Улучшаем ваш бизнес вместе!</SubTitle>
                    <Text >Выберите <span>свой</span> бонус!</Text>
                </BonuseContent>
            </Container>
        </ChoiceBonuseWrapper>
    );
};

