import styled from "styled-components"

import { Link } from "react-router-dom"



export default function Welcome () {
    return (
        <>
        <Content>
            <Link to="login">
            
            <Logo>MyWallet</Logo>
            <h1>Bem vindo(a) à MyWallet!</h1>
            <h2>clique para entrar</h2>     

            </Link>
        </Content>
           
        </>
    )
}

const Logo = styled.div`
    font-family: 'Saira Stencil One', cursive;
    font-size: 70px;
    margin-bottom: 5px
`

const Content = styled.div`
  

    a {
        text-decoration: none;
        color: white;
        font-family: 'Raleway', sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-size: 30px;
        margin-top: 10px;
    }

    h2{
        text-decoration: underline;
        font-size: 25px;
        margin-top: 12px;
        animation: animate 1.5s linear infinite;

        @keyframes animate{
        0%{
            opacity: 0;
        }
        50%{
            opacity: 0.7;
        }
        100%{
            opacity: 0;
        }
    }
    }

`

