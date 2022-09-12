import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Tela Inicial/Welcome";
import Login from "./Tela Inicial/Login";
import Cadastro from "./Tela Inicial/Cadastro"
import MainPage from "./Main Page/MainPage";
import NewEntry from "./Main Page/NewEntry"
import NewExpense from "./Main Page/NewExpense"
import { useState } from "react";

export default function App() {
    const [token, setToken] = useState("")
    const [usuName, setUsuName] = useState('');
    console.log(token)
    return (
        <BrowserRouter>
        

        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="login" element={<Login setToken={setToken} setUsuName={setUsuName}/>} />
            <Route path="cadastro" element={<Cadastro />} />
            <Route path="main-page" element={<MainPage usuName={usuName} token={token}/>} />
            <Route path="main-page/entrada" element={<NewEntry token={token}/>} />
            <Route path="main-page/saida" element={<NewExpense token={token}/>} />
        </Routes>
    </BrowserRouter>
    )
}