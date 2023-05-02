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
    TextDesk,
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

    return (
        <CaseBlockWrapper>
            <Container>
                <CaseContent ref={el}>
                    {
                        filter.map((el) => {
                            return (
                                <React.Fragment key={el.id}>
                                    <Content showMore={showMore} className='case'>
                                        <Link to={el.route}>
                                            <ImgBlock>
                                                <Img src={el.img} alt="case image"/>
                                            </ImgBlock>
                                            <HiddenBlock className={el.color === 'wight' ? 'wight' : ''}>
                                                <div>
                                                    <Title>{el.name}</Title>
                                                    <Text>{el.about}</Text>
                                                    <Title>{el.desk}</Title>
                                                    {/*<Link to={el.route}>Подробнее</Link>*/}
                                                </div>
                                            </HiddenBlock>
                                        </Link>
                                    </Content>
                                </React.Fragment>
                            )
                        })
                    }
                </CaseContent>
                {
                    filter.length > 9 &&
                    <ButtonBlock showMore={showMore} onClick={onClickShowMoreHandler}>
                        <span>Показать еще</span>
                        <ArrowIcon/>
                    </ButtonBlock>
                }
                {/*<CasesSlider filter={filter}/>*/}

            </Container>
        </CaseBlockWrapper>
    );
};

