import React from 'react';
import {DevDataType} from '../../data';
import {ButtonArrow, CardImage, CurrentDevWrapper, SubTitle, Title} from './style';

import {Arrow} from '../assets'
import {Link} from "react-router-dom";

type CurrentDevType = {
    card: DevDataType,
}
export const CurrentDev: React.FC<CurrentDevType> = ({card}) => {

    return (
        <CurrentDevWrapper className='animate'>
            <CardImage>
                <img src={card.img} alt=""/>
            </CardImage>
            <Title>{card.header}</Title>
            <SubTitle>{card.desc}</SubTitle>
            <ButtonArrow>
                <Link to={card.link}>
                    Узнать подробнее
                </Link>
                <Arrow/>
            </ButtonArrow>
        </CurrentDevWrapper>
    );
};
