import React, {useState} from 'react';
import {
    AccordionBtn, AccordionContent, AccordionContentWrap, AccordionDesk,
    AccordionItem,
    AccordionListInner, AccordionListTop,
    AccordionText, ListBtn, PrinciplesAccordeon, PrinciplesWrapper, Title, TitleList
} from "./style";
import {Container} from "../../../common/style/Container";
import {Clouse} from "../../../common/components/modalReview/style";

export const Principles = () => {
    const [activeAccordeonItem, setActiveAccordeonItem] = useState<string | null>(null);

    const accordionData = [
        {
            id: '0',
            title: 'Performance',
            text: 'We guarantee maximum performance and development speed. We utilize proven and modern technologies and project management methodologies. Our team is always open to new solutions and ready to quickly adapt to market changes in order to deliver the best results to our clients.'
        },
        {
            id: '1',
            title: 'Niche research',
            text: 'For over 5 years, we have been providing high-quality outsourcing services in the field of web development. However, we don\'t adhere to a one-size-fits-all approach when it comes to creating web resources. We pay meticulous attention to internal and external market analysis for each client, allowing us to apply the best practices and international expertise of our team members and partners.'
        },
        {
            id: '2',
            title: 'Development prospects',
            text: 'We never rest on our laurels and always look towards the future. Our team plans to work closely with the client on an ongoing basis. We determine the sequence of development stages that will help lead the client\'s business to success. It is this approach that guarantees the acquisition of effective tools and constant improvement of results. Our business is to grow together with our clients.'
        },
        {
            id: '3',
            title: 'Limitless possibilities',
            text: 'Our commercial experience in various industries allows us to be prepared for any challenges and overcome difficulties. We are always on the lookout for new opportunities and open to working on multifunctional projects of different orientations. Whether it\'s a complex web resource or a unique application, we are ready to take on the challenge and help you achieve success.'
        },
    ]
    const [activeItem, setActiveItem] = useState()

    const onClickToggleHandler = (ind: string) => {
        if(ind == activeAccordeonItem) {
          return  setActiveAccordeonItem(null)
        }
        setActiveAccordeonItem(ind)
    }

    return (
        <PrinciplesWrapper>
            <Container>
                <Title className={'animate'}>Operating Principles</Title>
                <PrinciplesAccordeon>
                    {accordionData.map((el, index) => (
                        <AccordionItem className={activeAccordeonItem === el.id ? 'open' : ''} key={el.id} onClick={()=>onClickToggleHandler(el.id)}>
                            <AccordionListTop>
                                <TitleList>{el.title}</TitleList>
                                <ListBtn></ListBtn>
                            </AccordionListTop>
                            <AccordionListInner>
                                <AccordionBtn>
                                    <AccordionDesk>
                                        <span></span>
                                        <span></span>
                                    </AccordionDesk>
                                </AccordionBtn>
                                <AccordionContent className={activeAccordeonItem === el.id ? 'open' : ''}>
                                    <AccordionContentWrap>
                                        <AccordionText>
                                            {el.text}
                                        </AccordionText>
                                    </AccordionContentWrap>
                                </AccordionContent>
                            </AccordionListInner>
                        </AccordionItem>
                    ))}
                </PrinciplesAccordeon>
            </Container>
        </PrinciplesWrapper>
    );
};

