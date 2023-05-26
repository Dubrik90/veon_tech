import React, {FC} from "react";
import {ContactLink, ContactsCardContent, ContactsCardWrapper, SocialContainer, Text, Title} from "../style";
import {Container} from "../../../common/style/Container";
import {SOCIAL_LINKS} from "../app/data";
import {OverridableComponent} from "@mui/material/OverridableComponent";
import {SvgIconTypeMap} from "@mui/material";
import {TitleHead} from "../../services/benefit/style";


const ContactsCard: FC<{ item: { icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; }, title: string, text: string, link: string, } }> = React.memo(({item}) => {
    const Icon = item.icon;

    return (
        <ContactsCardContent>
            <Icon/>
            <Title>{item.title}</Title>
            <Text>{item.text}</Text>
            <ContactLink>{item.link}</ContactLink>
        </ContactsCardContent>
    );
});

export const ContactsAbout: FC = () => {
    const renderItems = () => SOCIAL_LINKS.map((item, index) => <ContactsCard item={item} key={index}/>);

    return (
        <Container>
            <TitleHead>Contacts</TitleHead>
            <ContactsCardWrapper>
                <SocialContainer>{renderItems()}</SocialContainer>
            </ContactsCardWrapper>
        </Container>
    );
};
