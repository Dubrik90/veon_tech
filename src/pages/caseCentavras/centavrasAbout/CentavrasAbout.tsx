import React from 'react';
import {CentavrasAboutWrapper, CentavrasAboutWrapperMob, TextMob, TitleMob} from './style';
import {
    BlockAbout,
    ColumnBlock,
    CentavrasAboutContent,
    Text,
    Title
} from "./style";
import {Container} from "../../../common/style/Container";
import CentavrasAboutImg from '../assets/centavrasAboutImg.webp'
import { Img } from '../centavrasDesc/style';

export const CentavrasAbout = () => {
    return (
        <>
            <CentavrasAboutWrapper src={CentavrasAboutImg}>
                <Container>
                    <CentavrasAboutContent>
                        <BlockAbout>
                            <Title>Centavras Kft</Title>
                        </BlockAbout>
                        <ColumnBlock>
                            <Text>
                                Primary area of activity: Procurement and supply of goods based on our partners' requests. Main markets: EU, Customs Union, CIS countries, Asian countries.
                            </Text>
                        </ColumnBlock>
                    </CentavrasAboutContent>
                </Container>
            </CentavrasAboutWrapper>
            <CentavrasAboutWrapperMob>
                <Container>
                    <TitleMob>Centavras Kft</TitleMob>
                    <TextMob>
                        Primary area of activity: Procurement and supply of goods based on our partners' requests. Main markets: EU, Customs Union, CIS countries, Asian countries.
                    </TextMob>
                </Container>
                <Img src={CentavrasAboutImg}/>
            </CentavrasAboutWrapperMob>
        </>
    );
};

