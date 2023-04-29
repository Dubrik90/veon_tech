import React from 'react';
import {Container} from "../../../common/style/Container";
import {OpticsDeskWrapper, ImageBlock, Img, Text, OpticsDeskContent, Ul, Block} from "./style";
import MobileImg from "../../caseHappyElephant/assets/elephantMobile.webp";

export const OpticsDesk = () => {
    return (
        <OpticsDeskWrapper>
            <Container>
                <OpticsDeskContent>
                    <Text>Процесс разработки: Мы перенесли карты с сайта, <br/>Перенесли новости со старого шаблона на
                        новый;<br/>Адаптировали сайт под все платформы.</Text>
                    <ImageBlock>
                        <Img src={MobileImg} alt={'mobile image'}/>
                    </ImageBlock>
                    <Block>
                        <Text>Составили инструкцию для «пользователя офисных программ», как проводить наполнение сайта
                            новостями и другими материалами.
                        </Text>
                        <Ul>
                            <li>Инструкция содержит:</li>
                            <li>• Добавление новостей;</li>
                            <li>• Изменение состава меню;</li>
                            <li>• Добавление материалов сайта в виде файлов (презентаций) и ссылок на них;</li>
                            <li>• Добавление ссылок на сторонние ресурсы в виде баннеров.</li>
                        </Ul>
                    </Block>
                </OpticsDeskContent>
            </Container>
        </OpticsDeskWrapper>
    );
};

