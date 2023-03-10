import React, {FC} from 'react';
import {DevDataType} from "../../data";
import {SubTitle, Title, WorkDeskImage, WorkDeskWrapper} from "./style";

type WorkDeskPropsType = {
    work: DevDataType
}
export const WorkDesk: FC<WorkDeskPropsType> = ({work}) => {
    return (
        <WorkDeskWrapper>
            <WorkDeskImage>
                <img src={work.img} alt="img"/>
            </WorkDeskImage>
            <Title>{work.header}</Title>
            <SubTitle>{work.desc}</SubTitle>
        </WorkDeskWrapper>
    );
};

