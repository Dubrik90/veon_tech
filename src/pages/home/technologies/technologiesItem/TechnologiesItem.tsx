import React from 'react';
import {DType} from "../data";
import { ImgWrap } from '../style';
import { TechnologiesItemWrapper } from './style';


export type TechnologiesItemType = {
    tech: DType
}

export const TechnologiesItem: React.FC<TechnologiesItemType> = ({tech}) => {
    const {title, img} = tech

    return (
            <TechnologiesItemWrapper>
                <ImgWrap style={img}></ImgWrap>
                <div>{title}</div>
            </TechnologiesItemWrapper>
    );
};
