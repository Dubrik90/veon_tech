import React, {useEffect, useState} from 'react';
import {СasesWrapper} from "./style";
import {JobHeader} from "../jobs/jobHeader";
import {FilterBlock} from "./filterBlock";
import {CaseBlock} from "./caseBlock";
import {FilterCaseType} from "../../common/types/types";
import {useAppSelector} from "../../common/hook";
import {Container} from '../../common/style/Container';
import {TitleHead} from "../services/benefit/style";
import {animateText} from "../../common/animate/animateText";
import { FilterCase } from './filterCase';

export const Сases = () => {
    const filter = useAppSelector(state => state.app.filterCase)

    useEffect(() => {
        animateText()
    }, [])

    const arr: string[] = ['Интернет-магазины', 'B2B', 'Сайты', 'Приложения', 'Интеграции', 'Битрикс24', 'Техподдержка', 'Дизайн-концепция', 'Готовые решения']

    return (
        <СasesWrapper>
            {/*<JobHeader title={'Кейсы '}*/}
            {/*           breadcrumbsTitle={'КЕЙСЫ'}*/}
            {/*/>*/}
            <Container>
                <TitleHead className='animate'>Кейсы</TitleHead>
            </Container>
            <FilterCase options={arr} />
            {/*<FilterBlock filter={filter}*/}
            {/*/>*/}
            <CaseBlock filter={filter}/>
        </СasesWrapper>
    );
};

