import React, {MouseEvent, useEffect, useRef} from 'react';
import {techData} from "./data";
import {TechnologiesItem} from "./technologiesItem/TechnologiesItem";
import {ButtomTab, Tabs, TechnologiesItemBlock, TechnologiesTitle, TechnologiesWrapper} from './style';
import {Container} from '../../../common/style/Container';
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {SwiperTehnologies} from "../../../common/components/swiperTehnologies";
gsap.registerPlugin(ScrollTrigger)

type TechType = 'frontend' | 'developmentSoftware' | 'dataBase' | 'CMS'

export const Technologies = () => {

    const [tech, setTech] = React.useState<TechType>('frontend')
    const [active, setActive] = React.useState('frontend')
    const data = techData[tech]

    const activeCorrectFilter = (event: MouseEvent<HTMLButtonElement>) => {
        setActive(event.currentTarget.id);
        setTech(event.currentTarget.id as TechType)
    };

    const elAnimate = useRef(null)

    useEffect(() => {

        const el = elAnimate.current
        gsap.to(el,  {opacity: 1, scale: 1, visibility: 'visible', duration: 1,
            scrollTrigger: {
                trigger: el,
                start: 'top 90%',
            }})
    }, [])

    return (
        <TechnologiesWrapper>
            <Container>
                <TechnologiesTitle>Технологии, с которыми мы работаем</TechnologiesTitle>
                <Tabs >
                    <ButtomTab className={active === 'frontend' ? 'active' : ''} id={'frontend'}
                               onClick={activeCorrectFilter}>Front-end разработка</ButtomTab>
                    <ButtomTab className={active === 'developmentSoftware' ? 'active' : ''} id={'developmentSoftware'}
                               onClick={activeCorrectFilter}>Разработка По</ButtomTab>
                    <ButtomTab className={active === 'dataBase' ? 'active' : ''} id={'dataBase'}
                               onClick={activeCorrectFilter}>База данных</ButtomTab>
                    <ButtomTab className={active === 'CMS' ? 'active' : ''} id={'CMS'}
                               onClick={activeCorrectFilter}>CMS</ButtomTab>
                </Tabs>
                <TechnologiesItemBlock ref={elAnimate}>
                    {data.map((t, index) => <TechnologiesItem tech={t} key={index}/>)}
                </TechnologiesItemBlock>
                <SwiperTehnologies data={data}/>
            </Container>
        </TechnologiesWrapper>
    );
};

