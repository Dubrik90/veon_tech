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
                    <p>Project development</p>
                    <p>Scrum-based<span> high-load class</span></p>
                    <p>- And we are good at it.</p>
                </Title>
                <DescriptionWebContent>
                    <DescriptionWebBlock>
                        <AboutText className={'animate'}>
                            <span>VEON-TECH</span> is a professional developer of web services, internet portals, and websites of any orientation. It is also a company that provides services for search engine optimization and online reputation management.
                        </AboutText>
                        <AboutText className={'animate'}>
                            Creating multi-functional projects using the Time & Materials methodology is the company's main product. We implement projects really well:
                            <br/>
                            - Modern adaptive design;<br/>
                            - Development and layout of projects using various languages and frameworks;<br/>
                            - Proper configuration of 1C-Bitrix;<br/>
                            - Quality control.<br/>
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
                                    Learn more
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
