import styled, {createGlobalStyle} from 'styled-components'

import '../../assets/font/font.css'

export default createGlobalStyle`
  :root {
    /* Typography */
    --family: Montserrat, sans-serif;
    --fs-12: 12px;
    --fs-14: 14px;
    --fs-16: 16px;
    --fs-18: 20px;

    --fw-regular: 400;
    --fw-medium: 500;
    --fw-bold: 700;

    /* Other */
    --radii: 0.5rem;

    /*Colors*/
    --color-dark: #000;
    --color-withe: #fff;
    --color-grey: #393939;
    --color-grey-light: #EAEAEA;
    --color-menu-hover: #79E35E;

    --color-dg-footer: #3D5F47;
  }

  body[data-theme="dark"] {
    --colors-text-dark: #dbe8d3;
    --colors-text-light: #dbe8d3;
    --colors-text-wight: #dbe8d3;
    --colors-text-green: #5db447;
    --color-link: #5bacd2;

    --colors-bg: #535461;
    --colors-bg-grey: #E9E9E9;
    --colors-bg-grey-card-bonuse: #757681;

    --colors-bg-green-dark: rgba(110, 236, 78, 0.15);
    --colors-bg-green: #5DB447;
    --colors-bg-card: #f5f5f5;
    --color-butttom-cookies: rgb(70 71 78);
    --color-bg-green-light: rgb(70 71 78);
    --color-bg-tehno: #535461;
    --opacity: 0;

    --shadow: rgba(245, 245, 245, 0.2) 0 0 8px;
  }

  body[data-theme="light"] {
    --colors-text-dark: #000;
    --colors-text-light: #606060;
    --colors-text-green: #5db447;
    --colors-text-wight: #fff;
    --color-link: #5bacd2;

    --colors-bg: #fff;
    --colors-bg-grey: #E9E9E9;
    --colors-bg-grey-card-bonuse: #fff;
    --colors-bg-green: #6EEC4E;
    --colors-bg-green-dark: rgba(110, 236, 78, 0.15);
    --colors-bg-card: #f5f5f5;
    --color-butttom-cookies: rgb(239 239 239);
    --color-bg-green-light: #E9FCE5;
    --color-bg-tehno: #f5f5f5;
    --opacity: 1;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    user-select: none;
  }


  .fade-enter {
    opacity: 0;
    transform: translateY(20px);
  }

  .fade-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 300ms, transform 300ms;
  }

  .fade-exit {
    opacity: 1;
    transform: translateY(0);
  }

  .fade-exit-active {
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 300ms, transform 300ms;
  }


  html {
    width: 100%;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    border: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :focus,
  :active {
    outline: none;
  }

  html,
  body {
    height: 100%;
  }

  body {
    line-height: 1;
    margin: 0;
    font-family: var(--family);
    font-weight: var(--fw-regular);
    background-color: var(--colors-bg);
    font-size: var(--fs-18);
    transition: all 0.3s;
  }

  input,
  button,
  textarea {
    font-size: inherit;
  }

  button {
    cursor: pointer;
    color: inherit;
    background-color: inherit;
  }

  a {
    color: inherit;
    text-decoration-line: none;
    transition: all 0.3s;
  }

  //a:link,
  //a:visited {
  //  text-decoration: none;
  //}
  a:hover {
    text-decoration: none;
  }

  ul li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: inherit;
    font-size: inherit;
  }
`

export const TitleH2 = styled.h2`
  font-weight: var(--fw-bold);
  font-size: 40px;
  line-height: 1.1;
  color: var(--color-dark);
`
export const TitleH3 = styled.h3`
  font-weight: var(--fw-bold);
  font-size: 24px;
  line-height: 1.3;
  color: var(--colors-text-dark);
`
export const TitleH4 = styled.h4`
  font-weight: var(--fw-bold);
  font-size: 20px;
  line-height: 1.1;
  color: var(--color-dark);
`

export const TextRegular = styled.p`
  font-size: 20px;
  line-height: 1.3;
  color: var(--colors-text-dark);
`
export const TextMedium = styled.p`
  font-size: 20px;
  font-weight: var(--fw-medium);
  line-height: 1.2;
  color: var(--colors-text-dark);
`
