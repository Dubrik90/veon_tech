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
                            This method is more flexible and focused on delivering fast results. We roughly define the project development strategy with you, launch it quickly with minimal viable features, and then improve it through iterations and user feedback on the existing features.
                        </Text>
                    </HeaderBlock>
                    <span onClick={onClickCloseModal} className="cross">&#10005;</span>
                    <div className="scrum-parent">
                        <div className="div1">Sprint 1 </div>
                        <div className="div2">Sprint 2 </div>
                        <div className="div3">Sprint 3 </div>
                        <div className="div4">Planning</div>
                        <div className="div5">Estimation</div>
                        <div className="div6">Execution</div>
                        <div className="div7">Testing <span>Launch</span></div>
                        <div className="div8">Planning</div>
                        <div className="div9">Estimation</div>
                        <div className="div10">Execution</div>
                        <div className="div11">Testing <span>Launch</span></div>
                        <div className="div12">Planning</div>
                        <div className="div13">Estimation</div>
                        <div className="div14">Execution</div>
                        <div className="div15">Testing <span>Launch</span></div>
                        <div className="div16"></div>
                        <div className="div17"></div>
                        <div className="div18"></div>
                    </div>
                </GridContainer>
            </Container>
        </WaterfallModalWrapper>
    );
};

