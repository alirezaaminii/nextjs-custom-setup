import Styled from 'styled-components';

import {Theme} from "../../../styles/styledComponents/_theme";

export const CheckboxStyle = Styled.div`
  .ant-checkbox-wrapper:hover .ant-checkbox-inner, .ant-checkbox:hover .ant-checkbox-inner {
   background-color: ${Theme.colors.primaryColorTransparent};
   border: 1px solid ${Theme.colors.primaryColor};
  }
  
  .ant-checkbox {
   &-checked {
    .ant-checkbox-inner {
     background-color: ${Theme.colors.primaryColor};
     border: 1px solid ${Theme.colors.primaryColor};
    }
    
    &:hover {
     .ant-checkbox-inner {
      background-color: ${Theme.colors.primaryColor};
     }
    }
   }
   
   &-disabled {
    .ant-checkbox-inner {
     background-color: ${Theme.colors.primaryColorTransparent};
     border: 1px solid ${Theme.colors.primaryColorTransparent};
    }
    
    &:hover {
     .ant-checkbox-inner {
      background-color: ${Theme.colors.primaryColorTransparent};
     }
    }
   }
   
   &.error {
    .ant-checkbox-inner {
     border: 1px solid ${Theme.colors.errorColor};
    }
   }
   
    &::after {
     border: 1px solid ${Theme.colors.primaryColor};
    }
  }
`;
