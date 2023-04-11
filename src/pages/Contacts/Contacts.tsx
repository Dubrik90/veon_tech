import React, {useState} from 'react';
import {ContactsWrapper} from './style';
import {JobHeader} from "../jobs/jobHeader";
import {ContactsAbout} from './contactsAbout';
import {OfficeHours} from "./officeHours";
import {Requisites} from "./requisites";
import {MapComponent} from "./map";
import {SocialIcons} from "./socialIcons";


export const Contacts = () => {

    return (
        <ContactsWrapper>
            <JobHeader title={'Контакты'}
                       breadcrumbsTitle={'КОНТАКТЫ'}
            />
            <ContactsAbout/>
            <SocialIcons/>
            <OfficeHours/>
            <MapComponent/>
            <Requisites/>
        </ContactsWrapper>
    );
};




