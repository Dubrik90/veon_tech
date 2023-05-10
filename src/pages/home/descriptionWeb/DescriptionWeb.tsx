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

const DescriptionWeb: FC<DescriptionWebProps> = ({descriptionWeb}) => {

    const elAnimate = useRef(null)
    const [cardIndex, setCardIndex] = useState<number>(0)
    const activeCard: DevDataType = devData[cardIndex]


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
                start: 'top 85%',
            }
        })
    }, [cardIndex])


    const onClickActiveCardHandler = (index: number) => {
        setCardIndex(index)
    }


    return (
        <DescriptionWebWrapper ref={descriptionWeb}>
            <Container>
                <Title className='animate'>
                    <p>Разработка проектов</p>
                    <p><span>highload-класса</span> по scrum</p>
                    <p>- И в этом мы сильны</p>
                </Title>
                <DescriptionWebContent>
                    <DescriptionWebBlock>
                        <AboutText className={'animate'}>
                            <span>VEON-TECH</span> — это профессиональный разработчик, веб-сервисов, интернет-порталов и
                            сайтов любой направленности. Также компания, которая оказывает услуги по поисковому
                            продвижению и управлению репутацией в интернете.
                        </AboutText>
                        <AboutText className={'animate'}>
                            Создание многофункциональных проектов по методологии Time & Materials, является основным
                            продуктом компании. Мы реализуем проекты действительно хорошо: <br/>
                            - Современный адаптивный дизайн;<br/>
                            - Разработка и вёрстка проектов с использованием различных языков и фреймворков;<br/>
                            - Правильная настройка 1С-Битрикс;<br/>
                            - Прохождение контроля качества.<br/>
                        </AboutText>
                    </DescriptionWebBlock>
                    <Cards>
                        {devData?.map((el, index) => <CurrentDev key={index} card={el}/>)}
                    </Cards>
                    <CardsMobile>
                        <CurrentDevWrapper>
                            <CardImageMobile>
                                {devData.map((el, index) => <img
                                    className={index === cardIndex ? 'activeCard' : ''}
                                    onClick={() => onClickActiveCardHandler(index)}
                                    key={index}
                                    loading='lazy'
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

export default DescriptionWeb