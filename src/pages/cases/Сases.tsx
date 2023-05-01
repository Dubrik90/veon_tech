import React, {useEffect} from 'react';
import {СasesWrapper} from "./style";
import {CaseBlock} from "./caseBlock";
import {useAppSelector} from "../../common/hook";
import {Container} from '../../common/style/Container';
import {TitleHead} from "../services/benefit/style";
import {animateText} from "../../common/animate/animateText";
import {FilterCase} from './filterCase';

export const Сases = () => {

    const casesArray = useAppSelector(state => state.app.cases)
    const filterCase = useAppSelector(state => state.app.filterCase)
    console.log(filterCase)

    const filterResultArr = casesArray.filter(el => {
        if(filterCase.length === 0) {
            return casesArray
        } else {
            return filterCase.includes(el.title || el.country)
        }
    })

    useEffect(() => {
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
            <FilterCase />
            {/*<FilterBlock filter={filter}*/}
            {/*/>*/}
            <CaseBlock filter={filterResultArr}/>
        </СasesWrapper>
    );
};

