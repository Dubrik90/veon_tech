import React from 'react';
import {JobHeader} from "../jobs/jobHeader";
import {CaseBlock, CaseWrapper, ImageBlock, Img, PortfolioBlock, PortfolioBlockSlider, Title} from './style';
import {useParams} from "react-router-dom";
import {caseDataArray} from "./app/data";
import {FilterCaseType} from "../../common/types/types";
import {Container} from "../../common/style/Container";
import {HeaderCase} from "./headerCase";
import {TableCase} from "./tableCase";
import {ContentCase} from "./contentCase";
import {CasesSlider} from "../cases/sliderCase";
import {SliderPortfolio} from "./sliderPortfolio";

type UseParamsType = {
    category: FilterCaseType;
};

export const Case = () => {
    const {category} = useParams<UseParamsType>()

    const activeCase = caseDataArray.filter(el => el.type === category)[0]

    return (
        <CaseWrapper>
            <JobHeader title={'Кейсы по разработке сайтов'}
                       breadcrumbsTitle={'КЕЙСЫ'}
            />
            <Container>
                <CaseBlock>
                    <Title>{activeCase.title}</Title>
                    <HeaderCase activeCase={activeCase}/>
                    <TableCase activeCase={activeCase}/>
                    <ContentCase activeCase={activeCase}/>
                </CaseBlock>
                <PortfolioBlock>
                    {
                        activeCase.portfolio.map((el, index) => {
                            return (
                                <ImageBlock key={index}>
                                    <Img src={el.img} alt="picture"/>
                                </ImageBlock>
                            )
                        })
                    }
                </PortfolioBlock>
                <PortfolioBlockSlider>
                    <SliderPortfolio activeCaseImg={activeCase.portfolio}/>
                </PortfolioBlockSlider>
            </Container>

        </CaseWrapper>
    );
};

