import React from 'react';
import { AboutHeader } from './aboutHeader';
import {AboutWrapper} from "./style";
import {Progress} from "./progress";
import {Methodology} from "../home/methodology";
import { Principles } from './principles';
import {Reviews} from "../home/reviews";
import {ContactUs} from "./contactUs";

export const About = () => {
    return (
        <AboutWrapper>
            <AboutHeader/>
            <Progress/>
            <Methodology/>
            <Principles/>
            <Reviews/>
            <ContactUs/>
        </AboutWrapper>
    );
};

