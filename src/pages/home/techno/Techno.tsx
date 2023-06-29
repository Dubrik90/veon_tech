import React from 'react';
import {TechnoBlock, TechnoContent, TechnoText, TechnoWrapper} from './style';
import {Container} from "../../../common/style/Container";
import {Title} from "../methodology/style";
import {C, LaravelIcon, ReactIcon} from "./assets";

export const Techno = () => {
    return (
        <TechnoWrapper >
            <Container>
                <Title className='animate'>Большой опыт разработки проектов различной сложности</Title>
                <TechnoContent>
                    <TechnoBlock className='animate'>
                        <svg viewBox="0 0 464 372">
                            <path d="M164 154L18 46.9999L19.1823 45.3867L165.182 152.387L164 154Z"/>
                            <path d="M403 310L337 274L337.958 272.244L403.958 308.244L403 310Z"/>
                            <path d="M11 353L415.991 27.0742L417.245 28.6323L12.2539 354.558L11 353Z"/>
                        </svg>
                        <figure>
                            <LaravelIcon/>
                            {/*<img src={Laravel} alt='image' loading="lazy"/>*/}
                        </figure>
                        <figure>
                            <C/>
                            {/*<img src={C} alt='image' loading="lazy"/>*/}
                        </figure>
                        <figure>
                            <ReactIcon/>
                            {/*<img src={ReactIcon} alt='image' loading="lazy"/>*/}
                        </figure>
                    </TechnoBlock>
                    <TechnoText className='animate'>
                        VEON-TECH стремится помогать компаниям со всего мира расти, повышать производительность, оптимизировать бизнес-процессы и опережать конкурентов. <br/> Всякий раз, когда Вашему бизнесу требуется новый инструмент или продукт, мы применяем наши знания и навыки для реализации интеллектуального и надежного решения по конкурентоспособной цене.
                    </TechnoText>
                </TechnoContent>

            </Container>

        </TechnoWrapper>
    );
};

