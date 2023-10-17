import { useState } from "react"
import  "./style.css"
import { TextField, Button, Stack,Alert } from "@mui/material"
import  kaua1 from '../../kaua1.png'
import  kauanovo from '../../kauanovo.png'
export default function Convidados() {
    const [nome, setNome] = useState('');
    const [qtdAdultos, setQtdAdultos] = useState(0);
    const [qtdCriancas, setQtdCriancas] = useState(0);
    const [confirmacao, setConfirmacao] = useState(false);
    const [confirmado, setconfirmado] = useState(false);
    const [naoConfirmado, setNaoConfirmado] = useState(false);
    const [exibeForm, setExibeForm] = useState(true);

    function handleConfirm() {
        setconfirmado(true);
        setExibeForm(false);
    }

    function handleNoConfirm() {
        setNaoConfirmado(true);
        
    }

    function handleConfirmation() {
        let body = JSON.stringify({
            nome: nome,
            qtdAdultos: parseInt(qtdAdultos),
            qtdCriancas: parseInt(qtdCriancas)
        });
        console.log(body);
        fetch('https://www.niverkaua.wfjuniorsistemas.com.br/convidados', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body

        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setConfirmacao(true);
            setQtdAdultos(0);
            setQtdCriancas(0);
            setNome('');
            

        })
        
    }
    return (
        <>
            <h2>Por favor confirme a sua presença e quantidade de pessoas da sua familia que estarão presentes.!!!</h2>
            
            <Stack  direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }} justifyContent="center" alignItems="center">
                <img src={kaua1} alt="Convidados" width="25%" height="40%" sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw" />
                { 
                    confirmado && 
                    <Stack spacing={2} direction="column" justifyContent="center" >
                

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
                    
                    {nome.length > 0 && qtdAdultos > 0 ? 
                    
                        <Button variant="contained" onClick={handleConfirmation}>Confirmar</Button>
                    :   <Button variant="contained" disabled>Confirmar</Button>
                    }
                    {confirmacao && <Alert severity="success">Obrigado pela confirmação! Esperamos por vocês!</Alert>}
                    
                </Stack> }
                { naoConfirmado && 
                    <Stack spacing={2} justifyContent="center">
                        <Alert severity="warning">Que pena! Sentiremos sua falta... Até a proxima!</Alert>
                    </Stack> }
                { exibeForm && !confirmado && !naoConfirmado &&
                    <Stack spacing={2} direction="column" justifyContent="center" >
                        <h6>Podemos contar com sua Presença?</h6>
                        <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
                        <Button variant="contained" onClick={handleConfirm}>Sim</Button>
                        <Button variant="contained" onClick={handleNoConfirm} color="error">Não</Button>
                        
                    </Stack>
                     
                </Stack>
}
                <img src={kauanovo} alt="Convidados" width="25%" height="100%" sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"  />
                
            </Stack>
            
            
            
        </>
    )
}