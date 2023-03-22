import styled from "styled-components";

export const BreadcrumbsWrapper = styled.div`
  display: flex;
  column-gap: 8px;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: var(--color-dark);
  transition: color 0.3s;
  @media (max-width: 632px) {
    align-self: flex-end;
    margin-bottom: 50px;
  }
  @media (max-width: 526px) {
    margin-bottom: 30px;
  }
  
  a:hover {
    color: var(--colors-text-green);
  }
`

export const Category = styled.div`
    :after {
        content: '/';
        width: 2px;
        padding-left: 10px;
    }
`
export const PageName = styled.div`
    
`
