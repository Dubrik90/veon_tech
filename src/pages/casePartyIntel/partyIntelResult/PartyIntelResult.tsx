import React from 'react';
import { PartyIntelResultWrapper } from './style';
import PartyResultImg from '../assets/partyResult.webp'

export const PartyIntelResult = () => {
    return (
        <PartyIntelResultWrapper >
            <img src={PartyResultImg} alt="результат"/>
        </PartyIntelResultWrapper>
    );
};

