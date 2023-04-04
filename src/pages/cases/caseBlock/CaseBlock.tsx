import React, {FC, useEffect, useMemo, useRef, useState} from 'react';
import {
    CaseBlockWrapper,
    CaseContent,
    HiddenBlock,
    Img,
    Button,
    ImgBlock,
    Title,
    Text,
    Content,
    ButtonBlock,
    ArrowIcon
} from './style';
import {Container} from "../../../common/style/Container";
import {casesData} from "../../app/data";
import {FilterCaseType} from "../../../common/types/types";
import {Link} from "react-router-dom";
import {CasesSlider} from '../sliderCase';
import gsap from 'gsap'


type CaseBlockPropsType = {
    filter: FilterCaseType
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

    return (
        <CaseBlockWrapper>
            <Container>
                <CaseContent ref={el}>
                    {
                        casesData[filter].map((el) => {
                            return (
                                <React.Fragment key={el.id}>
                                    <Content showMore={showMore} className='case'>
                                        <ImgBlock>
                                            <Img src={el.img} alt="case image"/>
                                        </ImgBlock>
                                        <HiddenBlock>
                                            <Title>{el.title}</Title>
                                            <Text>Какой-то текст описания кейса</Text>
                                            <Link to={`/case/${el.type}`}>Подробнее</Link>
                                        </HiddenBlock>
                                    </Content>
                                </React.Fragment>
                            )
                        })
                    }
                </CaseContent>
                <CasesSlider/>
                {
                    casesData[filter].length > 10 &&
                    <ButtonBlock showMore={showMore} onClick={onClickShowMoreHandler}>
                        <Button>Продолжить</Button>
                        <ArrowIcon/>
                    </ButtonBlock>
                }
            </Container>
        </CaseBlockWrapper>
    );
};

