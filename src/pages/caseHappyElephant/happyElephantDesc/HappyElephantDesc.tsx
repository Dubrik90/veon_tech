import React from 'react';
import {ElephantDescContent, HappyElephantDescWrapper, ImageBlock, Img, Text} from './style';
import {Container} from '../../../common/style/Container';
import MobileImg from '../assets/elephantMobile.webp'

export const HappyElephantDesc = () => {
    return (
        <HappyElephantDescWrapper>
            <Container>
                <ElephantDescContent>
                    <Text>Бэк эндом является 1С, управляющая календарями и записями. <br/> Пользователи работают с календарями в различных фронт-системах. </Text>
                    <ImageBlock>
                        <Img src={MobileImg} alt={'mobile image'}/>
                    </ImageBlock>
                    <Text>Одним из ключевых требований заказчика была Адаптивность. <br/> С задачей мы справились успешно! <br/>Проект работает как в десктопной, так и мобильной версиях.</Text>
                </ElephantDescContent>
            </Container>
        </HappyElephantDescWrapper>
    );
};

