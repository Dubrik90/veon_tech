import Accordion from '@mui/material/Accordion/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary/AccordionSummary';
import React from 'react';
import {ProfDataType} from "../../data";
import {LinkItem, List, Title, TitleWork} from "./style";
import AccordionDetails from "@mui/material/AccordionDetails/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {ButtonJob} from "../style";
import {useAppDispatch, useAppSelector} from "../../../../../common/hook";
import {setIsModalWindowOpenAC} from "../../../../../app/app-reduser";
import {useScrollBlock} from "../../../../../common/hook/use-scroll-block";


type AccordionWorkType = {
    data: ProfDataType
}

export const AccordionWork: React.FC<AccordionWorkType> = ({data}) => {
    const dispatch = useAppDispatch()
    const [blockScroll, allowScroll] = useScrollBlock();

    const onClickOpenModalHandler = () => {
        blockScroll()
        dispatch(setIsModalWindowOpenAC({isOpen: true}))
    }

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
                <Title> Job Description:</Title>
                <List>
                    {data.descVacancy.map((r, index) => <LinkItem key={index}>{r}</LinkItem>)}
                </List>
                <Title> Responsibilities: </Title>
                <List>
                    {data.resposibility.map((r, index) => <LinkItem key={index}>{r}</LinkItem>)}
                </List>
                <Title> Requirements:</Title>
                <List>
                    {data.requirements.map((r, index) => <LinkItem key={index}>{r}</LinkItem>)}
                </List>
                <Title> Minimum knowledge we expect from candidates:</Title>
                <List>
                    {data.knowledge.map((r, index) => <LinkItem key={index}>{r}</LinkItem>)}
                </List>
                <Title> Will be an advantage:</Title>
                <List>
                    {data.advantage.map((r, index) => <LinkItem key={index}>{r}</LinkItem>)}
                </List>
                <Title>Conditions:</Title>
                <List>
                    {data.terms.map((r, index) => <LinkItem key={index}>{r}</LinkItem>)}
                </List>
            </AccordionDetails>
            <ButtonJob onClick={onClickOpenModalHandler}>APPLY NOW</ButtonJob>
        </Accordion>
    );
};

