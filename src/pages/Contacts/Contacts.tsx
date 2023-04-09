import React, {useState} from 'react';
import {ContactsWrapper} from './style';
import {JobHeader} from "../jobs/jobHeader";
import {ContactsAbout} from './contactsAbout';


export const Contacts = () => {
    const [selectedDay, setSelectedDay] = useState(new Date().getDay());

    return (
        <ContactsWrapper>
            <JobHeader title={'Контакты'}
                       breadcrumbsTitle={'КОНТАКТЫ'}
            />
            <ContactsAbout/>
        </ContactsWrapper>
    );
};




