import React from 'react';
import { OpticsResultWrapper, Title } from './style';

import {CaseImageComponent} from "../../../common/components/caseImageComponent";
import OpticsResultImg from '../assets/opticsResult.webp';


export const OpticsResult = () => {
    return (
        <OpticsResultWrapper>
            <Title>Connector Optics LLC</Title>
            <CaseImageComponent img={OpticsResultImg}/>
        </OpticsResultWrapper>
    );
};

