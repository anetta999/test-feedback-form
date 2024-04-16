import { css } from "@emotion/react";
import "modern-normalize";
import apercuArabicProRegular from '../fonts/ApercuArabicPro-Regular.woff';
import apercuArabicProRegularSecond from '../fonts/ApercuArabicPro-Regular.woff2';
import apercuArabicProMedium from '../fonts/ApercuArabicPro-Medium.woff';
import apercuArabicProMediumSecond from '../fonts/ApercuArabicPro-Medium.woff2';

export const globalStyles = css`
  body {
    overflow: auto;
    font-family: "Apercu Arabic Pro", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  button {
    display: block;
    cursor: pointer;
    border: none;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  html {
    scroll-behavior: smooth;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(18, 20, 23, 0.05);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(239, 237, 232, 0.1);
  }

  @font-face {
    font-family: 'Apercu Arabic Pro';
    src: url(${apercuArabicProRegular}), url(${apercuArabicProRegularSecond});
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Apercu Arabic Pro';
    src: url(${apercuArabicProMedium}), url(${apercuArabicProMediumSecond});
    font-weight: 500;
    font-display: swap;
    font-style: normal;
  }
`;