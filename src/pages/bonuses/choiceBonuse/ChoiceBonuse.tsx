import React, { useRef, useEffect } from 'react';
import {BonuseContent, ChoiceBonuseWrapper, SubTitle, Title, Text} from "./style";
import {Container} from "../../../common/style/Container";

import { gsap, SteppedEase } from 'gsap';
import {TypingText} from "../../../common/animate/TypingText";



export const ChoiceBonuse = () => {

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

