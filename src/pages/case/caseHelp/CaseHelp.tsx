import React from 'react';
import {CaseHelpWrapper, HelpContent, SubTitle, Title} from './style';
import {Container} from "../../../common/style/Container";
import {useAppDispatch, useAppSelector} from "../../../common/hook";
import {setIsOpenFormAC} from "../../../app/app-reduser";
import {useParams} from "react-router-dom";


export const CaseHelp = () => {
    const {service} = useParams()
    const dispatch = useAppDispatch()
    const isOpenForm = useAppSelector(state => state.app.isOpenForm)

    const onClickFormModalHandler = () => {
        dispatch(setIsOpenFormAC({isOpen: !isOpenForm}))
    }

    return (
        <CaseHelpWrapper>
            <Container>
                <HelpContent>
                    {service === 'webDev'
                        ? <SubTitle>Давайте обсудим <span>Ваш</span> проект</SubTitle>
                        : <SubTitle>ХОТИТЕ <span>ТАК ЖЕ?</span> МЫ <span>ПОМОЖЕМ!</span></SubTitle>}
                    <Title onClick={onClickFormModalHandler}>Заказать звонок</Title>
                </HelpContent>
            </Container>
        </CaseHelpWrapper>
    );
};

