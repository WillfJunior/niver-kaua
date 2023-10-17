import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Convidados from "./pages/Convidados";
import ListaConvidados from "./pages/ListaConvidados";

export default function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Convidados />}/>
                <Route path="/lista" element={<ListaConvidados />} />
            </Routes>
        </Router>
    )
}