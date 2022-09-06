import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Main Page/Welcome";
import Login from "./Main Page/Login";
import Cadastro from "./Main Page/Cadastro"

export default function App() {
    return (
        <BrowserRouter>
        

        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="login" element={<Login />} />
            <Route path="cadastro" element={<Cadastro />} />
        </Routes>
    </BrowserRouter>
    )
}