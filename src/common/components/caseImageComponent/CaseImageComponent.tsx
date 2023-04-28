import React, {FC} from 'react';
import {CaseImageCompWrapper, Img, ImgBlock} from './style';

type CaseImageComponentPropsType = {
    img: string
}

export const CaseImageComponent: FC<CaseImageComponentPropsType> = ({img}) => {
    return (
        <CaseImageCompWrapper>
            <ImgBlock>
                <Img src={img} alt={'логотип компании'}/>
            </ImgBlock>
        </CaseImageCompWrapper>
    );
};

