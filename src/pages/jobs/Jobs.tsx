import React, {useEffect} from 'react';
import {JobsWrapper} from "./style";
import {JobDescription} from "./jobDescription";
import {animateText} from "../../common/animate/animateText";

export const Jobs = () => {

    useEffect(() => {
        document.title = 'Вакансии — VEON-TECH'
        animateText()
    }, [])

    return (
        <JobsWrapper>
            <JobDescription/>
        </JobsWrapper>
    );
};

