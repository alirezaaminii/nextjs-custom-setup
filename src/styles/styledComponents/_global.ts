import {createGlobalStyle, css} from 'styled-components';
import {
    DatepickerDropdownGlobalStyle
} from "../../components/datepicker/datepicker.style";
import {SelectDropdownGlobalStyle} from "../../components/forms/select/select.style";

// import {Theme} from './_theme';

export const bodyStyles = css`
 padding: 2rem;
 margin: 0;
 font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
 Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

export const GlobalStyle = createGlobalStyle`
 html, body {
   ${bodyStyles}
 }
 
 * {
  box-sizing: border-box;
 }
 
 a {
  color: inherit;
  text-decoration: none;
 }
 
 ${DatepickerDropdownGlobalStyle}
 
 ${SelectDropdownGlobalStyle}
 `;