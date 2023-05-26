import React from 'react';
import {CentavrasResultWrapper, Text, Content} from './style';
import CentavrasResultImg from '../assets/CentavrasResult.webp'
import {Container} from '../../../common/style/Container';
import {HappyElephantResultWrapperMob, TextMob} from "../../caseHappyElephant/happyElephantResult/style";
import {Img} from "../../caseHappyElephant/HappyElephantAbout/style";

export const CentavrasResult = () => {
    return (
        <>
            <CentavrasResultWrapper src={CentavrasResultImg}>
                <Container>
                    <Content>
                        <Text>We divided our work into several stages:</Text>
                        <Text>ЭStage 1: Registration <br/>During registration on the website, users provide their full name, email address, country, and categories of products they are interested in. After registration, users await approval from the administrator to view their selected product categories.
                        </Text>
                        <Text>Stage 2: Administrator Panel <br/> Upon account approval, the administrator specifies the percentage markup on the product cost based on the client's country. Once approved, the client receives a registration confirmation email containing a link to access their account. In the administrator panel, client orders are displayed in Excel files. When a client places an order, all order data is automatically recorded in the database, visible to the administrator.
                        </Text>
                    </Content>
                </Container>
            </CentavrasResultWrapper>

            <HappyElephantResultWrapperMob>
                <Container>
                    <TextMob>
                        We divided our work into several stages:
                    </TextMob>
                    <TextMob>
                        Stage 1: Registration <br/>During registration on the website, users provide their full name, email address, country, and categories of products they are interested in. After registration, users await approval from the administrator to view their selected product categories.
                    </TextMob>
                    <TextMob>
                        Stage 2: Administrator Panel <br/> Upon account approval, the administrator specifies the percentage markup on the product cost based on the client's country. Once approved, the client receives a registration confirmation email containing a link to access their account. In the administrator panel, client orders are displayed in Excel files. When a client places an order, all order data is automatically recorded in the database, visible to the administrator.
                    </TextMob>
                </Container>
                <Img src={CentavrasResultImg}/>
            </HappyElephantResultWrapperMob>
        </>
    );
};

