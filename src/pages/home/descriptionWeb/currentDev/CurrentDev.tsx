import React from 'react';
import {DevDataType} from '../../data';
import {ButtonArrow, CardImage, CurrentDevWrapper, SubTitle, Title} from './style';

import {Arrow} from '../../assets'

type CurrentDevType = {
    card: DevDataType
}
export const CurrentDev: React.FC<CurrentDevType> = ({card}) => {

    return (
        <CurrentDevWrapper>
            <CardImage>
                <img src={card.img} alt=""/>
            </CardImage>
            <Title>{card.header}</Title>
            <SubTitle>{card.desc}</SubTitle>
            <ButtonArrow>
                Узнать подробнее
                <Arrow/>
            </ButtonArrow>
        </CurrentDevWrapper>
    );
};
