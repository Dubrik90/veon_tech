import styled from "styled-components";

export const FilterBlockWrapper = styled.div`
  padding: 20px 0;

`
export const FilterMenuList = styled.ul`
  display: flex;
  column-gap: 15px;
  align-items: center;
  justify-content: center;

  @media (max-width: 796px) {
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 10px;
    column-gap: 15px;
  }
  @media (max-width: 390px) {
    flex-direction: column;
    justify-content: space-around;
    
  }
  
  .activeFilter {
    transition: color 0.3s;
    color: var(--colors-text-green);
  }

`

export const MenuItem = styled.li`
  font-weight: var(--fw-medium);
  font-size: 16px;
  line-height: 130%;
  color: var(--colors-text-dark);
  opacity: 0.58;
  position: relative;
  padding: 0 15px;
  cursor: pointer;


  :not(:last-child) {
    :after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: -20px;
      width: 22px;
      height: 2px;
      background-color: var(--colors-text-dark);
      opacity: 0.58;
      @media (max-width: 1024px) {
        width: 15px;
        right: -16px;
      }
      @media (max-width: 796px) {
        display: none;
      }
    }
  }

  @media (max-width: 1024px) {
    font-size: 13px;
    padding: 0 5px;
  }
  
  @media (max-width: 796px) {
    padding: 0;
  }
  
  
  


`

