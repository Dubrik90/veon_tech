import React, {FC, useState} from 'react';
import {ContactsWrapper, SocialContainer} from './style';
import {JobHeader} from "../jobs/jobHeader";

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
//export const keyExtractor = (id: number) => String(id);
export const SOCIAL_LINKS = [
    {
        src: 'https://www.facebook.com/clevertec.ru',
        icon: LocationOnOutlinedIcon,
    },
    {
        src: 'https://www.instagram.com/clevertec.ru/',
        icon: PhoneInTalkOutlinedIcon,
    },
    {
        src: 'https://vk.com/clevertec',
        icon: MailOutlineOutlinedIcon,
    },

];

export const Contacts = () => {
    const [selectedDay, setSelectedDay] = useState(new Date().getDay());



    return (
        <ContactsWrapper>
            <JobHeader title={'Контакты'}
                       breadcrumbsTitle={'КОНТАКТЫ'}
            />
            <SocialList/>



        </ContactsWrapper>
    );
};

const SocialItem: FC<{ item: { icon: string; src: string } }> = React.memo(({ item }) => {
    const Icon = item.icon;

    return (
        <a href={item.src} target='_blank' rel='noreferrer noopener'>
            <Icon />
        </a>
    );
});

export const SocialList: FC = () => {

    // @ts-ignore
    const renderItems = () => SOCIAL_LINKS.map((item, index) => <SocialItem item={item} key={index} />);



    return <SocialContainer>{renderItems()}</SocialContainer>;
};
