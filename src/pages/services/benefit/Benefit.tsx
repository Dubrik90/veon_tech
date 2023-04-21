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
                    <Title>ЗАКАЗАВ РАЗРАБОТКУ И СОЗДАНИЕ <br/> САЙТА ПОД КЛЮЧ</Title>
                    <SubTitle>Вы получите</SubTitle>
                </BenefitContentTop>
                <BenefitContentBottom>
                    <BenefitCard>
                        <CardTitle>ГАРАНТИИ И УВЕРЕННОСТЬ</CardTitle>
                        <СircleWrap>
                            <Сircle>
                                <span>01</span>
                            </Сircle>
                        </СircleWrap>
                        <CardText>Все работы выполняются согласно условиям заключённого договора. Оплата производится по безналичному расчёту.</CardText>
                    </BenefitCard>
                    <BenefitCard>
                        <CardTitle>КОНТРОЛЬ И ОТЧЁТНОСТЬ</CardTitle>
                        <СircleWrap>
                            <Сircle>
                                <span>02</span>
                            </Сircle>
                        </СircleWrap>
                        <CardText>На все работы определяется время выполнения, согласуется техническое задание и сопроводительная документация.</CardText>
                    </BenefitCard>
                    <BenefitCard>
                        <CardTitle>ОБУЧЕНИЕ И ПОДДЕРЖКА</CardTitle>
                        <СircleWrap>
                            <Сircle>
                                <span>03</span>
                            </Сircle>
                        </СircleWrap>
                        <CardText>После сдачи проекта мы обучаем вас или вашего ответственного сотрудника с последующей консультационной поддержкой.</CardText>
                    </BenefitCard>
                </BenefitContentBottom>
            </Container>
        </BenefitWrapper>
    );
};

