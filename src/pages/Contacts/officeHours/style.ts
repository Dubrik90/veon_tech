import styled from "styled-components";
import {flexColumn} from "../../../common/style/mixin";

export const OfficeHoursWrapper = styled.div`


`
export const OfficeHoursContent = styled.div`
  ${flexColumn()};
 // row-gap: 25px;
  justify-content: center;
  align-items: center;
  row-gap: calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)));


`
export const Title = styled.h4`
  font-weight: var(--fw-bold);
  font-size: 28px;
  line-height: 1.3;
  color: var(--colors-text-dark);
`
export const HoursBlock = styled.div`
  display: flex;
  column-gap: calc(5px + (25 - 5) * ((100vw - 320px) / (1920 - 320)));

  @media(max-width: 552px) {
   // display: grid;
  //  grid-template-columns: repeat(5, 1fr);
  //  grid-template-rows: repeat(5, 1fr);
    row-gap: 10px;
   // align-items: center;
   // justify-content: center;
    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
  }
`
export const HoursCard = styled.div`
  box-shadow: 2px 4px 20px 2px rgba(0, 0, 0, 0.25);
  background: var(--colors-bg);
  ${flexColumn()};
  padding-top: calc(5px + (7 - 5) * ((100vw - 320px) / (1920 - 320)));
  padding-bottom: calc(5px + (7 - 5) * ((100vw - 320px) / (1920 - 320)));
  padding-left: calc(4px + (8 - 4) * ((100vw - 320px) / (1920 - 320)));
  padding-right: calc(4px + (8 - 4) * ((100vw - 320px) / (1920 - 320)));
 
  row-gap: 6px;
  align-items: center;
  justify-content: center;
  border-radius: 3px;

  &.active_day {
    background: var(--colors-text-green);
  }
  
  :nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;
  }
  :nth-child(2) {
    grid-area: 1 / 2 / 2 / 3;
  }
  :nth-child(3) {
    grid-area: 1 / 3 / 2 / 4;
  }
  :nth-child(4) {
    grid-area: 1 / 4 / 2 / 5;
  }
  :nth-child(5) {
    grid-area: 1 / 5 / 2 / 6;
  }
  :nth-child(6) {
    grid-area: 2 / 2 / 3 / 3;
  }
  :nth-child(7) {
    grid-area: 2 / 4 / 3 / 5;
  }
`
export const Day = styled.p`
  color: var(--colors-text-dark);
  font-weight: var(--fw-bold);
  font-size: calc(8px + (14 - 8) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.3;
  
  .active_day & {
    color: var(--color-withe);
  }

`
export const Hours = styled.p`
  color: var(--colors-text-dark);
  font-weight: var(--fw-medium);
  font-size: calc(8px + (14 - 8) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.3;
  
  .active_day & {
    color: var(--color-withe);
  }
`