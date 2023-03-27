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

  .MuiAccordion-region {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .AccordionWrapper {
    background-color: var(--colors-bg);
    color: var(--colors-text-dark);
    box-shadow: none;

    :before {
      display: none;
    }

    svg {
      fill: var(--colors-text-dark);
    }
  }

  .AccordionHeader:hover {
    background-color: var(--colors-text-green);
    color: var(--color-grey-light);
    transition: all 0.3s;

    svg {
      fill: var(--color-grey-light);

    }
  }

  .AccordionDetails {
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
  z-index: 5;
  margin-bottom: 20px;
`

