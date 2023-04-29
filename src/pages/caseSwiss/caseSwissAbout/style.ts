import styled from "styled-components";

type ImageProps = {
    src: string;
};

export const CaseSwissAboutWrapper = styled.div<ImageProps>`
 // padding-top: 350px;
  background: url(${(props) => props.src}) no-repeat center center/cover;
  padding-bottom: 1925px;
  
  @media (max-width: 1600px) {
    background-position: 77% 0;
    padding-bottom: calc(590px + (1925 - 590) * ((100vw - 320px) / (1600 - 320)));
  }
  
`
export const CaseSwissContent = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 50px;
 // margin-top: -150px;
  padding-top: 100px;

  @media (max-width: 1600px) {
    padding-top: calc(30px + (100 - 30) * ((100vw - 320px) / (1600 - 320)));
  }
  
  @media (max-width: 1023px) {
    flex-direction: column;
    row-gap: 30px;
  }
`
export const Text = styled.p`
  font-weight: var(--fw-medium);
  font-size: 40px;
  line-height: 1.3;
  color: var(--color-dark);
 // padding-top: 100px;
  
  
  :nth-child(1) {
    max-width: 798px;
  }
  :nth-child(2) {
    max-width: 721px;
    transform: translateY(90px);
    @media (max-width: 1023px) {
      transform: translateY(0);
    }
  }

  @media (max-width: 1920px) {
    font-size: calc(21px + (40 - 21) * ((100vw - 320px) / (1920 - 320)));
  }


`
