import {Container} from '../../../common/style/Container';
import {Arrow} from './assets';
import {devData, DevDataType} from '../data';
import {CurrentDev} from './currentDev/CurrentDev';
import {ButtonArrow, CurrentDevWrapper, SubTitle} from './currentDev/style';
import {
    AboutText,
    CardImageMobile,
    Cards,
    CardsMobile,
    DescriptionWebBlock,
    DescriptionWebContent,
    DescriptionWebWrapper,
    Title,
    TitleMobile
} from './style';
import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import gsap from "gsap";


export const DescriptionWeb = () => {
    const elAnimate = useRef(null)
    const [cardIndex, setCardIndex] = useState<number>(0)
    const activeCard: DevDataType = devData[cardIndex]

    //
    // useEffect(() => {
    //     const el = elAnimate.current
    //     let tl = gsap.timeline({defaults: {ease: "power4.inOut", duration: 2}})
    //     tl.to('.link', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2.2, scrollTrigger: {
    //             trigger: el
    //         }})
    //
    // }, [cardIndex])

    useEffect(() => {
        const el = elAnimate.current
        gsap.fromTo(el, {'clip-path': 'polygon(0 0, 0 0, 0 99%, 0 100%)', opacity: 0, visibility: 'hidden'}, {
            'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            opacity: 1,
            ease: "power4.out",
            visibility: 'visible',
            delay: 0.5,
            duration: 0.5,
            scrollTrigger: {
                trigger: el,
                start: 'top 90%',
               // start: "top top",
            }
        })
    }, [cardIndex])


    const onClickActiveCardHandler = (index: number) => {
        setCardIndex(index)
    }


    return (
        <DescriptionWebWrapper>
            <Container>
                <DescriptionWebContent>
                    <DescriptionWebBlock>
                        <Title>
                            <span>WEB-студия</span> <br/> полного цикла
                        </Title>
                        <AboutText>
                            Команда профессиональных специалистов <span>VEON-TECH</span> предоставляет широкий спектр
                            услуг в области
                            веб-разработки: лидогенерация, поисковая SEO оптимизация, контекстная реклама,
                            таргетированная реклама в
                            социальных сетях, создание и правка сайтов, управление репутацией, настройка и внедрение
                            CRM, написание
                            продающих текстов, наполнение веб-сайтов, технические и юзабилити аудиты, брендинг и
                            дизайн.
                        </AboutText>
                        <AboutText>
                            Digital агентство <span>VEON-TECH</span> предлагает комплексную стратегию в формате
                            performance marketing.
                            Понимаем цели каждого клиента и подбираем инструменты для их достижения. Работаем на
                            успешность и результат для
                            вашего бизнеса. Готовы помочь увеличить узнаваемость бренда, привлечь целевых посетителей,
                            обеспечить рост количества
                            звонков и заявок.
                        </AboutText>
                    </DescriptionWebBlock>
                    <Cards>
                        {devData.map((el, index) => <CurrentDev key={index} card={el}/>)}
                    </Cards>
                    <CardsMobile>
                        <CurrentDevWrapper>
                            <CardImageMobile>
                                {devData.map((el, index) => <img
                                    className={index === cardIndex ? 'activeCard' : ''}
                                    onClick={() => onClickActiveCardHandler(index)}
                                    key={index}
                                    src={el.img} alt="img"/>)}
                            </CardImageMobile>
                            <Link to={activeCard.link} ref={elAnimate} className='link'>
                                <TitleMobile>{activeCard.header}</TitleMobile>
                                <SubTitle>{activeCard.desc}</SubTitle>
                                <ButtonArrow>
                                    Узнать подробнее
                                    <Arrow/>
                                </ButtonArrow>
                            </Link>
                        </CurrentDevWrapper>
                    </CardsMobile>
                </DescriptionWebContent>
            </Container>
        </DescriptionWebWrapper>
    );
};
