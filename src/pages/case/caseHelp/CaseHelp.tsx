import React from 'react';
import {CaseHelpWrapper, HelpContent, SubTitle, Title} from './style';
import {Container} from "../../../common/style/Container";
import {useAppDispatch, useAppSelector, useBodyScrollLock} from "../../../common/hook";
import {setIsOpenFormAC} from "../../../app/app-reduser";

export const CaseHelp = () => {
    const dispatch = useAppDispatch()
    const isOpenForm = useAppSelector(state => state.app.isOpenForm)
    const [isBodyLocked, setBodyLocked] = useBodyScrollLock();

    const onClickFormModalHandler = () => {
        setBodyLocked()
        dispatch(setIsOpenFormAC({isOpen: !isOpenForm}))
    }

    return (
        <CaseHelpWrapper>
            <Container>
                <HelpContent>
                    <SubTitle>ХОТИТЕ <span>ТАК ЖЕ?</span> МЫ <span>ПОМОЖЕМ!</span> </SubTitle>
                    <Title onClick={onClickFormModalHandler}>Заказать звонок</Title>
                </HelpContent>
            </Container>
        </CaseHelpWrapper>
    );
};

