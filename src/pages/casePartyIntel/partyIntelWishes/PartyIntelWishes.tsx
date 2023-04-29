import React from 'react';
import { PartyIntelWishesWrapper, Title, Text, WishesContent, Ul } from './style';
import {Container} from "../../../common/style/Container";

export const PartyIntelWishes = () => {
    return (
        <PartyIntelWishesWrapper>
            <Container>
                <WishesContent>
                    <Title>Пожелания заказчика</Title>
                    <Text>Реализация админки, реализация мессенджера в рамках контактов между Исполнителем и Заказчиком, раздел Leads - для платных объявлений, раздел объявлений Заказчика</Text>
                    <Title>Выбирая нас клиент получил следующее: </Title>
                    <Ul>
                        <li>- Оперативное обслуживание и разработка.</li>
                        <li>- Удобный мессенджер.</li>
                        <li>- Формат платных объявлений, рассчитанный на конечного пользователя.</li>
                        <li>- Свежий дизайн в соответствии со всеми требованиями заказчика.</li>
                        <li>- Скидки в соответствии с системой бонусов.</li>
                        <li>На текущий момент сервис работает быстро и функционально.</li>
                    </Ul>
                </WishesContent>
            </Container>
        </PartyIntelWishesWrapper>
    );
};

