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
                <TitleHeader className='animate'>You can trust us</TitleHeader>
                <ContentBlock>
                    <div className="parent">
                        <div className="div1 animate">
                            <Title>We restrict access to information</Title>
                            <Text>We determine the procedures for accessing commercial information and establish controls to ensure compliance.</Text>
                        </div>
                        <div className="div2 animate">
                            <Title>We keep a record of those who have access</Title>
                            <Text>This helps identify any violators who disclose commercial secrets or gain unauthorized access to them.</Text>
                        </div>
                        <div className="div3 animate">
                            <Title>We establish a regime of commercial secrecy in documents</Title>
                            <Text>All employees have signed a non-disclosure agreement regarding commercial secrets and will be held accountable for any violations.</Text>

                        </div>
                        <div className="div4 animate">
                            <Title>We have created conditions to ensure compliance with the regime of commercial secrecy</Title>
                            <Text>We determine the procedures for accessing commercial information and establish controls to ensure compliance.</Text>
                        </div>
                        <div className="div5"><LockIcon className={'LockIcon'}/></div>
                    </div>
                </ContentBlock>
            </Container>
        </ContentWrapper>
    );
};

