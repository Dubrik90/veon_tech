import React from 'react';
import {
    BenefitCard,
    BenefitContentBottom,
    BenefitContentTop,
    BenefitWrapper,
    SubTitle,
    Title,
    CardTitle,
    CardText, СircleWrap, Сircle,

} from './style';
import {Container} from "../../../common/style/Container";

export const Benefit = () => {
    return (
        <BenefitWrapper>
            <Container>
                <BenefitContentTop>
                    <Title className='animate'>Ordering website development <br/> and creation from us</Title>
                    <SubTitle>you will receive</SubTitle>
                </BenefitContentTop>
                <BenefitContentBottom>
                    <BenefitCard className='animate'>
                        <CardTitle>Guarantees and confidence</CardTitle>
                        <СircleWrap>
                            <Сircle>
                                <span>01</span>
                            </Сircle>
                        </СircleWrap>
                        <CardText>All work is done according to the terms of the contract, and payment is made via non-cash settlement.</CardText>
                    </BenefitCard>
                    <BenefitCard className='animate'>
                        <CardTitle>Control and accountability</CardTitle>
                        <СircleWrap>
                            <Сircle>
                                <span>02</span>
                            </Сircle>
                        </СircleWrap>
                        <CardText>Timeframes for all work are determined, and technical specifications and accompanying documentation are agreed upon.</CardText>
                    </BenefitCard >
                    <BenefitCard className='animate'>
                        <CardTitle>Training and <br/> support</CardTitle>
                        <СircleWrap>
                            <Сircle>
                                <span>03</span>
                            </Сircle>
                        </СircleWrap>
                        <CardText>After project delivery, we provide training for you or your responsible employee, along with subsequent consultation support.</CardText>
                    </BenefitCard>
                </BenefitContentBottom>
            </Container>
        </BenefitWrapper>
    );
};

