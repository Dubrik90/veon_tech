import React, {FC} from 'react';
import {SaleCardsType} from "../Bonuses";
import {BonusesCardWrapper, Img, ImgBlock, SubText, SubTitle, Title, Text, Button} from "./style";
import {useAppDispatch} from "../../../common/hook";
import {setIsOpenBonuseFormAC} from "../../../app/app-reduser";
import {useScrollBlock} from "../../../common/hook/use-scroll-block";

type BonusesCardProps = {
    card: SaleCardsType
}

export const BonusesCard: FC<BonusesCardProps> = ({card}) => {
    const dispatch = useAppDispatch()
    const [blockScroll, allowScroll] = useScrollBlock();

    const onClickOpenBonuseFormHandler = () => {
        blockScroll()
        dispatch(setIsOpenBonuseFormAC({isOpen: true}))
    }

    return (
        <BonusesCardWrapper >
            <span>{card.id}</span>
            <ImgBlock>
                <Img src={card.img} alt='logo bonuse'/>
            </ImgBlock>
            <Title>{card.title}</Title>
            <SubTitle>{card.subtitle}</SubTitle>
            <Text>{card.text}</Text>
            <SubText>{card.subText}</SubText>
            <Button onClick={onClickOpenBonuseFormHandler}>SELECT</Button>
        </BonusesCardWrapper>
    );
};

