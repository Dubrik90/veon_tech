import React from 'react';
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


export const CaseHappyElephant = () => {
    return (
        <CaseHappyElephantWrapper>
            <CaseHeader title={'Кейс по разработке сайта для “Счастливый слон”'}/>
            <CaseImageComponent img={Elephant}/>
            <HappyElephantAbout/>
            <HappyElephantDesc/>
            <HappyElephantResult img={ResultImg}
                                 text1={'Оплата в свою очередь осуществляется через платежные модули, подключаемые к сайту в типовом\n' +
                                     '                        механизме. (Т.е. механизм подключения платежных модулей не меняется.) При переходе к оплате\n' +
                                     '                        ставятся в резерв Бонусы.'}
                                 text2={'Выбирая нас клиент получил следующее: - Календарь бронирования с широким функционалом - Кабинет\n' +
                                     '                        сделки с интуитивно-понятным пользователю интерфейсом - Реализована система платежей - Также\n' +
                                     '                        наша команда разработала различные сценарии поведения Пользователя в кабинете сделки.'}

            />
            <CaseHelp/>
            <SimilarCases/>
        </CaseHappyElephantWrapper>
    );
};

