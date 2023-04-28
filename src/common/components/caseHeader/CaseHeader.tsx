import React, {FC} from 'react';
import {CaseHeaderWrapper, Content, LineBlock, Title} from './style';
import {Container} from "../../style/Container";
import { ReactComponent as Line1 } from "./assets/Line1.svg";
import { ReactComponent as Line2 } from "./assets/Line2.svg";

type CaseHeaderPropsType = {
    title: string
}

export const CaseHeader:FC<CaseHeaderPropsType> = ({title}) => {
    return (
        <CaseHeaderWrapper>
            <Container>
                <Content>
                    <Title>{title}</Title>
                    <LineBlock>
                        <Line2/>
                        <Line1/>
                    </LineBlock>
                </Content>
            </Container>
        </CaseHeaderWrapper>
    );
};

