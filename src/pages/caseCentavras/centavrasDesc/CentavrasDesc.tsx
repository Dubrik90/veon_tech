import React from 'react';
import {CentavrasDescWrapper, Img, ImgBlock, Text} from './style';
import CentavrasImg from './assets/CentavrasDescImg.webp'

export const CentavrasDesc = () => {
    return (
        <CentavrasDescWrapper>

            <Text>
                The web interface is a program designed to simplify the process of creating commercial proposals for our customers. <br/> Our team has developed a unique design and logo for the company.
            </Text>
            <ImgBlock>
                <Img src={CentavrasImg} alt={'Centavras'}/>
            </ImgBlock>
        </CentavrasDescWrapper>
    );
};

