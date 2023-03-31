import React, {useState} from 'react';
import {СasesWrapper} from "./style";
import {JobHeader} from "../jobs/jobHeader";
import {FilterBlock} from "./filterBlock";
import {CaseBlock} from "./caseBlock";
import {FilterCaseType} from "../../common/types/types";

export const Сases = () => {

    const [filter, setFilter] = useState<FilterCaseType>('all')

    return (
        <СasesWrapper>
            <JobHeader title={'Кейсы '}
                       breadcrumbsTitle={'КЕЙСЫ'}
            />
            <FilterBlock filter={filter}
                         setFilter={setFilter}
            />
            <CaseBlock filter={filter}/>
        </СasesWrapper>
    );
};

