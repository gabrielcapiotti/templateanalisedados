import { Link } from "react-router-dom";
import styled from "styled-components";


const ButtomStyled = styled.button`
    background-color: #4b4b4b; /* Cor de fundo do botão */
    color: white; /* Cor do texto */
    margin: 15px;
    width: 100px;
    font-size: 11px;
    
    border: 0px solid black; 
    padding: 10px 20px; /* Espaçamento interno */
    border-radius: 15px; /* Bordas arredondadas */
    
    
    cursor: pointer; /* Cursor de ponteiro ao passar o mouse */
    transition: background-color 0.3s ease; /* Transição suave para a mudança de cor */
  &:hover {
    background-color: #b7540e; /* Cor de fundo ao passar o mouse */
    color: #000000;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: inherit;
  }
`;

export { ButtomStyled, StyledLink };


