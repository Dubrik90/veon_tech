import React from 'react';
import {Container} from "../../../common/style/Container";
import {OpticsDeskWrapper, ImageBlock, Img, Text, OpticsDeskContent, Ul, Block} from "./style";
import MobileImg from "../assets/mobileOptics.webp";

export const OpticsDesk = () => {
    return (
        <OpticsDeskWrapper>
            <Container>
                <OpticsDeskContent>
                    <Text>Development Process: <br/>- We transferred the maps from the existing website, <br/>- We migrated the news from the old template to the new one<br/>- We ensured website responsiveness across all platforms</Text>
                    <ImageBlock>
                        <Img src={MobileImg} alt={'mobile image'}/>
                    </ImageBlock>
                    <Block>
                        <Text>We created a user guide for office software, detailing how to update the website with news and other materials.
                        </Text>
                        <Ul>
                            <li>The guide includes instructions for:</li>
                            <li>• Adding news articles;</li>
                            <li>• Modifying the menu structure;</li>
                            <li>• Uploading site materials such as presentation files and linking to them;</li>
                            <li>• Adding banners with links to external resources.</li>
                        </Ul>
                    </Block>
                </OpticsDeskContent>
            </Container>
        </OpticsDeskWrapper>
    );
};

