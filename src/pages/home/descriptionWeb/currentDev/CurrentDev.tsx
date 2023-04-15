import React, {useEffect} from 'react';
import {DevDataType} from '../../data';
import {ButtonArrow, CardImage, CurrentDevWrapper, SubTitle, Title} from './style';

import {Arrow} from '../assets'

type CurrentDevType = {
    card: DevDataType,
    myRef: React.RefObject<HTMLInputElement>;
}
export const CurrentDev: React.FC<CurrentDevType> = ({card, myRef}) => {


    return (
        <CurrentDevWrapper  className={'card'}>
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
