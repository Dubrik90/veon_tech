import React, {FC} from 'react';
import {CardWrapper, Img, ImgBlock, Title, Text} from './style';
import {CardWorkUsType} from "../../Servises";

type CardProps = {
    el: CardWorkUsType
}

export const Card: FC<CardProps> = ({el}) => {
    return (
        <CardWrapper>
            <ImgBlock>
                <Img src={el.img} alt=""/>
            </ImgBlock>
            <Title>{el.title}</Title>
            <Text>{el.text}</Text>
        </CardWrapper>
    );
};

