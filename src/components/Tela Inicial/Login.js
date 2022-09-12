import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

export default function Login ({ setToken, setUsuName }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function signIn (event) {
        event.preventDefault();

        const data = {
            email,
            password
        }

        const request = axios.post('http://localhost:5000/login', data);

        request.then(res => {
            console.log(res.data)
            console.log("UIA")
            setToken(res.data.token)
            setUsuName(res.data.name)
            navigate("/main-page")
        })

        request.catch(console.log("erro no login"))

    

    }

    return (
        <Content>
            <Logo>MyWallet</Logo>

            <Form>
                <input onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" required value={email} />
                <input onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required type="password" value={password} />

                <button onClick={signIn}>
                    Entrar
                </button>
            </Form>

            <Link to="/cadastro">
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
    margin-top: 50%;

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