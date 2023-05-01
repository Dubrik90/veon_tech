import React, {useState} from 'react';
import {Clouse, Content, ModalReviewWrapper, WrapperCenter} from "./style";
import {Container} from "../../style/Container";
import {reviewDataType} from "../../../pages/home/reviews/data";
import {Link} from "react-router-dom";
import {useScrollBlock} from "../../hook/use-scroll-block";


interface ModalProps {
    reviewData: reviewDataType | null
    isOpen: boolean | null;
    onRequestClose: () => void | null;

}

export const ModalReview: React.FC<ModalProps> = ({isOpen, onRequestClose, reviewData}) => {
    const [modalIsOpen, setModalIsOpen] = useState(isOpen);
    const [blockScroll, allowScroll] = useScrollBlock();

    const handleCloseModal = () => {
        setModalIsOpen(false);
        onRequestClose();
    };
    const onClickAddScroll = () => {
        allowScroll()
    }

    return (
        <ModalReviewWrapper onClick={handleCloseModal} isOpen={isOpen}>
            <WrapperCenter onClick={(e) => e.stopPropagation()} style={{backgroundColor: reviewData?.background}}>
                <Container>
                    <Content>
                        <Clouse onClick={handleCloseModal}>
                            <span></span>
                            <span></span>
                        </Clouse>
                        <div className="modal-review">
                            <div className="feedback__line">
                                <div className="feedback__block">
                                    {/*<span className="feedback_img">*/}
									{/*     <img src={reviewData?.logoComp}*/}
                                    {/*          className="feedback_img" loading="lazy"/>*/}
								    {/*</span>*/}
                                    <img src={reviewData?.logoUser}
                                         className="feedback_img" loading="lazy"/>
                                    <div className="feedback__person">
                                        <div className="feedback__name">{reviewData?.userName}</div>
                                        <div className="feedback__position">{reviewData?.position}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-review__content">
                                <div className="h4 modal-review__title">
                                    {reviewData?.review}
                                </div>
                                <div className="text-content modal-review__description">
                                    {/*<p>*/}
                                    {/*    {reviewData?.review}*/}
                                    {/*</p>*/}
                                </div>
                            </div>
                        </div>
                        <Link onClick={onClickAddScroll} to={reviewData?.link ? reviewData?.link : ''}>
                            Посмотреть кейс
                        </Link>
                    </Content>
                </Container>
            </WrapperCenter>
        </ModalReviewWrapper>
    );
};

