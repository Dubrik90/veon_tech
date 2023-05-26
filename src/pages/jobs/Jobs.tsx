import React, {useEffect} from 'react';
import {ButtonJobMobile, JobsWrapper} from "./style";
import {JobHeader} from "./jobHeader";
import {JobDescription} from "./jobDescription";
import {Container} from "../../common/style/Container";
import {animateText} from "../../common/animate/animateText";

export const Jobs = () => {

    useEffect(() => {
        document.title = 'Jobs — VEON-TECH'
        animateText()
    }, [])

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

