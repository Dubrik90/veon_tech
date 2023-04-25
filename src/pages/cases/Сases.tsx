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

export const Сases = () => {
    const filter = useAppSelector(state => state.app.filterCase)

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
            <FilterBlock filter={filter}
            />
            <CaseBlock filter={filter}/>
        </СasesWrapper>
    );
};

