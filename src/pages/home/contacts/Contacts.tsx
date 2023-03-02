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
    ButtonForm, SubText, SubTitle
} from "./style";
import Bg from './assets/bg.png'

export const Contacts = () => {
    return (
        <ContactsWrapper>
            <ContactsBlock>
                <Title>ОСТАЛИСЬ ВОПРОСЫ? - ПИШИТЕ</Title>
                <SubTitle>Мы рады увидеть <span>Вашу</span>  заявку!</SubTitle>
                <ContactsForm>
                    <Input type="text" placeholder='Имя'/>
                    <Input type="email" placeholder='E-mail'/>
                    <Input type="phone" placeholder='Телефон'/>
                    <Textarea placeholder='Комментарий'/>
                    <SubText>
                        Нажимая на кнопку «Отправить», вы даете свое согласие на обработку персональных данных в
                        соответствии с целями указанными в <a href="#">Политике обработки персональных данных</a>
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

