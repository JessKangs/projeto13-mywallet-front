import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function NewExpense ({ token }) {
    const [value, setValue] = useState('')
    const [description, setDescription] = useState('')

    const navigate = useNavigate();

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    function saveEntry (event) {
        event.preventDefault();

        const data = {
            value,
            description
   }

        const request = axios.post('http://localhost:5000/main-page/saida', data, config);

        request.then(res => {
            console.log(res.data)
            navigate("/main-page")
        })

        request.catch(console.log("erro ao adicionar saída"))

    
    }

    return (
        <>
        
            <Header>
                Nova saída
            </Header>

            <Form>

                <input onChange={(e) => setValue(e.target.value)} 
                placeholder="Valor" 
                required 
                value={value} 
                onKeyPress={(event) => {if (!/[0-9,.]/.test(event.key)) { event.preventDefault(); }
                }}/>
                
                <input onChange={(e) => setDescription(e.target.value)} placeholder="Descrição" required value={description} />

                <button onClick={saveEntry}>
                    Salvar saída
                </button>

            </Form>

        </>
    )
}

const Header = styled.div`
      display: flex;
    justify-content: space-between;
    width: 326px;
    font-family: 'Raleway', sans-serif;
    color: white;
    font-weight: 700;
    font-size: 26px;
    margin: 25px 0 25px 0;
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