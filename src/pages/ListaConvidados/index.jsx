import { useState, useEffect } from "react"
import { Grid, Card, CardContent, Typography, Box } from "@mui/material"
export default function ListaConvidados() {
    const [convidados, setConvidados] = useState([]);

    useEffect(() => {
        fetch('https://www.niverkaua.wfjuniorsistemas.com.br/convidados')
            .then(response => response.json())
            .then(data => {
                setConvidados(data);
            })

    }, [convidados]);

    
      
      
      


    return (
        <>
            <h2 color="">Lista de Convidados</h2>
            <h5>Quantidade de convidados confirmados: {convidados.reduce((total, convidado) => total + convidado.qtdAdultos + convidado.qtdCriancas , 0)}</h5>
            <h5>Quantidade de adultos confirmados: {convidados.reduce((total, convidado) => total + convidado.qtdAdultos , 0)}</h5>
            <h5>Quantidade de crianças confirmadas: {convidados.reduce((total, convidado) => total + convidado.qtdCriancas , 0)}</h5>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {convidados.map((convidado, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Box sx={{ minWidth: 275 }}>
                            <Card variant="outlined">
                            <>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Convidado
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                    {convidado.nome}
                                    </Typography>
                                    
                                    <Typography variant="body2">
                                    Adultos: {convidado.qtdAdultos}
                                    <br />
                                    <br/>
                                    Crianças: {convidado.qtdCriancas}
                                    </Typography>
                                </CardContent>
          
                            </>
                            </Card>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}