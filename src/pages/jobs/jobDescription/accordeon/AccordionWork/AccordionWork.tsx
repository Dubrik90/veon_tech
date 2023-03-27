import Accordion from '@mui/material/Accordion/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary/AccordionSummary';
import React from 'react';
import {ProfDataType} from "../../data";
import {LinkItem, List, Title, TitleWork} from "./style";
import {AccordionDetails} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {ButtonJob} from "../style";


type AccordionWorkType = {
    data: ProfDataType
}

export const AccordionWork: React.FC<AccordionWorkType> = ({data}) => {

    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Accordion className='AccordionWrapper' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1bh-content"
                className='AccordionHeader'
                id="panel1bh-header">
                <TitleWork>{data.title}</TitleWork>
            </AccordionSummary>
            <AccordionDetails className='AccordionDetails'>
                <Title> Описание вакансии:</Title>
                <List>
                    {data.descVacancy.map((r, index) => <LinkItem key={index}>{r}</LinkItem>)}
                </List>
                <Title> Обязанности: </Title>
                <List>
                    {data.resposibility.map((r, index) => <LinkItem key={index}>{r}</LinkItem>)}
                </List>
                <Title> Требования:</Title>
                <List>
                    {data.requirements.map((r, index) => <LinkItem key={index}>{r}</LinkItem>)}
                </List>
                <Title> Минимальные знания, которые мы ждём от кандидата:</Title>
                <List>
                    {data.knowledge.map((r, index) => <LinkItem key={index}>{r}</LinkItem>)}
                </List>
                <Title> Будет преимуществом:</Title>
                <List>
                    {data.advantage.map((r, index) => <LinkItem key={index}>{r}</LinkItem>)}
                </List>
                <Title>Условия:</Title>
                <List>
                    {data.terms.map((r, index) => <LinkItem key={index}>{r}</LinkItem>)}
                </List>

            </AccordionDetails>
            <ButtonJob>Откликнуться</ButtonJob>
        </Accordion>
    );
};

