import styled from "styled-components";
import {Button} from "../../../home/headrMain/style";

export const AccordeonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
 // row-gap: 15px;
  z-index: 0;
  @media (max-width: 768px) {
   // align-items: stretch;
  }
  @media (max-width: 425px) {
    font-size: 16px;
  }
  
  
  
  .css-1elwnq4-MuiPaper-root-MuiAccordion-root {
    background-color: var(--colors-bg);
    color: var(--colors-text-dark);
    box-shadow: none;
    :before {
      display: none;
    }
    .css-i4bv87-MuiSvgIcon-root {
      fill: var(--colors-text-dark);
    }
  }
  .css-pwcg7p-MuiCollapse-root {
    @media (max-width: 988px) {
      margin-right: -250px;
    }
    @media (max-width: 632px) {
      margin-right: 0;
    }
  }
`

export const ButtonJob = styled(Button)`
  padding: 15px 20px;
  @media (max-width: 632px) {
    display: none;
  }
`

