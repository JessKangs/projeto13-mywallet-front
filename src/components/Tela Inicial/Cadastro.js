import axios from 'axios';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Cadastro () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeat_password, setRepeat_password] = useState('');

    const navigate = useNavigate();

    function signUp (event) {
        event.preventDefault();

        const data = {
            name,
            email,
            password,
            repeat_password
        }

        const request = axios.post('http://localhost:5000/cadastro', data);

        request.then(res => {
            console.log(res.data)
            navigate("/login")
        })

        request.catch(console.log("erro no cadastro"))

    

    }


    return (
        <Content>
            <Logo>MyWallet</Logo>

            <Form>

                <input onChange={(e) => setName(e.target.value)} placeholder="Nome" required value={name} />

                <input onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" required value={email} />

                <input onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required type="password" value={password} />

                <input onChange={(e) => setRepeat_password(e.target.value)} placeholder="Confirme a senha" required type="password" value={repeat_password} />

                <button onClick={signUp}>
                    Cadastrar
                </button>
            </Form>

            <Link to="/login">
                <Login>Já tem uma conta? Entre agora!</Login>
            </Link>
        </Content>
    )
}


const Content = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 28%;

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
    height: 360px;

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

const Login = styled.div`
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: white;
    margin-top: 25px;
`