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
            <Title className='animate'>{card.title}</Title>
            <SubTitle className='animate'>{card.subtitle}</SubTitle>
            <Text className='animate'>{card.text}</Text>
            <SubText className='animate'>{card.subText}</SubText>
            <Button className='animate' onClick={onClickOpenBonuseFormHandler}>Выбрать</Button>
        </BonusesCardWrapper>
    );
};

