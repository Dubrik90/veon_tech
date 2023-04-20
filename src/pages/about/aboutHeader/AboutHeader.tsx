import React from 'react';
import {
    Button,
    HeaderBlock,
    HeaderContent,
    HeaderImage, Img,
    ServiceHeaderWrapper,
    Text,
    Title
} from "./style";
import {Container} from "../../../common/style/Container";
import ImgWebDev from "../../services/assets/wedDevImages/logo.png";

export const AboutHeader = () => {
    return (
        <ServiceHeaderWrapper>
            <Container>
                <HeaderBlock>
                    <HeaderContent>
                        <Title className={'animate'}> <span>VEON-TECH</span> - лидер белорусского рынка
                            разработки и тестирования проектов
                            по методологии Scrum</Title>
                        <Button>Скачать презентацию</Button>
                        {/*<Text>{text}</Text>*/}
                    </HeaderContent>
                    <HeaderImage className={'animate'}>
                        <Img src={ImgWebDev} alt='image'/>
                    </HeaderImage>
                </HeaderBlock>
            </Container>
        </ServiceHeaderWrapper>
    );
};

