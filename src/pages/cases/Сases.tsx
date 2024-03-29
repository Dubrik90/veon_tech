import React, {useEffect, useMemo, useState} from 'react';
import {СasesWrapper} from "./style";
import {CaseBlock} from "./caseBlock";
import {useAppSelector} from "../../common/hook";
import {Container} from '../../common/style/Container';
import {TitleHead} from "../services/benefit/style";
import {animateText} from "../../common/animate/animateText";
import {FilterCase} from './filterCase';
import {CaseType} from "../../common/types/types";

export const Сases = () => {

    const casesArray = useAppSelector(state => state.app.cases)
    const [resultFilterArray, setResultFilterArray] = useState<CaseType[]>(casesArray)
    const { filterCountry, filterCategory, filterIndustry } = useAppSelector(state => state.app)

    useEffect(() => {

        if (![...filterCountry, ...filterCategory, filterIndustry].length) {
            setResultFilterArray(casesArray)
            return
        }

        setResultFilterArray(casesArray.filter(el => {
            return filterCountry.length ? filterCountry.includes(el.country) : resultFilterArray
        }).filter(el => {
            return filterCategory.length ? filterCategory.some(category => el.title.includes(category)) : resultFilterArray
        }).filter(el => {
            return filterIndustry.length ? filterIndustry.some(industry => el.industry.includes(industry))  : resultFilterArray
        }))
    }, [filterCountry, filterCategory, filterIndustry])

    useEffect(() => {
        document.title = 'Кейсы — VEON-TECH'
        animateText()
    }, [])

    return (
        <СasesWrapper>
            {/*<JobHeader title={'Кейсы '}*/}
            {/*           breadcrumbsTitle={'КЕЙСЫ'}*/}
            {/*/>*/}
            <Container>
                <TitleHead className='animate'>Кейсы</TitleHead>
            </Container>
            <FilterCase/>
            {/*<FilterBlock filter={filter}*/}
            {/*/>*/}
            <CaseBlock filter={resultFilterArray}/>
        </СasesWrapper>
    );
};

