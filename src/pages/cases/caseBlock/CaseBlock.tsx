import React, {FC} from 'react';
import {CaseBlockWrapper, CaseContent, HiddenBlock, Img, ImgBlock, Title, Text, Content} from './style';
import {Container} from "../../../common/style/Container";
import {casesData} from "../../app/data";
import {FilterCaseType} from "../../../common/types/types";
import {Link} from "react-router-dom";
import {FullSlider} from "../sliderCase/FullSlider";

type CaseBlockPropsType = {
    filter: FilterCaseType
}

export const CaseBlock: FC<CaseBlockPropsType> = ({filter}) => {

    return (
        <CaseBlockWrapper>
            <Container>
                <CaseContent>
                    {
                        casesData[filter].map((el) => {
                            return (
                                <React.Fragment key={el.id}>
                                    <Content>
                                        <ImgBlock>
                                            <Img src={el.img} alt="case image"/>
                                        </ImgBlock>
                                        <HiddenBlock>
                                            <Title>{el.title}</Title>
                                            <Text>Какой-то текст описания кейса</Text>
                                            <Link to={el.route}>Подробнее</Link>
                                        </HiddenBlock>
                                    </Content>
                                </React.Fragment>
                            )
                        })
                    }
                </CaseContent>
                <FullSlider/>
            </Container>
        </CaseBlockWrapper>
    );
};

