import Logo1 from "../../../assets/logo1.jpg";
import Logo2 from "../../../assets/logo2.png";
import Logo3 from "../../../assets/logo3.jpg";
import User1 from "../../../assets/user1.jpg";
import User2 from "../../../assets/user2.jpg";
import User3 from "../../../assets/user3.jpg";

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
        review: 'Начиная с момента бизнес-анализа успешных банковских продуктов и составления ТЗ и\n' +
            '                                    заканчивая программной разработкой, компания «Новый Сайт» на всех этапах\n' +
            '                                    демонстрировала\n' +
            '                                    высокую компетенцию и постоянную вовлеченность в проект, креативный подход к каждому\n' +
            '                                    бизнес-требованию и предлагала действительно свежие и понятные решения в разработке\n' +
            '                                    сайта.',
        logoComp: Logo1,
        logoUser: User1,
        userName: 'Д.В. Гуща',
        position: 'Менеджер проектов «Альфа-Банк»',
        background: 'var(--colors-text-green)',
        header: 'Альфа-Банк',
        link: 'services/webDev',
    },
    {
        review: 'ОАО «Галантэя» — крупнейший производитель кожгалантерейных изделий в Республике\n' +
            '                                    Беларусь. В рамках предприятия производится разнообразный ассортимент аксессуаров:\n' +
            '                                    от\n' +
            '                                    портмоне, ремня и ключницы до сумки, портфеля и чемодана — на все случаи жизни.',
        logoComp: Logo2,
        logoUser: User2,
        userName: 'А.В. Гливинская',
        position: 'Заместитель директора по маркетингу и продажам',
        background: '#3a3937',
        header: 'Галантэя',
        link: 'services/webDev',
    },
    {
        review: ' «Планета Здоровья» — одна из крупнейших аптечных сетей на рынке Беларуси. Более 300\n' +
            '                                    аптек в разных городах республики, более 15000 товаров в ассортименте и сотни\n' +
            '                                    тысяч\n' +
            '                                    покупателей.',
        logoComp: Logo3,
        logoUser: User3,
        userName: 'Е.В. Голынникова',
        position: 'Директор',
        background: '#108fd3',
        header: 'Планета Здоровья',
        link: 'services/webDev',
    },

]