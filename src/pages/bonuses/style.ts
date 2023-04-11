import styled from "styled-components";
import {flexColumn} from "../../common/style/mixin";

export const BonusesWrapper = styled.div`
  background: var(--colors-bg-green-dark);
`
export const BonusesCardsBlock = styled.ol`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);

  // grid-template-columns: repeat(auto-fit, minmax(250px, 458px));
  // display: flex;
  // flex-wrap: wrap;
  justify-content: center;
  max-width: 1490px;
  margin: 0 auto;
  column-gap: calc(15px + (50 - 15) * ((100vw - 768px) / (1920 - 768)));
  //column-gap: calc(20px + (50 - 20) * ((100vw - 768px) / (1920 - 768)));
  row-gap: 80px;
  padding-top: calc(100px + (200 - 100) * ((100vw - 768px) / (1920 - 768)));
  padding-bottom: calc(50px + (100 - 50) * ((100vw - 768px) / (1920 - 768)));

  @media (max-width: 768px) {
    display: none;
  }
`
export const BonusesContent = styled.div`
  background: var(--colors-bg);
  padding-top: calc(30px + (44 - 30) * ((100vw - 320px) / (1920 - 320)));
  padding-bottom: calc(40px + (100 - 40) * ((100vw - 320px) / (1920 - 320)));
`

export const TextBlock = styled.div`
  ${flexColumn()};
  row-gap: 20px;
`
export const Text = styled.p`
  font-weight: var(--fw-medium);
  font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1920 - 320)));
  line-height: 145.5%;
  color: var(--colors-text-dark);
`




