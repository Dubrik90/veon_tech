import React from 'react';
import {Content, Img, JointWorkWrapper, Text} from './style';
import {Container} from "../../../common/style/Container";
import bak2 from "../assets/bak2.webp";


export const JointWork = () => {
    return (
        <JointWorkWrapper src={bak2}>
            <Container>
                <Content>
                    <Text>
                        In collaboration with the client, we worked on the structure of the homepage, the arrangement of elements on the site, and created a unique design. We processed images for the catalog and filled the website with content. We also developed a mobile version of the site and ensured the correct display of elements on all devices.
                    </Text>
                    <img loading= "lazy" src={bak2} alt=""/>
                </Content>
            </Container>
            <Img src={bak2} alt=""/>
        </JointWorkWrapper>
    );
};

