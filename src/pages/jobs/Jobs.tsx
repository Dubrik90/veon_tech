import React from 'react';
import {ButtonJobMobile, JobsWrapper} from "./style";
import {JobHeader} from "./jobHeader";
import {JobDescription} from "./jobDescription";
import {Container} from "../../common/style/Container";

export const Jobs = () => {
    return (
        <JobsWrapper>
            <JobHeader/>
            <JobDescription/>
            <Container>
                <ButtonJobMobile>Откликнуться</ButtonJobMobile>
            </Container>
        </JobsWrapper>
    );
};

