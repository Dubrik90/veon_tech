import styled from "styled-components";


export const TitleWork = styled.h3`

`
export const DescWrapper = styled.div`

`
export const Title = styled.div`
  font-weight: var(--fw-bold);
  font-size: 20px;
  line-height: 164%;
  margin-bottom: 20px;
  @media (max-width: 960px) {
    font-size: 18px;
  }
  @media (max-width: 425px) {
    margin-bottom: 10px;
    font-size: 14px;
  }
`
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  // row-gap: 5px;
  @media (max-width: 425px) {
    padding-left: 25px;
  }

`
export const LinkItem = styled.li`
  font-size: 18px;
  line-height: 140%;
  list-style-type: disc;
  @media (max-width: 960px) {
    font-size: 16px;
  }
  @media (max-width: 425px) {

    font-size: 13px;
  }

`

