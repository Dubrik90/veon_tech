import React, {FC} from 'react';
import {SaleCardsType} from "../Bonuses";
import {BonusesCardWrapper, Img, ImgBlock, SubText, SubTitle, Title, Text, Button} from "./style";

type BonusesCardProps = {
    card: SaleCardsType
}

export const BonusesCard:FC<BonusesCardProps> = ({card}) => {
    return (
        <BonusesCardWrapper>
            <span>{card.id}</span>
            <ImgBlock>
                <Img src={card.img} alt='logo bonuse'/>
            </ImgBlock>
            <Title>{card.title}</Title>
            <SubTitle>{card.subtitle}</SubTitle>
            <Text>{card.text}</Text>
            <SubText>{card.subText}</SubText>
            <Button>Выбрать</Button>
        </BonusesCardWrapper>
    );
};

