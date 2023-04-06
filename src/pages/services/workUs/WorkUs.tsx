import React, {FC} from 'react';
import {CardBlock, Title, WorkUsContent, WorkUsWrapper} from './style';
import {Container} from "../../../common/style/Container";
import {Copm4} from '../assets/stateDev/computer4.svg';
import Creative2 from '../assets/stateDev/creativity2.svg';
import Pencil1 from '../assets/stateDev/pencil1.svg';
import Proto3 from '../assets/stateDev/prototype3.svg';
import {Check5} from '../assets/stateDev/quality-check5.svg';
import {Start6} from '../assets/stateDev/start-up6.svg';
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
                    <Title>{title}</Title>
                    <CardBlock>
                        {cardArray.map((el, index) => (
                            <Card el={el} key={index}/>
                        ))}
                    </CardBlock>
                </WorkUsContent>
            </Container>
        </WorkUsWrapper>
    );
};

