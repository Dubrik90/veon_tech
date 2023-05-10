import {SliderReviews} from "../../../common/components/sliderReviews"
import {Container} from "../../../common/style/Container"
import {Line, ReviewsWrapper, Title} from "./style"


 const Reviews = () => {
    return (
        <ReviewsWrapper>
            {/*<Container>*/}
            {/*    <Title className='animate'>Отзывы</Title>*/}
            {/*</Container>*/}
            <SliderReviews/>
            {/*<Container>*/}
            {/*    <Line></Line>*/}
            {/*</Container>*/}
        </ReviewsWrapper>
    )

}

export default Reviews