import {useState} from 'react'
import {Container} from '../../../common/style/Container'
import {Button, HeadrMainWrapper, SubTitle, Title} from './style'


export const HeadrMain = () => {

    const [view, setView] = useState(false)
    const openModal = () => {
        setView(true)
    }
    const closeModal = () => {
        setView(false)
    }

    return (
        <Container>
            <HeadrMainWrapper>
                <Title><span>Ваш </span>успех начинается <span>здесь</span></Title>
                <SubTitle>
                    Создаем по-настоящему эффективные сайты: внедряем актуальные IT разработки, уделяем максимум
                    внимания дизайну и удобству.
                </SubTitle>
                <Button onClick={openModal}>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</Button>
            </HeadrMainWrapper>

        </Container>


    )
}
