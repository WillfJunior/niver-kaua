

import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Convidados from "./pages/Convidados";
import ListaConvidados from "./pages/ListaConvidados";

function App() {
  

  return (

      <>
      <Router>
            <Routes>
                <Route path="/" exact element={<ListaConvidados />}/>
                <Route path="/lista" element={<Convidados />} />
            </Routes>
        </Router>
      </>
  
  )
}

export default App
