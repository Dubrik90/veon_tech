import React from 'react';
import {HappyElephantResultWrapper, ResultContent, Text} from './style';
import ResultImg from '../assets/elepfantResult.webp'
import {Container} from '../../../common/style/Container';

export const HappyElephantResult = () => {
    return (
        <HappyElephantResultWrapper src={ResultImg}>
            <Container>
                <ResultContent>
                    <Text>
                        Оплата в свою очередь осуществляется через платежные модули, подключаемые к сайту в типовом
                        механизме. (Т.е. механизм подключения платежных модулей не меняется.) При переходе к оплате
                        ставятся в резерв Бонусы.
                    </Text>
                    <Text>
                        Выбирая нас клиент получил следующее: - Календарь бронирования с широким функционалом - Кабинет
                        сделки с интуитивно-понятным пользователю интерфейсом - Реализована система платежей - Также
                        наша команда разработала различные сценарии поведения Пользователя в кабинете сделки.
                    </Text>
                </ResultContent>
            </Container>
        </HappyElephantResultWrapper>
    )
};

