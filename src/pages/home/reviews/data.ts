import Logo1 from "../../../assets/sd.png";
import Logo2 from "../../../assets/pros.png";
import Logo3 from "../../../assets/party.png";
import User1 from "../../../assets/sd.png";
import User2 from "../../../assets/pros.png";
import User3 from "../../../assets/nevil.png";
import User4 from "../../../assets/party.png";

export type reviewDataType = {
    review: string,
    logoComp: string,
    logoUser: string,
    userName: string,
    position: string,
    background: string,
    link: string,
    header: string

}
export const reviewData: reviewDataType[] = [
    {
        review: 'С командой VEON - TECH было очень комфортно работать! Соблюдались все сроки, договоренности, связь была легкой и оперативной. Члены команды показали себя настоящими профессионалами! Перед стартом работы команда изучила продукты, рынок и потребителя. Это помогло нам найти решения, которые в совокупности дали отличный результат и позволили сделать сайт удобным и неповторимым.',
        logoComp: '',
        logoUser: User1,
        userName: 'A. Brown',
        position: 'Art Director',
        background: 'var(--colors-text-green)',
        header: 'LLC "SinaraDesign" (USA, Florida)',
        link: 'services/webDev',
    },
    {
        review: 'Команда Veon-Tech отлично выполнила поставленные задачи. В короткие сроки разработали сайт. Для поддержки используют самое современное программное обеспечение. Мы довольны креативным дизайном, достигнутым с помощью нашего нового бренда и веб-дизайна.',
        logoComp: '',
        logoUser: User2,
        userName: 'F. Coleman',
        position: 'Co-founder',
        background: '#3a3937',
        header: 'Pros NOW',
        link: 'services/webDev',
    },
    {
        review: 'Изначально выбирали из множества компании, но на этапе обсуждения предложений видели, что не у всех хватает компетенций в реализации нашего проекта.\n' +
            'Работа выполнялась всегда в строгом соответствии с ТЗ на высоком профессиональном уровне.\n' +
            'В данный момент проект разработан, которым мы очень довольны.',
        logoComp: '',
        logoUser: User3,
        userName: 'Плютинская К.И.',
        position: 'Исполнительный директор',
        background: '#108fd3',
        header: 'Nevildex Group LTD.',
        link: 'services/webDev',
    },
    {
        review: 'Были приятно удивлены - внимательным погружением в анализ нашего сайта и конкурентов. Получили конструктивное мнение в каком направлении двигаться и как лучше сделать сайт. Работу сделали оперативно, чётко и быстро. Команда постоянно была на связи и все желания учитывала в работе!',
        logoComp: '',
        logoUser: User4,
        userName: 'D. Fisher',
        position: 'Chief executive officer',
        background: '#108fd3',
        header: 'Party Intel',
        link: 'services/webDev',
    },

]