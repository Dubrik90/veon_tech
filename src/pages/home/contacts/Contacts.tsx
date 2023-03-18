import React from 'react';
import {ContactsWrapper, ContentBlock, Subtitle, Title} from "./style";
import {Container} from "../../../common/style/Container";

export const Contacts = () => {

    return (
        <ContactsWrapper>
            <Container>
                <ContentBlock>
                    <Subtitle>Давайте приступим к работе?</Subtitle>
                    <Title>Связаться с нами</Title>
                </ContentBlock>
            </Container>


            {/*<ContactsBlock>*/}
            {/*    <Title>ОСТАЛИСЬ ВОПРОСЫ? - ПИШИТЕ</Title>*/}
            {/*    <SubTitle>Мы рады увидеть <span>Вашу</span>  заявку!</SubTitle>*/}
            {/*    <ContactsForm>*/}
            {/*        <InputName type="text" placeholder='Имя'/>*/}
            {/*        <InputEmail type="email" placeholder='E-mail'/>*/}
            {/*        <Input type="phone" placeholder={window.innerWidth >= 426 ? 'Телефон': 'BY  +375(ХХ) ХХХ-ХХ-ХХ'}/>*/}
            {/*        <Textarea placeholder='Комментарий'/>*/}
            {/*        <SubText>*/}
            {/*            Нажимая на кнопку «Отправить», вы даете свое согласие на обработку персональных данных в*/}
            {/*            соответствии с целями указанными в <Link to={ROUTS.WORK_IN_VEON}>Политике обработки персональных данных</Link>*/}
            {/*        </SubText>*/}
            {/*        <ButtonForm type={"button"}>ОТПРАВИТЬ</ButtonForm>*/}
            {/*    </ContactsForm>*/}
            {/*</ContactsBlock>*/}
            {/*<Background>*/}
            {/*    <ImgBg src={Bg} alt="Bg"/>*/}
            {/*</Background>*/}
        </ContactsWrapper>
    );
};

