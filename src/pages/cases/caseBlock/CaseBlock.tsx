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
import {CaseType, FilterCaseType} from "../../../common/types/types";
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
                </CaseContent>
                <CasesSlider filter={filter}/>
                {
                    filter.length > 10 &&
                    <ButtonBlock showMore={showMore} onClick={onClickShowMoreHandler}>
                        <Button>Продолжить</Button>
                        <ArrowIcon/>
                    </ButtonBlock>
                }
            </Container>
        </CaseBlockWrapper>
    );
};

