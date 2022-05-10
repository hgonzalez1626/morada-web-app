import styled from "styled-components"
import { PRIMARY_COLOR } from "../../constants/styles"

const ButtonIconStyle = styled.button`
    border:1px solid ${PRIMARY_COLOR};
    border-radius: 6px;
    padding: 6px;
    width: 40px;
    height: 40px;
    svg{
        color: ${PRIMARY_COLOR};
        font-size: 1.4em;
    }
    &:hover{
        cursor: pointer;
        background-color: ${PRIMARY_COLOR};
        svg{
            color: #fff;
        }    
    }

`

export const ButtonIcon = ({icon: Icon, onPress}) =>(
    <ButtonIconStyle type="button" onClick={onPress}>
        <Icon />
    </ButtonIconStyle>
    
)