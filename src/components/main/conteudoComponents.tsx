import { ButtomStyled } from "../components/ButtomStyled";
import Conteudo, { Heading } from "./conteudoStyled";
import React, { useState } from 'react';

export function Contador() {
    const [contador, setContador] = useState(0);

    function adicionarValor() {
        setContador(contador + 1);
        console.log(contador);
    }

    function removerValor() {
        setContador(contador - 1);
        console.log(contador);
    }

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <ButtomStyled onClick={adicionarValor}>Adicionar</ButtomStyled>
            <ButtomStyled onClick={removerValor}>Remover</ButtomStyled>
        </div>
    );
}

function Menu() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 col-lg-6">
                    <Conteudo>
                        <h1>Bem vindo!</h1>
                        <Heading>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Blanditiis rem ad accusantium doloribus nesciunt voluptates
                            sapiente eligendi quibusdam aperiam quis, mollitia et distinctio
                            reprehenderit nostrum obcaecati fugit minus voluptatum velit. Lorem
                            ipsum dolor sit amet consectetur, adipisicing elit. Vero eligendi
                            repudiandae quae corrupti quod animi suscipit odio nisi. Hic mollitia,
                            perferendis accusamus veniam recusandae quas ipsum quaerat eligendi voluptates atque.
                        </Heading>
                        <Heading>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Blanditiis rem ad accusantium doloribus nesciunt voluptates
                            sapiente eligendi quibusdam aperiam quis, mollitia et distinctio
                            reprehenderit nostrum obcaecati fugit minus voluptatum velit. Lorem
                            ipsum dolor sit amet consectetur, adipisicing elit. Vero eligendi
                            repudiandae quae corrupti quod animi suscipit odio nisi. Hic mollitia,
                            perferendis accusamus veniam recusandae quas ipsum quaerat eligendi
                            voluptates atque.
                        </Heading>
                        <Heading>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Blanditiis rem ad accusantium doloribus nesciunt voluptates
                            sapiente eligendi quibusdam aperiam quis, mollitia et distinctio
                            reprehenderit nostrum obcaecati fugit minus voluptatum velit. Lorem
                            ipsum dolor sit amet consectetur, adipisicing elit. Vero eligendi
                            repudiandae quae corrupti quod animi suscipit odio nisi. Hic mollitia,
                            perferendis accusamus veniam recusandae quas ipsum quaerat eligendi
                            voluptates atque.
                        </Heading>
                        <Heading>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Blanditiis rem ad accusantium doloribus nesciunt voluptates
                            sapiente eligendi quibusdam aperiam quis, mollitia et distinctio
                            reprehenderit nostrum obcaecati fugit minus voluptatum velit. Lorem
                            ipsum dolor sit amet consectetur, adipisicing elit. Vero eligendi
                            repudiandae quae corrupti quod animi suscipit odio nisi. Hic mollitia,
                            perferendis accusamus veniam recusandae quas ipsum quaerat eligendi
                            voluptates atque.
                        </Heading>
                        <div>
                            <Contador />
                        </div>
                        <div>

                        </div>
                    </Conteudo>
                </div>
            </div>
        </div>
    );
}

export default Menu;
