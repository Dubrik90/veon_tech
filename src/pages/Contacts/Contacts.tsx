import React, {useEffect, useState} from 'react';
import {ContactsWrapper} from './style';
import {JobHeader} from "../jobs/jobHeader";
import {ContactsAbout} from './contactsAbout';
import {OfficeHours} from "./officeHours";
import {Requisites} from "./requisites";
import {MapComponent} from "./map";
import {SocialIcons} from "./socialIcons";
import {animateText} from "../../common/animate/animateText";

export const Contacts = () => {

    useEffect(() => {
        document.title = 'Contacts — VEON-TECH'
        animateText()
    }, [])

    return (
        <ContactsWrapper>
            {/*<JobHeader title={'Контакты'}*/}
            {/*           breadcrumbsTitle={'КОНТАКТЫ'}*/}
            {/*/>*/}
            <ContactsAbout/>
            {/*<SocialIcons/>*/}
            <OfficeHours/>
            <MapComponent/>
            <Requisites/>
        </ContactsWrapper>
    );
};




