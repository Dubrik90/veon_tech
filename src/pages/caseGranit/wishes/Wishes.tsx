import React from 'react';
import {ContentBlock, WishesWrapper} from './style';
import bak1 from '../assets/bak1.webp'
import {Container} from "../../../common/style/Container";

export const Wishes = () => {
    return (
        <WishesWrapper src={bak1}>
            <Container>
                <ContentBlock>
                    <div className="parent">
                        <div className="div1">Заказчика очень беспокоил дизайн сайта. Задача состояла сделать сайт
                            «круче». Для Заказчика важно визуальное восприятие, чтоб глазу было приятно смотреть и
                            удобный интерфейс.
                        </div>
                        <div className="div2">У Заказчика было общее понимание по наполнению, дизайну и цветовой гамме.
                            Заказчику было намного удобней просто на бумаге нарисовать расположение всех блоков,
                            расписать чертеж, а мы уже на основании чертежа составили ТЗ.
                        </div>
                    </div>
                </ContentBlock>
            </Container>
        </WishesWrapper>
    );
};

