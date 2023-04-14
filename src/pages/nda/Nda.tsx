import React from 'react';
import {NdaWrapper} from './style';
import {JobHeader} from "../jobs/jobHeader";
import Bg from './assets/bg.png'
import {Commitment} from "./commitment";
import {Content} from './content';
import {Help} from "./help";
import {ConsultantModal} from "../../common/components/consultantModal";


export const Nda = () => {
    return (
        <NdaWrapper>
            <JobHeader title={'НДА (Соглашение о неразглашении)'}
                       breadcrumbsTitle={'НДА (Соглашение о неразглашении)'}
            />
            <Commitment/>
            <Content/>
            <Help/>

        </NdaWrapper>
    );
};

