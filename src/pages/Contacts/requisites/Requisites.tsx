import React from 'react';
import {DocBlock, Img, ImgBlock, P, RequisitesBlock, Button, RequisitesContent, RequisitesWrapper, Title} from './style';
import {Container} from "../../../common/style/Container";
import PdfIcon from './assets/pdfIcon.png'


export const Requisites = () => {
    return (
        <RequisitesWrapper>
            <Container>
                <RequisitesBlock>
                    <RequisitesContent>
                        <Title>Реквизиты</Title>
                        <P>Общество с ограниченной ответственностью «Веон-консалт»</P>
                        <P>Адрес: РБ, 220053, Г. МИНСК, УЛ. ОРЛОВСКАЯ, Д. 40А, ОФИС 40-1</P>
                        <P>УНП: 193082231</P>
                        <P>Банковские реквизиты:</P>
                        <P>BY42ALFA30122354480050270000 в BYN</P>
                        <P>BY27ALFA30122354480060270000 в USD</P>
                        <P>BY57ALFA30122354480040270000 в EUR</P>
                        <P>BY05ALFA30122354480010270000 в RUB</P>
                        <P>в ЗАО 'Альфа-Банк'</P>
                        <P>БИК: ALFABY2X</P>
                        <P>clients@veon-tech.ru</P>
                    </RequisitesContent>
                    <DocBlock>
                        <ImgBlock>
                            <Img src={PdfIcon} alt={'pdf file'}/>
                        </ImgBlock>
                        <Button>Скачать</Button>
                    </DocBlock>
                </RequisitesBlock>
            </Container>
        </RequisitesWrapper>
    );
};
