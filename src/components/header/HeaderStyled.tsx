import styled from "styled-components";


const HeaderStyled = styled.header`
    width: 100%;
    height: auto;
    background-color: ${props => props.theme.colors.primary}; 
    border: 1px solid ${props => props.theme.colors.secondary};
    text-align: center;
    color: white;
    
`
export default HeaderStyled;



