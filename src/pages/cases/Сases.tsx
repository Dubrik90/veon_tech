import React from 'react';
import {СasesWrapper} from "./style";
import {JobHeader} from "../jobs/jobHeader";
import {FilterBlock} from "./filterBlock";

export const Сases = () => {



    return (
        <СasesWrapper>
            <JobHeader title={'Кейсы '}
                       breadcrumbsTitle={'КЕЙСЫ'}
            />
            <FilterBlock/>

        </СasesWrapper>
    );
};

