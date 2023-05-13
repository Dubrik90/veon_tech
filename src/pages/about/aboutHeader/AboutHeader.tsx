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
import {DownloadButton} from "../../../common/components/downloadButton/DownloadButton";

export const AboutHeader = () => {
    return (
        <ServiceHeaderWrapper>
            <Container>
                <HeaderBlock>
                    <HeaderContent>
                        <Title className={'animate'}> <span>VEON-TECH</span> — надежность и опыт в каждом
                            проекте</Title>
                        {/*<Button>Скачать презентацию</Button>*/}
                        {/*<Text>{text}</Text>*/}
                    </HeaderContent>
                    <HeaderImage className={'animate'}>
                        <Img src={ImgWebDev} alt='image'/>
                        <DownloadButton fileName={'presentation.pdf'} className="about-us__btn" url="/files/presentation.pdf">
                            <span className="about-us__btn-label">Скачать презентацию PDF
                                <img className="about-us__btn-icon" src={FileImg}
                                     loading="lazy"/>
                            </span>
                        </DownloadButton>
                    </HeaderImage>
                </HeaderBlock>
            </Container>
        </ServiceHeaderWrapper>
    );
};

