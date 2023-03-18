import styled from "styled-components";

type CookieWrapperProps = {
    isShowCookie: boolean
}
export const CookieWrapper = styled.div<CookieWrapperProps>`
  background: var(--color-butttom-cookies);
  bottom: 0.25rem;
  max-width: calc(100% - 0.5rem);
  visibility: ${({isShowCookie}) => isShowCookie ? 'visible' : 'hidden'};
  opacity: ${({isShowCookie}) => isShowCookie ? '1' : '0'};
  padding: 0.75rem;
  position: fixed;
  left: 0.25rem;
  transition: all 0.3s;
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
  color: var(--colors-text-dark);
  a {
    color: var(--colors-text-green);
  }
  
  @media (min-width: 768px) {
    font-size: 1rem;
    margin: 0 10px 0 0;
  }
  
`
export const Button = styled.button`
  align-items: center;
  background-color: var(--colors-text-green);
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
  @media(max-width: 600px) {
    padding: 10px 5px;
    font-size: 10px;
    min-width: 90px;
  }

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
`