import React from 'react';
import {AccordeonWrapper, ButtonJob} from "./style";
import {professionsData} from "../data";
import {AccordionWork} from "./AccordionWork/";

export const Accordeon = () => {

     return (
        <AccordeonWrapper>
            {professionsData.map((data,index)=><AccordionWork key={index} data={data}/>)}
            <ButtonJob>Откликнуться</ButtonJob>
        </AccordeonWrapper>
    );
};

