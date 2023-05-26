import React from 'react';
import {ContentBlock, WishesWrapper} from './style';
import bak1 from '../assets/bak1.webp'
import {Container} from "../../../common/style/Container";

export const Wishes = () => {
    return (
        <WishesWrapper src={bak1}>
            <Container>
                <ContentBlock>
                    <div className="parent">
                        <div className="div1">he client was particularly concerned about the website design. The task was to make the website "cooler." Visual perception was important to the client, aiming for a visually appealing and user-friendly interface.
                        </div>
                        <div className="div2">The client had a general understanding of the content, design, and color scheme. It was more convenient for the client to sketch the layout of all the blocks on paper, providing a blueprint. Based on the blueprint, we created a detailed specification.
                        </div>
                    </div>
                </ContentBlock>
            </Container>
        </WishesWrapper>
    );
};

