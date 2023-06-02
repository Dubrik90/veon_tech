import React, {useEffect} from 'react';
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
import {TitleHead} from "../services/benefit/style";
import {animateText} from "../../common/animate/animateText";

export type SaleCardsType = {
    id: string
    img: string,
    title: string,
    subtitle: string,
    text: string,
    subText: string
}
export const Bonuses = () => {

    useEffect(() => {
        document.title = 'Bonuses — VEON-TECH'
        animateText()
    }, [])

    const saleCards: SaleCardsType[] = [
        {
            id: '1',
            img: Clock,
            title: '100 USD discount',
            subtitle: 'for speed',
            text: 'When signing the contract within 3 days after receiving the commercial offer',
            subText: '*For orders over 1500 BYN'
        },
        {
            id: '2',
            img: Palit,
            title: 'Free',
            subtitle: 'logo',
            text: 'When signing the contract within 3 days after receiving the commercial offer',
            subText: ''
        },
        {
            id: '3',
            img: Hosting,
            title: 'Hostfly.by',
            subtitle: '14 days free',
            text: '*On any hosting tariff',
            subText: ''
        },
        {
            id: '4',
            img: Sale,
            title: '5% discount',
            subtitle: 'on all services',
            text: '*For one-time payment of the entire service amount. For new customers. License fees are excluded.',
            subText: ''
        },
    ]

    return (
        <BonusesWrapper>
            {/*<JobHeader title={'Бонусы'}*/}
            {/*           breadcrumbsTitle={'БОНУСЫ'}*/}
            {/*/>*/}
            <Container>
                <TitleHead className='animate'>Bonuses</TitleHead>
            </Container>
            <ChoiceBonuse/>
            <Container>
                <BonusesCardsBlock>
                    {saleCards.map((el, index) => (
                            <BonusesCard card={el} key={index}/>
                        ))}
                </BonusesCardsBlock>
                <SliderBonuse saleCards={saleCards}/>
            </Container>
            <BonusesContent>
                <Container>
                    <TextBlock>
                        <Text className='animate'>For the VEON-TECH team, clients come first. We enjoy taking care of our clients, so we recommend taking a comprehensive approach to development, utilizing the maximum number of existing tools while considering the brand's specific requirements. Our team has prepared unique bonuses for you across all categories of internet development tools for even more successful promotion of your company!
                        </Text>
                        <Text className='animate'>Choose the bonus that suits your specific goals and take advantage of it to enhance your performance without unnecessary expenses.
                        </Text>
                    </TextBlock>
                </Container>
            </BonusesContent>
        </BonusesWrapper>
    );
};

