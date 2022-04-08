import Styled from 'styled-components';

import {Theme} from "../../../styles/styledComponents/_theme";

export const ErrorMessageStyle = Styled.div`
   width: 100%;
   margin: 5px 0;
   padding-left: 16px;
   display: flex;
   align-items: center;
   justify-content: flex-start; 
   color: ${Theme.colors.errorColor};
   font-weight: 300;
   font-size: ${Theme.fontSize.sm};
   line-height: 18px;
   font-style: normal;
`;
