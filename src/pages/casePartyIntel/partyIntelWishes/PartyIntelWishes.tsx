import React from 'react';
import { PartyIntelWishesWrapper, Title, Text, WishesContent, Ul } from './style';
import {Container} from "../../../common/style/Container";

export const PartyIntelWishes = () => {
    return (
        <PartyIntelWishesWrapper>
            <Container>
                <WishesContent>
                    <Title>Results:</Title>
                    <Text>The client's requirements included the implementation of an admin panel, a messenger for communication between Service Providers and Customers, a Leads section for paid advertisements, and a section for customer advertisements.</Text>
                    <Title>By choosing our services, the client received the following benefits: </Title>
                    <Ul>
                        <li>- Prompt service and development.</li>
                        <li>- Convenient messenger functionality.</li>
                        <li>- Paid advertisement format designed for end-users.</li>
                        <li>- Fresh design meeting all client requirements.</li>
                        <li>- Discounts based on a bonus system.</li>
                        <li>Currently, the service is functioning efficiently and offers various features.</li>
                    </Ul>
                </WishesContent>
            </Container>
        </PartyIntelWishesWrapper>
    );
};

