import React from 'react';
import {Container} from "../../../common/style/Container";
import {Breadcrumbs} from "../../../common/components/breadcrumbs";
import {JobHeaderContent, JobHeaderWrapper, Title} from "./style";

export const JobHeader = () => {
    return (
        <JobHeaderWrapper>
            <Container>
                <JobHeaderContent>
                    <Title>Работа в <span>Veon-Tech</span></Title>
                    <Breadcrumbs title={'Работа в Veon-Tech'}/>
                </JobHeaderContent>
            </Container>
        </JobHeaderWrapper>
    );
};

