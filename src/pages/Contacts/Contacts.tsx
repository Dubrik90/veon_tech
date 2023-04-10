import React, {useState} from 'react';
import {ContactsWrapper} from './style';
import {JobHeader} from "../jobs/jobHeader";
import {ContactsAbout} from './contactsAbout';
import {OfficeHours} from "./officeHours";
import {Requisites} from "./requisites";
import {Map} from "./map";


export const Contacts = () => {

    return (
        <ContactsWrapper>
            <JobHeader title={'Контакты'}
                       breadcrumbsTitle={'КОНТАКТЫ'}
            />
            <ContactsAbout/>
            <OfficeHours/>
            <Map/>
            <Requisites/>
        </ContactsWrapper>
    );
};




