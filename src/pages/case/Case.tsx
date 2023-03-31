import React from 'react';
import {JobHeader} from "../jobs/jobHeader";
import { CaseWrapper } from './style';

export const Case = () => {

    return (
        <CaseWrapper>
            <JobHeader title={'Кейсы по разработке сайтов'}
                       breadcrumbsTitle={'КЕЙСЫ'}
            />
            Case
        </CaseWrapper>
    );
};

