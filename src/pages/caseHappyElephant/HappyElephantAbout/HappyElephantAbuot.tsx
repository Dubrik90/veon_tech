import React from 'react';
import {BlockAbout, ElephantAboutContent, HappyElephantAboutWrapper, Title, Text, ColumnBlock} from './style';
import ElephfImage from '../assets/elephantAbutImage.webp'
import {Container} from "../../../common/style/Container";


export const HappyElephantAbout = () => {
    return (
        <HappyElephantAboutWrapper src={ElephfImage}>
            <Container>
                <ElephantAboutContent>
                    <BlockAbout>
                        <Title>ООО “Счастливый слон”</Title>
                        <Text>Cпециализируется на сервисе поиска подарков (развлекательных мероприятий)</Text>
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

