import styled from "styled-components";
import {flexColumn} from "../../../common/style/mixin";

export const OfficeHoursWrapper = styled.div`
  padding-top: calc(30px + (40 - 30) * ((100vw - 320px) / (1920 - 320)));
  padding-bottom: calc(30px + (40 - 30) * ((100vw - 320px) / (1920 - 320)));


`
export const OfficeHoursContent = styled.div`
  ${flexColumn()};
  justify-content: center;
  align-items: center;
  row-gap: calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)));
`

export const Title = styled.h4`
  font-weight: var(--fw-bold);
  font-size: calc(16px + (28 - 16) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.3;
  color: var(--colors-text-dark);
`
export const HoursBlock = styled.div`
  display: flex;
  column-gap: calc(5px + (25 - 5) * ((100vw - 320px) / (1920 - 320)));

  @media(max-width: 588px) {
    row-gap: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 400px;
    
  }
`
export const HoursCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0 4px 4px;
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
`
export const Day = styled.p`
  color: var(--colors-text-dark);
  font-weight: var(--fw-bold);
  font-size: calc(11px + (14 - 11) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.3;
  
  .active_day & {
    color: var(--color-withe);
  }

`
export const Hours = styled.p`
  color: var(--colors-text-dark);
  text-align: center;
  font-weight: var(--fw-medium);
  font-size: calc(10px + (14 - 10) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.3;
  
  .active_day & {
    color: var(--color-withe);
  }
`