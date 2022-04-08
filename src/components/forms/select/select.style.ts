import Styled from 'styled-components';
import {SizeType} from "antd/es/config-provider/SizeContext";

import {Theme} from "../../../styles/styledComponents/_theme";

interface SelectProps {
    size?: SizeType
}

export const SelectStyle = Styled.div`
   .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
     border: 1px solid ${Theme.colors.secondaryColor};
     box-shadow: 0 0 0 2px ${Theme.colors.secondaryTransparentColor};
   
     &.error {
      border: 1px solid ${Theme.colors.errorColor};
      box-shadow: 0 0 0 2px ${Theme.colors.errorTransparentColor};
     }
   
     &.success {
      border: 1px solid ${Theme.colors.successColor};
      box-shadow: 0 0 0 2px ${Theme.colors.successTransparentColor};
     }
   }

   .ant-select {
    width: 371px;
    height: 48px;
    
    &-selector {
     color: ${Theme.colors.gray_900};
     width: 371px;
     max-width: 100%;
     height: 48px !important;
     border-radius: 12px !important;
     border: 1px solid ${Theme.colors.borderDefaultColor};
     box-sizing: border-box;
     display: flex;
     align-items: center;
    
     &:placeholder {
      color: ${Theme.colors.gray_900};
     }
   
     &.error {
      border: 1px solid ${Theme.colors.errorColor};
      
      .ant-select-selection-placeholder {
       color: ${Theme.colors.errorColor};
      }
     }
   
     &.success {
      border: 1px solid ${Theme.colors.successColor};
      
      .ant-select-selection-placeholder {
       color: ${Theme.colors.successColor};
      }
     }
     
     &-disabled {
      background-color: ${Theme.colors.gray_100};
      
      .ant-select-selection-placeholder {
       color: ${Theme.colors.gray_900};
      }
     }
    
     ${(props: SelectProps) => {
      switch (props.size) {
        case 'small':
            return `
                     width: 170px;
                 `;
        default:
            return ``;
      }
     }};
      
      @media screen and (max-width: ${Theme.breakPoints.normalPhone}px) {
       height: 44px;
      }
     }
    }
`;

export const SelectDropdownGlobalStyle = `
 .rc-virtual-list-holder {
   max-height: 164px;
   
   &-inner {
    max-height: 164px;
    overflow: auto;
    
    &::-webkit-scrollbar {
     width: 6px;
     border-radius: 5px;
      background-color: transparent;;
     
     &-track {
      border-radius: 10px;
     }
     
     &-thumb {
      border-radius: 10px;
      background-color: ${Theme.colors.gray_400};
      -webkit-box-shadow: inset 0 0 6px ${Theme.colors.gray_400}; 
     }
    }
   }
 }
`;
