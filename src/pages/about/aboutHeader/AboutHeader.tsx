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
import FileImg from "../assets/file-folder.png";

export const AboutHeader = () => {
    return (
        <ServiceHeaderWrapper>
            <Container>
                <HeaderBlock>
                    <HeaderContent>
                        <Title className={'animate'}> <span>VEON-TECH</span> — лидер белорусского рынка</Title>
                        {/*<Button>Скачать презентацию</Button>*/}
                        {/*<Text>{text}</Text>*/}
                    </HeaderContent>
                    <HeaderImage className={'animate'}>
                        <Img src={ImgWebDev} alt='image'/>
                        <a href="../upload/ПрезентацияNS_2023.pdf" className="about-us__btn" target="_blank">
                            <span className="about-us__btn-label">Скачать презентацию PDF
                                <img className="about-us__btn-icon" src={FileImg}
                                     loading="lazy"/>
                            </span>
                        </a>
                    </HeaderImage>
                </HeaderBlock>
            </Container>
        </ServiceHeaderWrapper>
    );
};

