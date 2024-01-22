// import React, {FC} from "react";
// import {ContactLink, ContactsCardContent, ContactsCardWrapper, SocialContainer, Text, Title} from "../style";
// import {Container} from "../../../common/style/Container";
// import {SOCIAL_LINKS} from "../app/data";
// import {OverridableComponent} from "@mui/material/OverridableComponent";
// import {SvgIconTypeMap} from "@mui/material";
// import {TitleHead} from "../../services/benefit/style";
//
//
// const ContactsCard: FC<{ item: { icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; }, title: string, text: string, link: string, } }> = React.memo(({item}) => {
//     const Icon = item.icon;
//
//     return (
//         <ContactsCardContent>
//             <Icon/>
//             <Title>{item.title}</Title>
//             <Text>{item.text}</Text>
//             <ContactLink>{item.link}</ContactLink>
//         </ContactsCardContent>
//     );
// });
//
// export const ContactsAbout: FC = () => {
//     const renderItems = () => SOCIAL_LINKS.map((item, index) => <ContactsCard item={item} key={index}/>);
//
//     return (
//         <Container>
//             <TitleHead>Контакты</TitleHead>
//             <ContactsCardWrapper>
//                 <SocialContainer>{renderItems()}</SocialContainer>
//             </ContactsCardWrapper>
//         </Container>
//     );
// };

import React, {FC} from "react";
import {
    ContactLink,
    ContactLinkPhone,
    ContactsCardContent,
    ContactsCardWrapper,
    SocialContainer,
    Text,
    Title
} from "../style";
import {Container} from "../../../common/style/Container";
import {TitleHead} from "../../services/benefit/style";
import PhoneIcon from "@mui/icons-material/PhoneInTalkOutlined";
import MailIcon from "@mui/icons-material/MailOutlineOutlined";
import LocationIcon from "@mui/icons-material/LocationOnOutlined";


export const ContactsAbout: FC = () => {
    // const renderItems = () => SOCIAL_LINKS.map((item, index) => <ContactsCard item={item} key={index}/>);

    return (
        <Container>
            <TitleHead>Контакты</TitleHead>
            <ContactsCardWrapper>
                <SocialContainer>
                    <ContactsCardContent>
                        <PhoneIcon/>
                        <Title>Телефон</Title>
                        <Text>Наши специалисты готовы принимать Ваши звонки в рабочее время офиса с 9:00 до 17:00 с понедельника по пятницу.</Text>
                        <ContactLinkPhone href="tel: +79955775163">+7 (995) 577-51-63</ContactLinkPhone>
                        <ContactLinkPhone href="tel: +375333028790">+375 (33) 302-87-90</ContactLinkPhone>
                    </ContactsCardContent>
                    <ContactsCardContent>
                        <MailIcon/>
                        <Title>Электронная почта</Title>
                        <Text>Заявки на электронную почту мы принимаем ежедневно в режиме 24/7. Будьте уверены, мы обязательно с вами свяжемся!</Text>
                        <ContactLinkPhone href='mailto: clients@veon-tech.ru'>clients@veon-tech.ru</ContactLinkPhone>
                    </ContactsCardContent>
                    <ContactsCardContent>
                        <LocationIcon/>
                        <Title>Местоположение офиса</Title>
                        <Text>Приглашаем Вас в наш офис. Также, есть возможность встреч с партнерами и заказчиками в удобном для Вас месте.</Text>
                        <ContactLink>Минск, Сурганова, 57б, офис 187</ContactLink>
                    </ContactsCardContent>

                </SocialContainer>
            </ContactsCardWrapper>
        </Container>
    );
};

