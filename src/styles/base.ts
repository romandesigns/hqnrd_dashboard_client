import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box !important;
}

html {
  font-size: 62.5% !important
  }

  html, body, #__next {
    height: 100%;
    margin:0;
    padding:0;
  }

  body {
    margin: 0;
    padding: 0;
    font:normal normal 1.6rem/var(--line-height) var(--sans);
    color: var(--color);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
    background:url('/assets/img/jpg/home/billboard/HQNRD-building-exterior.jpg') no-repeat center center;
    background-size:cover;
    position: relative;
    // padding: var(--padding);
    // overflow: hidden;


    &::before {
      content:"";
      position: absolute;
      top:0;
      right:0;
      left:0;
      bottom:0;
      width:100%;
      height:100%;
      backdrop-filter: blur(25px);
      background-color: rgba(0,0,0,0.7);
      z-index:-1;
     }

  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  h2,h3,h4,h5,h6 {
    text-decoration: underline;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  a {
    text-decoration: none;
    font-size: 1.4rem
  }

  #__next {
    width: 100%;
    height: 100%;
    // overflow: hidden;
    // border-radius: var(--radius);

    @media only screen and (max-width: 768px) {
      grid-template-rows: 50rem 1fr auto;
    }
  }

  button,
  input[type="reset"],
  input[type="submit"] {
    border: none;
    border-radius:10rem;
  }

  img {
    background:transparent;
    max-width: 100%;
    height: auto;
  }

  figure {
    font-size: 0;
    display: inline-block;
  }
  `;

export default GlobalStyle;
