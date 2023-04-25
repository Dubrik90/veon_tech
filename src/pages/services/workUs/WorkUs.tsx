import React, {FC} from 'react';
import {ArrowIcon, CardBlock, Title, WorkUsContent, WorkUsWrapper} from './style';
import {Container} from "../../../common/style/Container";
import {Card} from "./card";
import {CardWorkUsType} from "../Servises";

type WorkUsProps = {
    cardArray: CardWorkUsType[],
    title: string
}
export const WorkUs:FC<WorkUsProps> = ({title,cardArray}) => {

    return (
        <WorkUsWrapper>
            <Container>
                <WorkUsContent>
                    <Title className='animate'>{title}</Title>
                    <CardBlock>
                        {cardArray.map((el, index) => (
                            <Card  el={el} key={index}/>
                        ))}
                        <ArrowIcon/>
                        <span></span>
                    </CardBlock>
                </WorkUsContent>
            </Container>
        </WorkUsWrapper>
    );
};

