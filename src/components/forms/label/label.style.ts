import Styled from 'styled-components';

import {Theme} from "../../../styles/styledComponents/_theme";

export const LabelStyle = Styled.div`
   width: 100%;
   margin: 5px 0;
   padding-left: 16px;
   display: flex;
   align-items: center;
   justify-content: flex-start; 

   label {
    color: ${Theme.colors.gray_800};
    font-style: normal;
    font-weight: 300;
    font-size: ${Theme.fontSize.sm};
    line-height: 20px;
   }
`;
