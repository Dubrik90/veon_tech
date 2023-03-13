import styled from "styled-components";

type CookieWrapperProps = {
    isShowCookie: boolean
}
export const CookieWrapper = styled.div<CookieWrapperProps>`
  background: #535461;
  bottom: 0.25rem;
  max-width: calc(100% - 0.5rem);
  visibility: ${({isShowCookie}) => isShowCookie ? 'visible' : 'hidden'};
  opacity: ${({isShowCookie}) => isShowCookie ? '1' : '0'};
  padding: 0.75rem;
  position: fixed;
  left: 0.25rem;
  transition: all 0.3s;
  //transition: background-color var(--colors-bg),visibility var(--transition),opacity var(--transition);
  z-index: 100;
  
  @media (min-width: 768px) {
    bottom: 1rem;
    max-width: calc(100% - 2rem);
    padding: 1.5rem;
    left: 1rem;
  }
  
`

export const CookieContent = styled.div`
  display: flex;
  align-items: center;
`
export const Text = styled.p`
  font-size: .75rem;
  line-height: 1.333333em;
  margin: 0 1.5rem 0 0;
  color: #dbe8d3;
  a {
    color: #e84419;
  }
  
  @media (min-width: 768px) {
    font-size: 1rem;
    margin-right: 2rem;
  }
  
`
export const Button = styled.button`
  align-items: center;
  background-color: #e84419;
  border: none;
  cursor: pointer;
  display: flex;
  font-size: .875rem;
  font-weight: 600;
  justify-content: center;
  letter-spacing: .07em;
  line-height: 1em;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: color .3s ease-in-out;
  z-index: 1;
  
  
  min-height: 2.75rem;
  padding: 0.75rem 1.5rem;
  width: auto;
  color: #fff;
`