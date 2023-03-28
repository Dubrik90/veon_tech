import React from 'react';
import {NdaWrapper} from './style';
import {JobHeader} from "../jobs/jobHeader";
import Bg from './assets/bg.png'
import {Commitment} from "./commitment";
import {Content} from './content';
import {Help} from "./help";


export const Nda = () => {
    return (
        <NdaWrapper>
            <JobHeader title={'НДА (Соглашение о неразглашении)'}
                       breadcrumbsTitle={'НДА (Соглашение о неразглашении)'}
                       img={Bg}
            />
            <Commitment/>
            <Content/>
            <Help/>
        </NdaWrapper>
    );
};

