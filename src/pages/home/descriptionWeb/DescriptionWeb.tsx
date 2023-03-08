import {Container} from '../../../common/style/Container';
import {Arrow} from './assets';
import {devData} from '../data';
import {CurrentDev} from './currentDev/CurrentDev';
import {ButtonArrow, CurrentDevWrapper, SubTitle} from './currentDev/style';
import {
    AboutText,
    CardImageMobile,
    Cards,
    CardsMobile,
    DescriptionWebBlock,
    DescriptionWebContent,
    DescriptionWebWrapper,
    Title,
    TitleMobile
} from './style';


export const DescriptionWeb = () => {

    return (
        <DescriptionWebWrapper>
            <Container>
                <DescriptionWebContent>
                    <DescriptionWebBlock>
                        <Title>
                            <span>WEB-студия</span> <br/> полного цикла
                        </Title>
                        <AboutText>
                            Команда профессиональных специалистов <span>VEON-TECH</span> предоставляет широкий спектр
                            услуг в области
                            веб-разработки: лидогенерация, поисковая SEO оптимизация, контекстная реклама,
                            таргетированная реклама в
                            социальных сетях, создание и правка сайтов, управление репутацией, настройка и внедрение
                            CRM, написание
                            продающих текстов, наполнение веб-сайтов, технические и юзабилити аудиты, брендинг и
                            дизайн.
                        </AboutText>
                        <AboutText>
                            Digital агентство <span>VEON-TECH</span> предлагает комплексную стратегию в формате
                            performance marketing.
                            Понимаем цели каждого клиента и подбираем инструменты для их достижения. Работаем на
                            успешность и результат для
                            вашего бизнеса. Готовы помочь увеличить узнаваемость бренда, привлечь целевых посетителей,
                            обеспечить рост количества
                            звонков и заявок.
                        </AboutText>
                    </DescriptionWebBlock>
                    <Cards>
                        {devData.map((el, index) => <CurrentDev key={index} card={el}/>)}
                    </Cards>
                    <CardsMobile>
                        <CurrentDevWrapper>
                            <CardImageMobile>
                                {devData.map((el, index) => <img key={index} src={el.img} alt="img"/>)}
                            </CardImageMobile>
                            <TitleMobile>Разработка сайтов</TitleMobile>
                            <SubTitle>Мы не просто создаем веб-сайты, мы создаем веб-сайты, которые ПРОДАЮТ</SubTitle>
                            <ButtonArrow>
                                Узнать подробнее
                                <Arrow/>
                            </ButtonArrow>
                        </CurrentDevWrapper>
                    </CardsMobile>

                </DescriptionWebContent>
            </Container>
        </DescriptionWebWrapper>
    );
};
