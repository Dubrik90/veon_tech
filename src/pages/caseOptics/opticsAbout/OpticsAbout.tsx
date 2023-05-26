import React from 'react';
import { OpticsAboutWrapper } from './style';
import {ContentBlock, ImageBlock, Text, TextBlock, Title} from "./style";
import OpticsAboutImg from "../assets/opticsAbout.webp";

export const OpticsAbout = () => {
    return (
        <OpticsAboutWrapper>
            <ContentBlock>
                <TextBlock>
                    <Title>Company Name: Connector Optics LLC</Title>
                    <Text>
                        A scientific and manufacturing company specializing in the development and production of heterostructures for photonics, primarily for high-speed vertical-cavity surface-emitting lasers in the spectral range of 850 - 1550 nm.
                    </Text>
                    <Text>
                        Connector Optics LLC approached us for website enhancement and migration to a new template.
                    </Text>
                </TextBlock>
                <ImageBlock src={OpticsAboutImg}></ImageBlock>
            </ContentBlock>
        </OpticsAboutWrapper>
    );
};

