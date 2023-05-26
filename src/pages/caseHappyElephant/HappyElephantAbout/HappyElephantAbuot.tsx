import React from 'react';
import {
    BlockAbout,
    ElephantAboutContent,
    HappyElephantAboutWrapper,
    Title,
    Text,
    ColumnBlock,
    BlockMobile,
    TitleMob,
    TextMob,
    ColumnBlockMob,
    Img
} from './style';
import ElephfImage from '../assets/elephantAbutImage.webp'
import {Container} from "../../../common/style/Container";


export const HappyElephantAbout = () => {
    return (
        <HappyElephantAboutWrapper src={ElephfImage}>
            <Container>
                <BlockMobile>
                    <TitleMob>Company Name: Happy Elephant LLC</TitleMob>
                    <TextMob>Specializes in gift search services (entertainment events)</TextMob>
                    <ColumnBlockMob>
                        <TextMob>
                            Happy Elephant LLC approached us for the development of a booking calendar as part of their website. Through live communication with our specialists, the client clearly defined the calendar's structure. The implementation of a payment system for the website was also included in the project requirements.
                        </TextMob>
                        <TextMob>
                            During the early stages of collaboration, we created a step-by-step estimate and set intermediate deadlines for the project's development.                        </TextMob>
                    </ColumnBlockMob>
                </BlockMobile>
            </Container>
            <Img src={ElephfImage}/>
            <Container>
                <ElephantAboutContent>
                    <BlockAbout>
                        <Title>Company Name: Happy Elephant LLC</Title>
                        <Text>Specializes in gift search services (entertainment events)</Text>
                    </BlockAbout>
                    <ColumnBlock>
                        <Text>
                            Компания ООО "Счастливый слон" обратилась к нам за разработкой календаря бронирования в
                            рамках сайта. В ходе живого общения с нашими специалистами, заказчик четко определился со
                            структурой календаря, также в ТЗ была включена реализация платёжной системы сайта.
                        </Text>
                        <Text>
                            На ранних этапах сотрудничества, мы составили поэтапную смету, промежуточные сроки
                            реалиазции, в рамках которых, вели дальнейшую разработку проекта.
                        </Text>
                    </ColumnBlock>
                </ElephantAboutContent>
            </Container>
        </HappyElephantAboutWrapper>
    );
};

