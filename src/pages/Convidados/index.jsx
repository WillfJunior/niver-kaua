import { useState } from "react"
import  "./style.css"
import { TextField, Button, Stack,Alert } from "@mui/material"
export default function Convidados() {
    const [nome, setNome] = useState('');
    const [qtdAdultos, setQtdAdultos] = useState(0);
    const [qtdCriancas, setQtdCriancas] = useState(0);
    const [confirmacao, setConfirmacao] = useState(false);

    function handleConfirmation() {
        
        console.log(nome, qtdAdultos, qtdCriancas);
        setConfirmacao(true);
    }
    return (
        <>
            <h2>Por favor confirme a sua presença e quantidade de pessoas da sua familia que estarão presentes.!!!</h2>
            
            <Stack  direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }} justifyContent="center" >
                <img src="/src/assets/kauanovo.png" alt="Convidados" width="25%" height="40%" />
                <Stack spacing={2} direction="column" justifyContent="center" >
                
                    {/* <img src="/src/assets/kaua1.png" alt="Convidados" width="20%" height="40%"  /> */}
                    
                                
                                    <TextField
                                            id="outlined-required"
                                            label="Insira seu Nome"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={nome}
                                            onChange={(e) => setNome(e.target.value)}
                                            
                                    />
                                
                                
                    <Stack spacing={2} direction="row">

                            <TextField
                                            id="outlined-number"
                                            label="Qtd Adultos"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={qtdAdultos}
                                            onChange={(e) => setQtdAdultos(e.target.value)}
                                            />

                            <TextField
                                    id="outlined-number"
                                    label="Qtd Crianças"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={qtdCriancas}
                                    onChange={(e) => setQtdCriancas(e.target.value)}
                                    />
                    </Stack>
                    
                    <Button variant="contained" onClick={handleConfirmation}>Confirmar</Button>
                    {confirmacao && <Alert severity="success">Obrigado pela confirmação! Esperamos por vocês!</Alert>}
                    
                </Stack>
                <img src="/src/assets/kaua1.png" alt="Convidados" width="25%" height="100%"  />
            </Stack>
            
            
            
        </>
    )
}