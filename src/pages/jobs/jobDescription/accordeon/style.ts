import styled from "styled-components";
import {Button} from "../../../home/headrMain/style";
import {flexColumn} from "../../../../common/style/mixin";


export const AccordeonWrapper = styled.div`
  ${flexColumn()};
  align-items: flex-start;
  z-index: 0;

 
  @media (max-width: 425px) {
   // font-size: 16px;
  }

  .MuiAccordion-region {
    ${flexColumn()};
    align-items: flex-start;
  }

  .AccordionWrapper {
    background-color: var(--colors-bg);
    color: var(--colors-text-dark);
    box-shadow: none;

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
    @media (max-width: 1024px) {
      margin-right: -200px;
    }
    
    @media (max-width: 768px) {
      margin-right: 0;
    }
  }
`

export const ButtonJob = styled(Button)`
  padding: 15px 20px;
  z-index: 5;
  margin-bottom: 20px;
  position: relative;
  align-self: flex-start;
  font-size: var(--fs-16);
  background: var(--colors-bg-green);
  font-weight: var(--fw-bold);
  line-height: 20px;
  color: var(--colors-text-dark);
  display: flex;
  justify-content: center;
  transition: all 0.3s;
  font-family: var(--family);
  text-transform: uppercase;
  opacity: 1;

  @media (max-width: 852px) {
    font-size: 16px;
    padding: 20px 15px;
  }
  @media (max-width: 720px) {
    align-self: center;
  }

  @media (max-width: 425px) {
    align-self: stretch;
  }
  @media (max-width: 375px) {
    font-size: 14px;
    padding: 15px 10px;
  }

  @media (min-width: 426px) {
    :before {
      background-color: var(--colors-bg-green);
      border: 2px solid var(--colors-bg-green);
      content: "";
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      transition: background-color .3s ease-in-out, border-color .3s ease-in-out, transform .3s ease-in-out;
      width: 100%;
      z-index: -1;
    }

    :hover {
      background: var(--colors-text-wight);
      color: black;
      transition: all 0.3s;

      :before {
        transition: all 0.3s;
        background-color: var(--colors-text-wight);
        transform: scale(1.1);
      }
    }
  }
`

