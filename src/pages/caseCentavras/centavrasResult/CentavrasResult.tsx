import React from 'react';
import {CentavrasResultWrapper, Text, Content} from './style';
import CentavrasResultImg from '../assets/CentavrasResult.webp'
import {Container} from '../../../common/style/Container';
import {HappyElephantResultWrapperMob, TextMob} from "../../caseHappyElephant/happyElephantResult/style";
import {Img} from "../../caseHappyElephant/HappyElephantAbout/style";

export const CentavrasResult = () => {
    return (
        <>
            <CentavrasResultWrapper src={CentavrasResultImg}>
                <Container>
                    <Content>
                        <Text>Мы разделили нашу работу на несколько этапов</Text>
                        <Text>Этап №1: Регистрация. <br/>При регистрации на сайте пользователь указывает ФИО, email,
                            свою
                            страну и категории интересующего его товара. После пользователь ждет одобрение
                            администратора на
                            просмотр выбранной категории товаров
                        </Text>
                        <Text>Этап №2: Панель Администратора. <br/> При одобрении аккаунта, Администратор указывает %
                            надбавки к
                            стоимости товара в зависимости от страны клиента. После одобрение клиенту приходит
                            оповещающее
                            регистрацию письмо на email + ссылка на вход в его кабинет. В панели администратора
                            отображаются
                            заказы клиента в excel файлах.
                        </Text>
                    </Content>
                </Container>
            </CentavrasResultWrapper>

            <HappyElephantResultWrapperMob>
                <Container>
                    <TextMob>
                        Мы разделили нашу работу на несколько этапов
                    </TextMob>
                    <TextMob>
                        Этап №1: Регистрация. <br/>При регистрации на сайте пользователь указывает ФИО, email,
                        свою
                        страну и категории интересующего его товара. После пользователь ждет одобрение
                        администратора на
                        просмотр выбранной категории товаров
                    </TextMob>
                    <TextMob>
                        Этап №2: Панель Администратора. <br/> При одобрении аккаунта, Администратор указывает %
                        надбавки к
                        стоимости товара в зависимости от страны клиента. После одобрение клиенту приходит
                        оповещающее
                        регистрацию письмо на email + ссылка на вход в его кабинет. В панели администратора
                        отображаются
                        заказы клиента в excel файлах. Когда клиент оформляет заказ, все данные о заказе
                        автоматически
                        заносятся в Базу данных и администратор может это видеть.
                    </TextMob>
                </Container>
                <Img src={CentavrasResultImg}/>
            </HappyElephantResultWrapperMob>
        </>
    );
};

