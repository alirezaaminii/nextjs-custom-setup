import Styled from 'styled-components';

import {Theme} from "../../../styles/styledComponents/_theme";

export const SwitchStyle = Styled.div`
  .ant-switch {
    min-width: 40px;
    height: 24px;
    margin: 0 5px;
    
    &-handle {
     width: 16px;
     height: 16px;
     top: 4px;
     left: 4px;
    }
    
    &-checked {
     background-color: ${Theme.colors.primaryColor};
     
     .ant-switch-handle {
       left: calc(100% - 16px - 4px);
     }
    }
    
    &-disabled {
     background-color: ${Theme.colors.primaryColorTransparent};
    }
  }
`;
