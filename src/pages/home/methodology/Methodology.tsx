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
                    <Title className='animate'>Работаем по подходящему для вас процессу</Title>
                    <MethodologyBlock>
                        <BlockColumn>
                            <TitleMethodology>WATERFALL</TitleMethodology>
                            <Ul>
                                <Li><img src={Star} alt=""/> <span>полное ТЗ</span> </Li>
                                <Li><img src={Star} alt=""/> <span>запуск от 3 мес</span> </Li>
                                <Li><img src={Star} alt=""/> <span>фиксированная цена</span> </Li>
                            </Ul>
                            <Button onClick={onClickWaterfallModalHandler}>Подробнее</Button>
                        </BlockColumn>
                        <BlockColumn>
                            <TitleMethodology>Scrum</TitleMethodology>
                            <Ul>
                                <Li><img src={Star} alt=""/> <span>дорожная карта</span> </Li>
                                <Li><img src={Star} alt=""/> <span>ежемесячные тз и запуск</span> </Li>
                                <Li><img src={Star} alt=""/> <span>гибкая цена +/-</span> </Li>
                            </Ul>
                            <Button onClick={onClickScrumModalHandler}>Подробнее</Button>
                        </BlockColumn>
                    </MethodologyBlock>
                </MethodologyContent>
            </Container>
        </MethodologyWrapper>
    );
};

