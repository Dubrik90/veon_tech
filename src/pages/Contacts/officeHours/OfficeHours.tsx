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
            day: 'Monday',
            hours: '9:00AM-5:00PM'
        },
        {
            id: 2,
            day: 'Tuesday',
            hours: '9:00AM-5:00PM'
        },
        {
            id: 3,
            day: 'Wednesday',
            hours: '9:00AM-5:00PM'
        },
        {
            id: 4,
            day: 'Thursday',
            hours: '9:00AM-5:00PM'
        },
        {
            id: 5,
            day: 'Friday',
            hours: '9:00AM-5:00PM'
        },
        {
            id: 6,
            day: 'Saturday',
            hours: 'Closed'
        },
        {
            id: 0,
            day: 'Sunday',
            hours: 'Closed'
        },
    ]

    return (
        <OfficeHoursWrapper>
            <Container>
                <OfficeHoursContent>
                    <Title>Office Hours:</Title>
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

