import React, {FC} from 'react';
import {CardDeveloperWorkType} from "../DeveloperWork";
import {Link} from "react-router-dom";
import {ROUTS} from "../../../../common/constans/routs";
import {ContentBlock, DevCardWrapper, Img, ImgBlock, Title} from './style';

type DevCardPropsType = {
    el: CardDeveloperWorkType
}

export const DevCard: FC<DevCardPropsType> = ({el}) => {
    return (
        <DevCardWrapper>
            <ImgBlock>
                <Img src={el.img} alt=""/>
            </ImgBlock>
            <ContentBlock>
                <Title>{el.title}</Title>
                <Link to={el.to}>Подробнее</Link>
            </ContentBlock>
        </DevCardWrapper>
    );
};

