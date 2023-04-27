import React, {useState} from 'react';
import {Day, Hours, HoursBlock, HoursCard, OfficeHoursContent, OfficeHoursWrapper, Title} from "./style";
import {Container} from "../../../common/style/Container";

export type HoursDataType = {
    id: number,
    day: string,
    hours: string
}
export const OfficeHours = () => {
    const [selectedDay, setSelectedDay] = useState(new Date().getDay());

    const hoursData: HoursDataType[] = [
        {
            id: 1,
            day: 'Понедельник',
            hours: '9:00-17:00'
        },
        {
            id: 2,
            day: 'Вторник',
            hours: '9:00-17:00'
        },
        {
            id: 3,
            day: 'Среда',
            hours: '9:00-17:00'
        },
        {
            id: 4,
            day: 'Четверг',
            hours: '9:00-17:00'
        },
        {
            id: 5,
            day: 'Пятница',
            hours: '9:00-17:00'
        },
        {
            id: 6,
            day: 'Суббота',
            hours: 'выходной'
        },
        {
            id: 0,
            day: 'Воскресение',
            hours: 'выходной'
        },
    ]

    return (
        <OfficeHoursWrapper>
            <Container>
                <OfficeHoursContent>
                    <Title>Время работы:</Title>
                    <HoursBlock>
                        {hoursData.map(el => (
                            <HoursCard key={el.id}
                                       className={selectedDay === el.id ? 'active_day' : ''}>
                                <Day>{el.day}</Day>
                                <Hours>{el.hours}</Hours>
                            </HoursCard>
                        ))}
                    </HoursBlock>
                </OfficeHoursContent>
            </Container>
        </OfficeHoursWrapper>
    );
};

