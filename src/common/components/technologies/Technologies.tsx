import React, {MouseEvent} from 'react';
import {techData} from "./data";
import {TechnologiesItem} from "./technologiesItem/TechnologiesItem";
import {ButtomTab, Tabs, TechnologiesItemBlock, TechnologiesTitle, TechnologiesWrapper} from './style';
import {Container} from '../../style/Container';

type TechType = 'frontend' | 'developmentSoftware' | 'dataBase' | 'CMS'


export const Technologies = () => {

    const [tech, setTech] = React.useState<TechType>('frontend')
    const [active, setActive] = React.useState('frontend')
    const data = techData[tech]

    const activeCorrectFilter = (event: MouseEvent<HTMLButtonElement>) => {

        setActive(event.currentTarget.id);
        setTech(event.currentTarget.id as TechType)
    };

    return (
        <TechnologiesWrapper>
            <Container>
                <TechnologiesTitle>Технологии, с которыми мы работаем</TechnologiesTitle>
                <Tabs>
                    <ButtomTab className={active === 'frontend' ? 'active' : ''} id={'frontend'}
                               onClick={activeCorrectFilter}>Front-end разработка</ButtomTab>
                    <ButtomTab className={active === 'developmentSoftware' ? 'active' : ''} id={'developmentSoftware'}
                               onClick={activeCorrectFilter}>Разработка По</ButtomTab>
                    <ButtomTab className={active === 'dataBase' ? 'active' : ''} id={'dataBase'}
                               onClick={activeCorrectFilter}>База данных</ButtomTab>
                    <ButtomTab className={active === 'CMS' ? 'active' : ''} id={'CMS'}
                               onClick={activeCorrectFilter}>CMS</ButtomTab>
                </Tabs>
                <TechnologiesItemBlock>
                    {data.map((t, index) => <TechnologiesItem tech={t} key={index}/>)}
                </TechnologiesItemBlock>
            </Container>
        </TechnologiesWrapper>
    );
};

