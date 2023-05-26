import React, { useRef, useEffect } from 'react';
import {BonuseContent, ChoiceBonuseWrapper, SubTitle, Title, Text} from "./style";
import {Container} from "../../../common/style/Container";

import { gsap, SteppedEase } from 'gsap';
import {TypingText} from "../../../common/animate/TypingText";



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
                    <SubTitle>When working with us, you will receive additional options for the development of your business. We improve your business together!</SubTitle>
                    <Title><span>VEON-TECH </span>Customer Loyalty Program </Title>
                    <Text>Choose <span>your</span> bonus!</Text>
                </BonuseContent>
            </Container>
        </ChoiceBonuseWrapper>
    );
};

