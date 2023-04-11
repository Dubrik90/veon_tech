import React, {FC} from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import {OverridableComponent} from "@mui/material/OverridableComponent";
import {Container} from "../../../common/style/Container";
import {SocialIconsContent, SocialIconsWrapper} from './style';
import {SvgIconTypeMap} from "@mui/material";


const socialLinks = [
    {icon: InstagramIcon, link: 'https://instagram.com/veontech.agency?igshid=YmMyMTA2M2Y='},
    {icon: FacebookIcon, link: 'https://www.facebook.com/{ID}'},
    {icon: LinkedInIcon, link: 'https://www.linkedin.com/company/veon-tech/'},
    {icon: WhatsAppIcon, link: 'https://wa.me/'},
    {icon: TelegramIcon, link: 'https://t.me/veon_tech'},
]

const ContactsCard: FC<{ item: { icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; }, link: string, } }> = React.memo(({item}) => {
    const Icon = item.icon;

    return (
        <a href={item.link} target='_blank'>
            <Icon/>
        </a>
    );
});


export const SocialIcons = () => {

    const renderItems = () => socialLinks.map((item, index) => <ContactsCard item={item} key={index}/>);

    return (
        <SocialIconsWrapper>
            <Container>
                <SocialIconsContent>
                    {renderItems()}
                </SocialIconsContent>
            </Container>
        </SocialIconsWrapper>
    );
};

