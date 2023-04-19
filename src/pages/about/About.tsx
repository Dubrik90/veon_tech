import React from 'react';
import { AboutHeader } from './aboutHeader';
import {AboutWrapper} from "./style";
import {Progress} from "./progress";
import {Methodology} from "../home/methodology";
import { Principles } from './principles';

export const About = () => {
    return (
        <AboutWrapper>
            <AboutHeader/>
            <Progress/>
            <Methodology/>
            <Principles/>

        </AboutWrapper>
    );
};

