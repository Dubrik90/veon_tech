import React, {FC, useEffect, useMemo, useRef, useState} from 'react';
import {
    ArrowIcon,
    Button,
    ButtonBlock,
    CaseBlockWrapper,
    CaseContent,
    Content,
    HiddenBlock,
    Img,
    ImgBlock,
    Text,
    Title
} from './style';
import {Container} from "../../../common/style/Container";
import {CaseType} from "../../../common/types/types";
import {Link} from "react-router-dom";
import {CasesSlider} from '../sliderCase';
import gsap from 'gsap'


type CaseBlockPropsType = {
    filter: CaseType[]
}

export const CaseBlock: FC<CaseBlockPropsType> = ({filter}) => {
    const el = useRef(null)
    const q = useMemo(() => gsap.utils.selector(el), [])

    const [showMore, setShoeMore] = useState(false)

    const onClickShowMoreHandler = () => {
        setShoeMore(true)
    }


    useEffect(() => {
        gsap.fromTo(
            q('.case'),
            {
                opacity: 0
            },
            {
                opacity: 1,
                // продолжительность анимации
                duration: 1,
                stagger: 0.33
            }
        )
    }, [filter])

    console.log(filter.length)

    return (
        <CaseBlockWrapper>
            <Container>
                <CaseContent ref={el}>
                    {
                        filter.map((el) => {
                            return (
                                <React.Fragment key={el.id}>
                                    <Content showMore={showMore} className='case'>
                                        <ImgBlock>
                                            <Img src={el.img} alt="case image"/>
                                        </ImgBlock>
                                        <HiddenBlock>
                                            <Title>{el.title}</Title>
                                            <Text>Какой-то текст описания кейса</Text>
                                            <Link to={el.route}>Подробнее</Link>
                                        </HiddenBlock>
                                    </Content>
                                </React.Fragment>
                            )
                        })
                    }
                    {
                        // filter.length < 10 &&
                        // <ButtonBlock showMore={showMore} onClick={onClickShowMoreHandler}>
                            <Content showMore={showMore} className='case' onClick={onClickShowMoreHandler}>
                                <ImgBlock>
                                    {/*<Img src={el.img} alt="case image"/>*/}
                                </ImgBlock>
                                <HiddenBlock>
                                    <Title>стрелка</Title>
                                    <Text>Какой-то текст описания кейса</Text>
                                    {/*<Link to={el.route}>Подробнее</Link>*/}
                                </HiddenBlock>
                            </Content>
                        // </ButtonBlock>
                    }

                </CaseContent>
                <CasesSlider filter={filter}/>

            </Container>
        </CaseBlockWrapper>
    );
};

