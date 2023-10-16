import  "./style.css"
import { TextField, Button } from "@mui/material"
export default function Convidados() {
    return (
        <>
            <h1>Você está Convidado!!!</h1>
            <div className="container-convidados">
               
                <img src="/src/assets/kaua.png" alt="Convidados" width="40%" className="img-container" />
               <div className='form-convidados'>
                    <TextField
                        id="outlined-required"
                        label="Insira seu Nome"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        
                    />
                    <div className="form-convidados-qtds">
                        <TextField
                                id="outlined-number"
                                label="Qtd Adultos"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                />

                        <TextField
                                id="outlined-number"
                                label="Qtd Crianças"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                />
                    </div>
                    <Button variant="contained">Confirmar</Button>
                </div>
                
            </div>
        </>
    )
}