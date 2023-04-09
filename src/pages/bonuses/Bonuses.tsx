import React from 'react';
import {BonusesCardsBlock, BonusesContent, BonusesWrapper, Text, TextBlock} from "./style";
import {JobHeader} from "../jobs/jobHeader";
import {ChoiceBonuse} from "./choiceBonuse";
import Clock from './assets/clock.svg';
import Palit from './assets/palit.svg';
import Hosting from './assets/hosting.svg';
import Sale from './assets/sale.svg';

import {BonusesCard} from "./bonusesCard";
import {Container} from "../../common/style/Container";
import {SliderBonuse} from "./sliderBonuse";

export type SaleCardsType = {
    id: string
    img: string,
    title: string,
    subtitle: string,
    text: string,
    subText: string
}
export const Bonuses = () => {

    const saleCards: SaleCardsType[] = [
        {
            id: '1',
            img: Clock,
            title: 'Скидка 100 BYN',
            subtitle: 'за скорость',
            text: 'При подписании договора в течение 3 дней после получения коммерческого предложения',
            subText: '*При заказе от 1500 BYN'
        },
        {
            id: '2',
            img: Palit,
            title: 'Бесплатный',
            subtitle: 'логотип',
            text: 'При подписании договора в течение 3 дней после получения коммерческого предложения',
            subText: ''
        },
        {
            id: '3',
            img: Hosting,
            title: 'Hostfly.by',
            subtitle: '14 дней бесплатно',
            text: '*На любой тариф хостинга',
            subText: ''
        },
        {
            id: '4',
            img: Sale,
            title: '5% скидка',
            subtitle: 'на все услуги',
            text: '*При единовременном платеже всей суммы услуги. Для новых клиентов. Исключение оплата лицензий.',
            subText: ''
        },
    ]

    return (
        <BonusesWrapper>
            <JobHeader title={'Бонусы'}
                       breadcrumbsTitle={'БОНУСЫ'}
            />
            <ChoiceBonuse/>
            <Container>
                <BonusesCardsBlock>
                    {
                        saleCards.map((el, index) => (
                            <BonusesCard card={el} key={index}/>
                        ))
                    }
                </BonusesCardsBlock>
                <SliderBonuse saleCards={saleCards}/>
            </Container>
            <BonusesContent>
                <Container>
                    <TextBlock>
                        <Text>Для команды VEON-TECH клиенты – на первом месте. Нам нравится заботиться о своих клиентах,
                            поэтому мы рекомендуем подходить к разработке комплексно, использовать максимальное
                            количество
                            существующих инструментов с учетом специфики бренда. Наша команда подготовила для вас
                            уникальные
                            бонусы по всем категориям инструментов интернет-разработки для еще более успешного
                            продвижения
                            вашей компании!
                        </Text>
                        <Text>Выбирайте подходящий под ваши конкретные цели бонус и воспользуйтесь им, повышайте ваши
                            результативные показатели без лишних затрат.
                        </Text>
                    </TextBlock>
                </Container>
            </BonusesContent>
        </BonusesWrapper>
    );
};

