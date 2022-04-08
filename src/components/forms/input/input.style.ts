import Styled from 'styled-components';
import {SizeType} from "antd/es/config-provider/SizeContext";

import {Theme} from "../../../styles/styledComponents/_theme";

interface InputProps {
    size?: SizeType
}

export const InputStyle = Styled.div`
   input {
    color: ${Theme.colors.gray_900};
    width: 371px;
    max-width: 100%;
    height: 48px;
    border-radius: 12px;
    border: 1px solid ${Theme.colors.borderDefaultColor};
    box-sizing: border-box;
    
    &:focus, &:hover {
     border: 1px solid ${Theme.colors.secondaryColor};
    }
    
    &:focus{
     box-shadow: 0 0 0 2px ${Theme.colors.secondaryTransparentColor}
    }
   
    &.error {
     color: ${Theme.colors.errorColor};
     border: 1px solid ${Theme.colors.errorColor};
     
     &:focus {
      box-shadow: 0 0 0 2px ${Theme.colors.errorTransparentColor}
     }
    }
   
    &.success {
     color: ${Theme.colors.successColor};
     border: 1px solid ${Theme.colors.successColor};
     box-shadow: 0 0 0 2px ${Theme.colors.successTransparentColor}
     
     &:focus {
      box-shadow: 0 0 0 2px ${Theme.colors.successTransparentColor}
     }
    }
    
    &:disabled {
     background-color: ${Theme.colors.gray_100};
     color: ${Theme.colors.gray_900};
    }
    
    ${(props: InputProps) => {
     switch (props.size) {
         case 'small':
            return `
                    width: 170px;
                `;
            default: return ``;
     }
    }};
      
    @media screen and (max-width: ${Theme.breakPoints.normalPhone}px) {
     height: 44px;
    }
   }
`;
