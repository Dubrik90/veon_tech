import React, {FC} from 'react';
import {CardWrapper, Img, ImgBlock, Title, Text} from './style';
import {CardWorkUsType} from "../../Servises";

type CardProps = {
    el: CardWorkUsType
}

export const Card: FC<CardProps> = ({el}) => {
    return (
        <>
            <CardWrapper className='animate'>
                <ImgBlock>
                    <Img src={el.img} alt=""/>
                    <Title>{el.title}</Title>
                </ImgBlock>
                <Text>{el.text}</Text>
            </CardWrapper>
        </>
    );
};

