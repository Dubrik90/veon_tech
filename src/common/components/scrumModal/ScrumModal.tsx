import React from 'react';
import {GridContainer, HeaderBlock, Text, Title, WaterfallModalWrapper} from "./style";
import {Container} from "../../style/Container";
import {useAppDispatch, useAppSelector} from "../../hook";
import {useScrollBlock} from "../../hook/use-scroll-block";
import {setScramModalOpenAC} from "../../../app/app-reduser";

export const ScramModal = () => {

    const isScrumModal = useAppSelector(state => state.app.isScramModalOpen)
    const dispatch = useAppDispatch()
    const [blockScroll, allowScroll] = useScrollBlock();
    const onClickCloseModal = () => {
        allowScroll()
        dispatch(setScramModalOpenAC({isOpen: false}))
    }

    return (
        <WaterfallModalWrapper openModal={isScrumModal}>
            <Container>
                <GridContainer>
                    <HeaderBlock>
                        <Title>SCRUM</Title>
                        <Text>
                            Данный способ более гибкий и ориентирован на достижение результата. С вами определяем
                            стратегию развития проекта, в короткие сроки запускаем его с минимальными достаточными
                            функциями, а затем совершенствуем доработками согласно пользовательскому отклику по уже
                            действующим функциям.
                        </Text>
                    </HeaderBlock>
                    <span onClick={onClickCloseModal} className="cross">&#10005;</span>
                    <div className="scrum-parent">
                        <div className="div1">Спринт 1</div>
                        <div className="div2">Спринт 2</div>
                        <div className="div3">Спринт 3</div>
                        <div className="div4">Планирование</div>
                        <div className="div5">Оценка</div>
                        <div className="div6">Исполнение</div>
                        <div className="div7">Тестирование <span>Запуск</span></div>
                        <div className="div8">Планирование</div>
                        <div className="div9">Оценка</div>
                        <div className="div10">Исполнение</div>
                        <div className="div11">Тестирование <span>Запуск</span></div>
                        <div className="div12">Планирование</div>
                        <div className="div13">Оценка</div>
                        <div className="div14">Исполнение</div>
                        <div className="div15">Тестирование <span>Запуск</span></div>
                        <div className="div16"></div>
                        <div className="div17"></div>
                        <div className="div18"></div>
                    </div>
                </GridContainer>
            </Container>
        </WaterfallModalWrapper>
    );
};

