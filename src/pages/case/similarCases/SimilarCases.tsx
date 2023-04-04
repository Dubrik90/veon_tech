import React from 'react';
import Img1 from './assets/img1.png'
import Img2 from './assets/img3.png'
import Img3 from './assets/img3.png'
import {ROUTS} from "../../../common/constans/routs";
import {Img, ImgBlock, SimilarCasesBlock, SimilarCasesDesktop, SimilarCasesWrapper, Title} from "./style";
import {Link} from "react-router-dom";
import {Container} from "../../../common/style/Container";
import {Application} from "./application";
import {SimilarSlider} from "./simularSlider";

export type SimilarCasesArrayType = {
    img: string,
    to: string
}
export const SimilarCases = () => {

    const similarCasesArray: SimilarCasesArrayType[] = [
        {img: Img1, to: ROUTS.CASES},
        {img: Img2, to: ROUTS.CASES},
        {img: Img3, to: ROUTS.CASES},
    ]
    return (
        <SimilarCasesWrapper>
            <Container>
                <SimilarCasesBlock>
                    <Title>Похожие кейсы:</Title>
                    <SimilarCasesDesktop>
                        {
                            similarCasesArray.map((el, index) => {
                                return (
                                    <ImgBlock key={index}>
                                        <Link to={el.to}>
                                            <Img src={el.img} alt={'image'}/>
                                        </Link>
                                    </ImgBlock>
                                )
                            })
                        }
                        <Application/>
                    </SimilarCasesDesktop>
                    <SimilarSlider similarCasesArray={similarCasesArray}/>
                </SimilarCasesBlock>
            </Container>
        </SimilarCasesWrapper>
    );
};

