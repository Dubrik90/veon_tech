import React from 'react';
import {
    Background,
    ContactsForm,
    ContactsBlock,
    ContactsWrapper,
    ImgBg,
    Input,
    Title,
    Textarea,
    ButtonForm, SubText, SubTitle, InputEmail, InputName
} from "./style";
import Bg from './assets/bg.png'
import {Link} from "react-router-dom";
import {ROUTS} from "../../../common/constans/routs";

export const Contacts = () => {

    return (
        <ContactsWrapper>
            <ContactsBlock>
                <Title>ОСТАЛИСЬ ВОПРОСЫ? - ПИШИТЕ</Title>
                <SubTitle>Мы рады увидеть <span>Вашу</span>  заявку!</SubTitle>
                <ContactsForm>
                    <InputName type="text" placeholder='Имя'/>
                    <InputEmail type="email" placeholder='E-mail'/>
                    <Input type="phone" placeholder={window.innerWidth >= 426 ? 'Телефон': 'BY  +375(ХХ) ХХХ-ХХ-ХХ'}/>
                    <Textarea placeholder='Комментарий'/>
                    <SubText>
                        Нажимая на кнопку «Отправить», вы даете свое согласие на обработку персональных данных в
                        соответствии с целями указанными в <Link to={ROUTS.WORK_IN_VEON}>Политике обработки персональных данных</Link>
                    </SubText>
                    <ButtonForm type={"button"}>ОТПРАВИТЬ</ButtonForm>
                </ContactsForm>
            </ContactsBlock>
            <Background>
                <ImgBg src={Bg} alt="Bg"/>
            </Background>
        </ContactsWrapper>
    );
};

