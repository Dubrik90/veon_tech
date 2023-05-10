import User1 from "../../../assets/sd.png";
import User4 from "../../../assets/party.png";
import User3 from "../../../assets/nevil.png";
import {ROUTS} from "../../../common/constans/routs";

export type reviewDataType = {
    review: string,
    logoComp: string,
    logoUser: string,
    entireReview: string,
    userName: string,
    position: string,
    background: string,
    link: string,
    header: string

}
export const reviewData: reviewDataType[] = [
    {
        review: 'It was very comfortable to work with the VEON-TECH team! All deadlines and agreements were met, communication was easy and efficient. The team members proved themselves to be true professionals! Before starting work, the team studied the products, market and consumers. This helped us find solutions that, in combination, produced excellent results and made the website convenient and unique.',
        entireReview: 'С командой VEON - TECH было очень комфортно работать! Соблюдались все сроки, договоренности, связь была легкой и оперативной. Члены команды показали себя настоящими профессионалами! Перед стартом работы команда изучила продукты, рынок и потребителя. Это помогло нам найти решения, которые в совокупности дали отличный результат и позволили сделать сайт удобным и неповторимым.',
        logoComp: '',
        logoUser: User1,
        userName: 'A. Brown',
        position: 'Art Director',
        background: 'var(--colors-text-green)',
        header: 'LLC "SinaraDesign" (USA, Florida)',
        link: ROUTS.CASE_SINARADESING,
    },
    // {
    //     review: 'Команда Veon-Tech отлично выполнила поставленные задачи. В короткие сроки разработали сайт. Для поддержки используют самое современное программное обеспечение. Мы довольны креативным дизайном, достигнутым с помощью нашего нового бренда и веб-дизайна.',
    //     logoComp: '',
    //     logoUser: User2,
    //     userName: 'F. Coleman',
    //     position: 'Co-founder',
    //     background: '#3a3937',
    //     header: 'Pros NOW',
    //     link: '',
    // },
    {
        review: 'Initially, we chose from a variety of companies, but during the proposal discussion phase, we realized that not all of them had the necessary competencies to implement our project. The work was always carried out in strict accordance with the technical specification at a high professional level. At the moment, the project has been developed and we are very satisfied with it.',
        entireReview: 'Изначально выбирали из множества компании, но на этапе обсуждения предложений видели, что не у всех хватает компетенций в реализации нашего проекта.\n' +
            'Работа выполнялась всегда в строгом соответствии с ТЗ на высоком профессиональном уровне.\n' +
            'В данный момент проект разработан, которым мы очень довольны.',
        logoComp: '',
        logoUser: User3,
        userName: 'Плютинская К.И.',
        position: 'Исполнительный директор',
        background: '#108fd3',
        header: 'Nevildex Group LTD.',
        link: '',
    },
    {
        review: 'We were pleasantly surprised by the thorough analysis of our website and competitors. We received constructive feedback on which direction to take and how to improve our website. The work was done promptly, clearly, and quickly. The team was always in touch and took all our wishes into account during the work!',
        entireReview: 'Были приятно удивлены - внимательным погружением в анализ нашего сайта и конкурентов. Получили конструктивное мнение в каком направлении двигаться и как лучше сделать сайт. Работу сделали оперативно, чётко и быстро. Команда постоянно была на связи и все желания учитывала в работе!',
        logoComp: '',
        logoUser: User4,
        userName: 'D. Fisher',
        position: 'Chief executive officer',
        background: '#d31027',
        header: 'Party Intel',
        link:  ROUTS.CASE_PARTY_INTEL,
    },
]