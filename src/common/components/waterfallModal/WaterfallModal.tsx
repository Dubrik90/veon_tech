import React from 'react';
import {GridContainer, HeaderBlock, Text, Title, WaterfallModalWrapper} from "./style";
import {Container} from "../../style/Container";
import {useAppDispatch, useAppSelector} from "../../hook";
import {useScrollBlock} from "../../hook/use-scroll-block";
import {setWaterfallModalOpenAC} from "../../../app/app-reduser";

export const WaterfallModal = () => {

    const isWaterfallModal = useAppSelector(state => state.app.isWaterfallModalOpen)
    const dispatch = useAppDispatch()
    const [blockScroll, allowScroll] = useScrollBlock();
    const onClickCloseModal = () => {
        allowScroll()
        dispatch(setWaterfallModalOpenAC({isOpen: false}))
    }

    return (
        <WaterfallModalWrapper openModal={isWaterfallModal}>
            <Container>
                <GridContainer>
                    <HeaderBlock>
                        <Title>WATERFALL</Title>
                        <Text>Традиционный способ ведения проектов. Он подойдет вам, если есть конкретный бюджет и сроки
                            на реализацию проекта. Мы с вами сразу планируем этапы, распределяем работы, фиксируем сроки
                            и результаты.</Text>
                    </HeaderBlock>
                    <span onClick={onClickCloseModal} className="cross">&#10005;</span>
                    <div className="parent">
                        <div className="div1"></div>
                        <div className="div2">Старт</div>
                        <div className="div3">Анализ</div>
                        <div className="div4">Дизайн</div>
                        <div className="div5">Разработка</div>
                        <div className="div6">Тестирование</div>
                        <div className="div7">Запуск</div>
                        <div className="div8"></div>
                        <div className="div9"></div>
                        <div className="div10">Входящие требования</div>
                        <div className="div11">Разработка ТЗ</div>
                        <div className="div12">Прототипирование и визуальный дизайн</div>
                        <div className="div13">Верстка и бэкенд</div>
                        <div className="div14">Верстка и бэкенд</div>
                        <div className="div15"></div>
                    </div>
                </GridContainer>
            </Container>
        </WaterfallModalWrapper>
    );
};

