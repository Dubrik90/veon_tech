import React from 'react';
import {ButtonJobMobile, JobsWrapper} from "./style";
import {JobHeader} from "./jobHeader";
import {JobDescription} from "./jobDescription";
import {Container} from "../../common/style/Container";

export const Jobs = () => {
    return (
        <JobsWrapper>
            {/*<JobHeader title={'Работа в'}*/}
            {/*           span={'Veon-Tech'}*/}
            {/*           breadcrumbsTitle={'Работа в Veon-Tech'}*/}
            {/*/>*/}
            <JobDescription/>
        </JobsWrapper>
    );
};

