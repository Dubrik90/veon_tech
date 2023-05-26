import React from 'react';
import {
    BlockColumn,
    Button,
    Li,
    MethodologyBlock,
    MethodologyContent,
    MethodologyWrapper,
    Title,
    TitleMethodology,
    Ul
} from './style';
import {Container} from "../../../common/style/Container";
import Star from "./assets/star.svg";
import {useAppDispatch} from "../../../common/hook";
import {setScramModalOpenAC, setWaterfallModalOpenAC} from "../../../app/app-reduser";
import {useScrollBlock} from "../../../common/hook/use-scroll-block";


export const Methodology = () => {
    const dispatch = useAppDispatch()
    const [blockScroll, allowScroll] = useScrollBlock();

    const onClickWaterfallModalHandler = () => {
        blockScroll()
        dispatch(setWaterfallModalOpenAC({isOpen: true}))
    }
    const onClickScrumModalHandler = () => {
        blockScroll()
        dispatch(setScramModalOpenAC({isOpen: true}))
    }
    return (
        <MethodologyWrapper>
            <Container>
                <MethodologyContent>
                    <Title className='animate'>We work according to the methodology that suits you</Title>
                    <MethodologyBlock>
                        <BlockColumn>
                            <TitleMethodology>WATERFALL</TitleMethodology>
                            <Ul>
                                <Li><img loading= "lazy" src={Star} alt=""/> <span>full specification</span> </Li>
                                <Li><img loading= "lazy" src={Star} alt=""/> <span>launch within 3 months</span> </Li>
                                <Li><img loading= "lazy" src={Star} alt=""/> <span>fixed price</span> </Li>
                            </Ul>
                            <Button onClick={onClickWaterfallModalHandler}>LEARN MORE</Button>
                        </BlockColumn>
                        <BlockColumn>
                            <TitleMethodology>Scrum</TitleMethodology>
                            <Ul>
                                <Li><img src={Star} alt=""/> <span>roadmap</span> </Li>
                                <Li><img src={Star} alt=""/> <span>monthly specifications and launches</span> </Li>
                                <Li><img src={Star} alt=""/> <span>flexible price +/-</span> </Li>
                            </Ul>
                            <Button onClick={onClickScrumModalHandler}>LEARN MORE</Button>
                        </BlockColumn>
                    </MethodologyBlock>
                </MethodologyContent>
            </Container>
        </MethodologyWrapper>
    );
};

