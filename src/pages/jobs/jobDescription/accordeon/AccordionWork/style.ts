import styled from "styled-components";
import {TitleH4} from "../../../../../common/style/global";


export const TitleWork = styled.h3`
  font-size: 28px;
  font-weight: var(--fw-bold);
  @media (max-width: 960px) {
    font-size: 24px;
  }

`
export const DescWrapper = styled.div`

`
export const Title = styled(TitleH4)`
  margin-bottom: 20px;
  font-size: 24px;
  color: var(--colors-text-dark);
  font-weight: var(--fw-medium);
  @media (max-width: 768px) {
    font-size: 20px;
  }

  //@media (max-width: 960px) {
  //  font-size: 20px;
  //}
  //@media (max-width: 425px) {
  //  margin-bottom: 10px;
  //  font-size: 18px;
  //}
`
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgb(217, 217, 217);
  padding-bottom: 15px;
  // row-gap: 5px;
  @media (max-width: 425px) {
    padding-left: 25px;
  }

`
export const LinkItem = styled.li`
  font-size: 20px;
  line-height: 1.3;
  list-style-type: disc;

  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 425px) {

    //  font-size: 13px;
  }

`

