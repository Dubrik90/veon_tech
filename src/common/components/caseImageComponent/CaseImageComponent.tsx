import React, {FC} from 'react';
import {CaseImageCompWrapper, Img, ImgBlock} from './style';
import {Container} from "../../style/Container";

type CaseImageComponentPropsType = {
    img: string
}

export const CaseImageComponent:FC<CaseImageComponentPropsType> = ({img}) => {
    return (
        <CaseImageCompWrapper>
            <Container>
                <ImgBlock>
                    <Img src={img} alt={'логотип компании'}/>
                </ImgBlock>
            </Container>
        </CaseImageCompWrapper>
    );
};

