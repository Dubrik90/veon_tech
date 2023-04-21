import styled from "styled-components";
import {TitleH3} from "../../../common/style/global";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export const WorkUsWrapper = styled.div`
  padding: 72px 0 60px 0;
 // background-color: rgba(110, 236, 78, 0.15);

  @media (max-width: 768px) {
    padding: 40px 0 40px 0;
  }
`

export const WorkUsContent = styled.div`
  
`
export const ArrowIcon = styled(ExpandMoreIcon)`
  position: absolute;
  bottom: -18px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.5rem!important;
  //width: 35px !important;
  //height: 35px !important;
  z-index: 10;
  
  
  
  path {
    fill: var(--colors-text-green);
  }
`
export const Title = styled.h3`
 // text-align: center;
  font-weight: var(--fw-bold);
  font-size: calc(30px + (56 - 30) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.4;
  color: var(--colors-text-dark);
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
  
`
export const CardBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  // gap: 25px;

  //@media(max-width: 1018px) {
  //  grid-template-columns: repeat(1, 1fr);
  //}
  @media (max-width: 767px) {
    margin: 0 -15px;
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }

  span {
    content: '';
    position: absolute;
    bottom: -18px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 70px;
    background-color: var(--colors-bg);
    border-radius: 100%;
    
    @media (max-width: 767px) {
      height: 40px;
    }

  }

`

