import React from 'react';
import {Block1, Block2, Block3, Block4, ContentBlock, ContentWrapper, Text, Title, TitleHeader} from './style';
import {Container} from '../../../common/style/Container';
import LockIcon from '@mui/icons-material/Lock';


export const Content = () => {

    const arrayData = [
        {
            title: 'Ограничиваем доступ к информации',
            text: 'Определяем порядок доступа к коммерческой информации и устанавливаем контроль за его соблюдением'
        },
        {
            title: 'Ведём учет тех, кто получил доступ',
            text: 'Это позволяет установить нарушителя, разгласившего коммерческую тайну, или того, кто неправомерно получил к ней доступ'
        },
        {
            title: 'Устанавливаем режим коммерческой тайны в документах',
            text: 'Все сотрудники подписали договор о неразглашении коммерческой тайны и понесут ответственность при его нарушении'
        },
        {
            title: 'Создали условия для соблюдения режима коммерческой тайны',
            text: 'Определяем порядок доступа к коммерческой информации и устанавливаем контроль за его соблюдением',
        },
    ]


    return (
        <ContentWrapper>
            <Container>
                <TitleHeader className='animate'>Вы можете нам доверять</TitleHeader>
                <ContentBlock>
                    <div className="parent">
                        <div className="div1 animate">
                            <Title>Ограничиваем доступ к информации</Title>
                            <Text>Определяем порядок доступа к коммерческой информации и устанавливаем контроль за его соблюдением</Text>
                        </div>
                        <div className="div2 animate">
                            <Title>Ведём учет тех, кто получил доступ</Title>
                            <Text>Это позволяет установить нарушителя, разгласившего коммерческую тайну, или того, кто
                                неправомерно получил к ней доступ</Text>
                        </div>
                        <div className="div3 animate">
                            <Title>Устанавливаем режим коммерческой тайны в документах</Title>
                            <Text>Все сотрудники подписали договор о неразглашении коммерческой тайны и понесут
                                ответственность при его нарушении</Text>

                        </div>
                        <div className="div4 animate">
                            <Title>Создали условия для соблюдения режима коммерческой тайны</Title>
                            <Text>Определяем порядок доступа к коммерческой информации и устанавливаем контроль за его
                                соблюдением</Text>
                        </div>
                        <div className="div5"><LockIcon className={'LockIcon'}/></div>
                    </div>
                </ContentBlock>
            </Container>
        </ContentWrapper>
    );
};

