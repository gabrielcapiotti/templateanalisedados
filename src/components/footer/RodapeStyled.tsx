import styled from "styled-components";


export const HeadingFour = styled.h4`
display: flex;
justify-content: start;
text-align: justify;
font-size: 11px;
color: white;
width: 30%;
margin: 20px;
`

const RodapeStyled = styled.footer`
    width: 100%;
    height: 200px;
    background-color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.secondary};
    text-align: center;
    color: white;
`

export default RodapeStyled;




