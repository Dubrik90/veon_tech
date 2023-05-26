import React from 'react';
import {ContentBlock, PartyIntelAbutWrapper, Text, TextBlock, Title} from "./style";
import {Container} from "../../../common/style/Container";

export const PartyIntelAbout = () => {
    return (
        <PartyIntelAbutWrapper>
            <Container>
                <ContentBlock>
                    <TextBlock>
                        <Title>Company Name: PartyIntel Location: USA, Los Angeles </Title>
                        <Text>Specialization: Event and service search services</Text>
                    </TextBlock>
                    <TextBlock>
                        <Title>Main Objective:</Title>
                        <Text>- Implementation of an admin panel <br/>- Implementation of a messenger for communication between Service Providers and Customers<br/>- Leads section for paid advertisements <br/>- Customer advertisement section
                        </Text>
                    </TextBlock>
                </ContentBlock>
            </Container>
        </PartyIntelAbutWrapper>
    );
};

