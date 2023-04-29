import React from 'react';
import {CentavrasAboutWrapper} from './style';
import {
    BlockAbout,
    ColumnBlock,
    CentavrasAboutContent,
    Text,
    Title
} from "./style";
import {Container} from "../../../common/style/Container";
import CentavrasAboutImg from '../assets/centavrasAboutImg.webp'

export const CentavrasAbout = () => {
    return (
        <CentavrasAboutWrapper src={CentavrasAboutImg}>
            <Container>
                <CentavrasAboutContent>
                    <BlockAbout>
                        <Title>Centavras Kft</Title>
                    </BlockAbout>
                    <ColumnBlock>
                        <Text>
                            Основная область деятельность закупка и поставка товаров по запросам наших партнеров.
                            Основные рынки: ЕС, Таможенный союз, страны СНГ, страны Азии.
                        </Text>
                    </ColumnBlock>
                </CentavrasAboutContent>
            </Container>
        </CentavrasAboutWrapper>
    );
};

