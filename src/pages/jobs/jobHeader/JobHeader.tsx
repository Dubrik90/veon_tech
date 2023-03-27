import React, {FC} from 'react';
import {Container} from "../../../common/style/Container";
import {Breadcrumbs} from "../../../common/components/breadcrumbs";
import {JobHeaderContent, JobHeaderWrapper, Title} from "./style";

type JobHeaderPropsType = {
    title: string,
    span?: string,
    breadcrumbsTitle: string,
    img?: string
}

export const JobHeader:FC<JobHeaderPropsType> = ({breadcrumbsTitle,title,span, img}) => {
    return (
        <JobHeaderWrapper img={img}>
            <Container>
                <JobHeaderContent>
                    <Title>{title} <span>{span}</span></Title>
                    <Breadcrumbs title={breadcrumbsTitle}/>
                </JobHeaderContent>
            </Container>
        </JobHeaderWrapper>
    );
};

