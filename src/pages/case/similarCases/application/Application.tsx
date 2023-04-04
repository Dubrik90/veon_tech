import React from 'react';
import {ApplicationWrapper, Text} from "./style";
import {PlusIcon} from "./assets";
import {useAppDispatch} from "../../../../common/hook";
import {setIsConsultantModalOpenAC} from "../../../../app/app-reduser";

export const Application = () => {
    const dispatch = useAppDispatch()
    const onClickOpenModalHandler = () => {
        dispatch(setIsConsultantModalOpenAC({isOpen: true}))
    }

    return (
        <ApplicationWrapper onClick={onClickOpenModalHandler}>
            <PlusIcon/>
            <Text>Здесь может быть Ваш  проект</Text>
        </ApplicationWrapper>
    );
};

