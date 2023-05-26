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
                        <Text>The traditional project management approach. It is suitable if you have a specific budget and deadlines for project implementation. We plan the stages, distribute the work, set deadlines, and document the results from the start.
                        </Text>
                    </HeaderBlock>
                    <span onClick={onClickCloseModal} className="cross">&#10005;</span>
                    <div className="parent">
                        <div className="div1"></div>
                        <div className="div2">Start</div>
                        <div className="div3">Analysis</div>
                        <div className="div4">Design</div>
                        <div className="div5">Development</div>
                        <div className="div6">Testing</div>
                        <div className="div7">Launch</div>
                        <div className="div8"></div>
                        <div className="div9"></div>
                        <div className="div10">Incoming requirements</div>
                        <div className="div11">Requirements development</div>
                        <div className="div12">Prototyping and visual design</div>
                        <div className="div13">Front-end and <br/> back-end development</div>
                        <div className="div14">Front-end and <br/> back-end development</div>
                        <div className="div15"></div>
                    </div>
                </GridContainer>
            </Container>
        </WaterfallModalWrapper>
    );
};

