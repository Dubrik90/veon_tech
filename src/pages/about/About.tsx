import React, {useEffect} from 'react';
import { AboutHeader } from './aboutHeader';
import {AboutWrapper} from "./style";
import {Progress} from "./progress";
import {Methodology} from "../home/methodology";
import { Principles } from './principles';
import {Reviews} from "../home/reviews";
import {ContactUs} from "./contactUs";
import {animateText} from "../../common/animate/animateText";

export const About = () => {

    useEffect(() => {
        animateText()
    }, []);


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

