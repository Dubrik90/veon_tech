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
import React, {FC, useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import gsap from "gsap/all";


type DescriptionWebProps = {
    descriptionWeb: React.RefObject<HTMLInputElement>;
}

export const DescriptionWeb: FC<DescriptionWebProps> = ({descriptionWeb}) => {


    const elAnimate = useRef(null)
    const text1Animate = useRef(null)
    const text2Animate = useRef(null)
    const text3Animate = useRef(null)
    const cardAnimate = useRef<HTMLInputElement>(null);


    const headTitle = useRef(null)
    const [cardIndex, setCardIndex] = useState<number>(0)
    const activeCard: DevDataType = devData[cardIndex]


    useEffect(() => {
        const el = headTitle.current
        const text1 = text1Animate.current
        const text2 = text2Animate.current
        const text3 = text3Animate.current
        // const card = cardAnimate.current
        gsap.to(el, {
            opacity: 1,
            ease: "power4.out",
            top: 0,
            transform: 'rotate(0deg)',
            duration: 1.5,
            scrollTrigger: {
                trigger: el,
                start: 'top 75%',
            }
        })
        gsap.to(text1, {
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            y: 0,
            opacity: 1,
            ease: "power4.out",
            duration: 1.5,
            scrollTrigger: {
                trigger: text1,
                start: 'top 85%',
            }
        })
        gsap.to(text2, {
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            y: 0,
            opacity: 1,
            ease: "power4.out",
            duration: 1.5,
            scrollTrigger: {
                trigger: text2,
                start: 'top 85%',
            }
        })
        gsap.to(text3, {
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            y: 0,
            opacity: 1,
            ease: "power4.out",
            duration: 1.5,
            scrollTrigger: {
                trigger: text3,
                start: 'top 85%',
            }
        })

        const cards = gsap.utils.toArray('.card')

        cards.forEach((card: any) => {
            gsap.fromTo(card, {opacity: 0, x: 100, y: 100}, {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 1.5,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 75%',
                    end: 'bottom 20%',
                }
            })
        })

        const images = gsap.utils.toArray('.image')

        images.forEach((image: any) => {
            gsap.fromTo(image, {opacity: 0, scale: 0.8, y: 50}, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: image,
                    start: 'top 75%',
                    end: 'bottom 20%',
                }
            })
        })


    }, [])

    useEffect(() => {
        const el = elAnimate.current
        gsap.fromTo(el, {'clip-path': 'polygon(0 0, 0 0, 0 99%, 0 100%)', opacity: 0, visibility: 'hidden'}, {
            'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            opacity: 1,
            ease: "power4.out",
            visibility: 'visible',
            //  delay: 0.5,
            duration: 1.5,
            scrollTrigger: {
                trigger: el,
                start: 'center center',

                // start: "top top",
            }
        })
    }, [cardIndex])


    const onClickActiveCardHandler = (index: number) => {
        setCardIndex(index)
    }


    return (
        <DescriptionWebWrapper ref={descriptionWeb} className={'description-web-wrapper'}>
            <Container>
                <DescriptionWebContent>
                    <DescriptionWebBlock>
                        <Title className='animate'>
                            <span>WEB-студия</span> <br/> полного цикла
                        </Title>
                        <AboutText ref={text1Animate}>
                            “Студия <span>VEON-TECH</span> — это профессиональный разработчик веб-сайтов,
                            интернет-магазинов,
                            веб-сервисов и интернет-порталов, а также компания, которая оказывает услуги по поисковому
                            продвижению и управлению репутацией в интернете.
                        </AboutText>
                        <AboutText ref={text2Animate}>
                            Создание корпоративных сайтов является основным продуктом Студии и мы разрабатываем сайты
                            действительно хорошо: современный адаптивный дизайн, верстка на фреймворке bootstrap с
                            контролем качества, правильная настройка 1С-Битрикс, прохождение контроля качества.
                        </AboutText>
                        <AboutText ref={text3Animate}>
                            В решениях и наработках Студии участвовали лучшие специалисты отрасли, и сейчас наши решения
                            получает каждый из клиентов, заказавший разработку сайта интернет-магазина или
                            корпоративного сайта.”
                        </AboutText>
                    </DescriptionWebBlock>
                    <Cards>
                        {devData?.map((el, index) => <CurrentDev myRef={cardAnimate} key={index} card={el}/>)}
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
