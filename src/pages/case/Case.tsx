import React from 'react';
import {JobHeader} from "../jobs/jobHeader";
import { CaseWrapper } from './style';
import {casesData} from "../app/data";
import {useParams} from "react-router-dom";


export const Case = () => {
    const {category} = useParams()
    const activeTitle = casesData


    return (
        <CaseWrapper>
            <JobHeader title={'Кейсы по разработке сайтов'}
                       breadcrumbsTitle={'КЕЙСЫ'}
            />
            Case
        </CaseWrapper>
    );
};

