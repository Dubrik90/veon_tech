import React, {FC} from 'react';
import {JobHeader} from "../jobs/jobHeader";
import {CaseBlock, CaseWrapper, ImageBlock, Img, PortfolioBlock, PortfolioBlockSlider, Title} from './style';
import {useParams} from "react-router-dom";
import {caseDataArray, CaseType} from "./app/data";
import {FilterCaseType} from "../../common/types/types";
import {Container} from "../../common/style/Container";
import {HeaderCase} from "./headerCase";
import {TableCase} from "./tableCase";
import {ContentCase} from "./contentCase";
import {SliderPortfolio} from "./sliderPortfolio";
import {CaseHelp} from './caseHelp';
import { SimilarCases } from './similarCases';

type UseParamsType = {
    category: FilterCaseType;
};
type CasePropsType = {
    caseData : CaseType
}


export const Case:FC<CasePropsType> = ({caseData}) => {

    return (
        <CaseWrapper>
            {/*<JobHeader title={'Кейсы по разработке сайтов'}*/}
            {/*           breadcrumbsTitle={'КЕЙСЫ'}*/}
            {/*/>*/}
            <Container>
                <CaseBlock>
                    <Title>{caseData.title}</Title>
                    <HeaderCase activeCase={caseData}/>
                    <TableCase activeCase={caseData}/>
                    <ContentCase activeCase={caseData}/>
                </CaseBlock>
                <PortfolioBlock>
                    {
                        caseData.portfolio.map((el, index) => {
                            return (
                                <ImageBlock key={index}>
                                    <Img src={el.img} alt="picture"/>
                                </ImageBlock>
                            )
                        })
                    }
                </PortfolioBlock>
                <PortfolioBlockSlider>
                    <SliderPortfolio activeCaseImg={caseData.portfolio}/>
                </PortfolioBlockSlider>
            </Container>
            <CaseHelp/>
            <SimilarCases/>
        </CaseWrapper>
    );
};

