import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function MainPage ({ usuName, token }) {
    const [data, setData] = useState('');

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    useEffect(() => {
        const getRecords = async () => {
            const request = await axios.get('http://localhost:5000/main-page', config)

            setData(request.data)
            
        }

        getRecords()

        .catch(console.error)
    }, [])

    let saldo = 0;
    let entradas = 0;
    let saidas = 0;

    for ( let i = 0; i < data.length; i++) {
        
        let valor = Number(data[i].value.replace(",","."))

        if (data[i].type === 'entrada') {

            saldo += valor;
            entradas += valor; 
            
            } else {
            
                saldo -= valor;
                saidas += valor;
            
            }
    }

    return (
        <>
            <Greetings>
                {`Olá, ${usuName}`}
                <Link to="/"><ion-icon name="exit-outline"></ion-icon></Link>
            </Greetings>

            <Content>
                <div>
                {data.length === 0 ? <h2>Não há registros de entrada ou saída</h2> : data.map((info, index) => 
                <Record key={index} type={info.type}>
                    <h4>{info.date}</h4>
                    <h3>{info.description}</h3>
                    <h1>{info.value}</h1>
                </Record>
                ) }
                </div>

                <Saldo 
                entradas={entradas} 
                saidas={saidas}>
                    <h1>SALDO</h1> <p>{saldo}</p>
                </Saldo>
            </Content>

            <Footer>
                <Link to="entrada">
                    <NovaEntrada>
                        <ion-icon name="add-circle-outline"></ion-icon>

                        <h2>Nova entrada</h2>
                    </NovaEntrada>
                </Link>

                <Link to="saida">
                    <NovaSaída>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                    
                        <h2>Nova saída</h2>
                    </NovaSaída>
                </Link>
            </Footer>
        </>
    )
}

const Greetings = styled.div`
    display: flex;
    justify-content: space-between;
    width: 326px;
    font-family: 'Raleway', sans-serif;
    color: white;
    font-weight: 700;
    font-size: 26px;
    margin: 25px 0 25px 0;

    a {
        text-decoration: none;
        color: white;
    }
    
`

const Content = styled.div`
    font-family: 'Raleway', sans-serif;
    background-color: white;
    width: 326px;
    height: 446px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
        
        font-size: 20px;
        color: #868686;
        width: 180px;
        text-align: center;
        margin-top: 50%;
        margin-left: 30%;
    }
`

const Record = styled.div`
    width: 326px;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 23px 12px 0 12px;
    box-sizing: border-box;

    h1 {
        color: ${(props) => props.type === 'entrada' ? '#03AC00' : '#C70000'};
    
    }

    h3 {
        color: black;
        word-break: break-all;
        margin: 0 5px 0 5px;
    }

    h4 {
        color: #C6C6C6;
        font-size: 16px;
    }

`
const Saldo = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 25px;
    padding: 23px 12px 10px 12px;

    h1 {
        font-weight: 700;
    }

    p {
        color: ${(props) => props.entradas > props.saidas ? 'green' : 'red'};
        font-weight: 700;
    }
`

const Footer = styled.div`
    width: 326px;
    display: flex;
    justify-content: space-between;
    margin-top: 13px;
    color: white;
    font-family: 'Raleway', sans-serif;
    font-size: 17px;
    font-weight: 700;

    a {
        text-decoration: none;
        color: white;
    }

    ion-icon {
        font-size: 25px;
    }

    h2 {
        width: 20px;
    }

`
const NovaEntrada = styled.div`
    width: 156px;
    height: 114px;
    background-color: #A328D6;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
`

const NovaSaída = styled.div`
    width: 156px;
    height: 114px;
    background-color: #A328D6;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
`