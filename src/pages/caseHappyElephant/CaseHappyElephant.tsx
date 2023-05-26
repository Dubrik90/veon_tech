import React, {useEffect} from 'react';
import {CaseHappyElephantWrapper} from './style';
import {CaseHeader} from "../../common/components/caseHeader";
import {CaseImageComponent} from "../../common/components/caseImageComponent";
import Elephant from "./assets/elephant.webp";
import {HappyElephantAbout} from "./HappyElephantAbout";
import {HappyElephantDesc} from "./happyElephantDesc";
import {HappyElephantResult} from "./happyElephantResult";
import {CaseHelp} from "../case/caseHelp";
import {SimilarCases} from "../case/similarCases";
import ResultImg from './assets/elepfantResult.webp'
import {useAppDispatch, useAppSelector} from "../../common/hook";
import {setThemeAC} from "../../app/app-reduser";


export const CaseHappyElephant = () => {

    return (
        <CaseHappyElephantWrapper>
            <CaseHeader title={'Case Study: Website Development for "Happy Elephant"'}/>
            <CaseImageComponent img={Elephant}/>
            <HappyElephantAbout/>
            <HappyElephantDesc/>
            <HappyElephantResult img={ResultImg}
                                 text1={'Payment, on the other hand, is facilitated through payment modules connected to the website using a standard mechanism. When proceeding to payment, bonuses are reserved.'}
                                 text2={'Выбирая нас клиент получил следующее: - Календарь бронирования с широким функционалом - Кабинет\n' +
                                     '                        сделки с интуитивно-понятным пользователю интерфейсом - Реализована система платежей - Также\n' +
                                     '                        наша команда разработала различные сценарии поведения Пользователя в кабинете сделки.'}
            />
            <CaseHelp/>
            <SimilarCases/>
        </CaseHappyElephantWrapper>
    );
};

