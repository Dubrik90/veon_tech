import React from 'react';
import {ContentBlock, PartyIntelAbutWrapper, Text, TextBlock, Title} from "./style";
import {Container} from "../../../common/style/Container";

export const PartyIntelAbout = () => {
    return (
        <PartyIntelAbutWrapper>
            <Container>
                <ContentBlock>
                    <TextBlock>
                        <Title>LLC "PartyIntel" (USA, LA) </Title>
                        <Text>специализируется на сервисах поиска мероприятий/услуг</Text>
                    </TextBlock>
                    <TextBlock>
                        <Title>Основная цель</Title>
                        <Text>Реализация админки, реализация мессенджера в рамках контактов между Исполнителем и Заказчиком, раздел Leads - для платных объявлений, раздел объявлений Заказчика</Text>
                    </TextBlock>
                </ContentBlock>
            </Container>
        </PartyIntelAbutWrapper>
    );
};

