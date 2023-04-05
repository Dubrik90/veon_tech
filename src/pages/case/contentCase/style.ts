import styled from "styled-components";
import {TextMedium, TitleH3} from "../../../common/style/global";

export const ContentCaseWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`
export const Title = styled(TitleH3)`
  
  @media (max-width: 425px) {
    font-size: 18px;
  }
  @media (max-width: 375px) {
    font-size: 16px;
  }
`
export const Text = styled(TextMedium)`

  :not(:last-child) {
    margin-bottom: 50px;
  }


  @media (max-width: 425px) {
    font-size: 16px;
    
    :not(:last-child) {
      margin-bottom: 30px;
    }
  }
  @media (max-width: 425px) {
    font-size: 14px;
  }
`
export const ImageBlock = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
  margin-bottom: 80px;
  @media (max-width: 425px) {
    margin-bottom: 30px;
  }
`
export const Img = styled.img`
  max-width: 100%;
`







