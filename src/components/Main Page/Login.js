import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Content>
            <Logo>MyWallet</Logo>

            <Form>
                <input onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" required value={email} />
                <input onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required value={password} />

                <button>
                    Entrar
                </button>
            </Form>

            <Link to="cadastro">
                <Cadastro>Primeira vez? Cadastre-se!</Cadastro>
            </Link>
        </Content>
    )
}

const Content = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        text-decoration: none;
    }
`

const Logo = styled.div`
        font-family: 'Saira Stencil One', cursive;
        font-size: 40px;
        color: white;
        margin-bottom: 30px;
    
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 206px;

    input {
        width: 326px;
        height: 58px;
        border: none;
        border-radius: 5px;
    }

    input::placeholder {
        color: black;
        font-family: 'Raleway', sans-serif;
        padding-left: 15px;
        font-size: 20px;
    }

    button {
        width: 330px;
        height: 46px;
        background-color:#A328D6;
        border: none;
        border-radius: 5px;
        color: white;
        font-weight: 700;
    }
`

const Cadastro = styled.div`
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: white;
    margin-top: 25px;
`