import React, {useState} from 'react';
import {СasesWrapper} from "./style";
import {JobHeader} from "../jobs/jobHeader";
import {FilterBlock} from "./filterBlock";
import {CaseBlock} from "./caseBlock";
import {FilterCaseType} from "../../common/types/types";
import {useAppSelector} from "../../common/hook";

export const Сases = () => {
    const filter = useAppSelector(state => state.app.filterCase)


    return (
        <СasesWrapper>
            <JobHeader title={'Кейсы '}
                       breadcrumbsTitle={'КЕЙСЫ'}
            />
            <FilterBlock filter={filter}
            />
            <CaseBlock filter={filter}/>
        </СasesWrapper>
    );
};

