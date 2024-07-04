import { FormControl } from "react-bootstrap";
import { ButtomStyled } from "../components/ButtomStyled";
import HeaderStyled from "./HeaderStyled";


function HeaderConteudo() {

    return (
        <>
            <HeaderStyled>
                <ButtomStyled />
                <ButtomStyled />
                <ButtomStyled />
                <input type="search" aria-label="" className="me-2" placeholder="Search" style={{ marginTop: '5px' }} />
                <ButtomStyled />
            </HeaderStyled>
        </>
    );
}
export default HeaderConteudo;



