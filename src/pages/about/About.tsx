import React from 'react';
import { AboutHeader } from './aboutHeader';
import {AboutWrapper} from "./style";
import {Progress} from "./progress";

export const About = () => {
    return (
        <AboutWrapper>
            <AboutHeader/>
            <Progress/>

        </AboutWrapper>
    );
};

