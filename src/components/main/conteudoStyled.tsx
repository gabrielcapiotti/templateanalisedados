import styled from "styled-components"



export const Heading = styled.h3`
display: flex;
justify-content: start;
text-align: justify;
font-size: 11px;
color: white;
width: 45%;
margin: 20px;
`

const Conteudo = styled.main`
    width: 100%;
    height: auto;
    background-color: #373737;
    border: 1px solid  ${props => props.theme.colors.primary};
    text-align: center;
    color: white;

`
export default Conteudo;