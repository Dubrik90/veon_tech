import React from 'react';
import {
    Li,
    ProgressContentTop,
    ProgressWrapper,
    SubTitle,
    Title,
    Ul,
    Text,
    ProgressContentBottom,
    ImgBlock,
    ContentText
} from './style';
import {Container} from "../../../common/style/Container";

export const Progress = () => {
    return (
        <ProgressWrapper>
            <Container>
                <Title className={'animate'}>
                    Создаем и развиваем сайты, магазины, приложения, порталы, CRM.
                </Title>
                <ProgressContentTop>
                    <Ul>
                        <Li className={'animate'}>
                            <SubTitle>№1</SubTitle>
                            <Text> первые в Рейтинге Байнета <br/> +90 различных наград</Text>
                        </Li>
                        <Li className={'animate'}>
                            <SubTitle>20</SubTitle>
                            <Text> лет на рынке с 2003</Text>
                        </Li>
                        <Li className={'animate'}>
                            <SubTitle>100</SubTitle>
                            <Text>специалистов в штате</Text>
                        </Li>
                        <Li className={'animate'}>
                            <SubTitle>500</SubTitle>
                            <Text>завершенных проектов</Text>
                        </Li>
                    </Ul>
                </ProgressContentTop>
                <ProgressContentBottom>
                    <ImgBlock>
                        <svg width="98" height="319" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M80.993 19.518V6.653h-74.2v306.075h74.2v-12.865h-44.43V19.518h44.43zM97.748.519v25.132h-44.28V293.73h44.28v25.132H.659V.519h97.089z"
                                fill="#000"/>
                        </svg>
                        {/*<img src={BrasRight} alt=""/>*/}
                    </ImgBlock>
                    <ContentText className={'animate'}>
                        <span className="violet-text">Наша миссия </span>обеспечивать встречу лучших технологий, опыта и
                        бизнеса
                    </ContentText>
                    <ImgBlock>
                        <svg width="98" height="319" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.007 299.482v12.865h74.2V6.272h-74.2v12.865h44.43v280.345h-44.43zM.252 318.481v-25.132h44.28V25.27H.253V.138h97.089v318.343H.252z"
                                fill="#000"/>
                        </svg>
                        {/*<img src={BrasLeft} alt=""/>*/}
                    </ImgBlock>
                </ProgressContentBottom>
            </Container>
        </ProgressWrapper>

    );
};

