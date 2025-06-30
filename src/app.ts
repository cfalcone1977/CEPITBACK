import express from "express";
import cors from "cors";
import clientRoutes from "./routes/clients.routes"


const app = express();
app.use(express.json());
app.use(cors());

app.use("/pelicula", clientRoutes);

app.listen (3000, () => {
    console.log ("Server running on port 3000");
});


/*
app.route ("/api").get((req, res) => {
    res.send ("Hello World")
});


const moneda:string="ARS";
const cantidad:number=100000000;

app.route ("/bitcoin").get(async (req, res) => {
    try {
        const response = await axios.get(`https://blockchain.info/tobtc?currency=${moneda}&value=${cantidad}`);
        res.json(response.data);
        console.log(response.data);

    } catch (error) {
        res.status(500).send(`Ocurrió un error:` + error)
    }
});

app.route ("/BTCprecio").get(async (req, res) => {
    try {
        const response = await axios.get(`https://blockchain.info/ticker`);
        res.json(response.data);
        console.log(response.data.ARS.last);
        console.log(response.data.ARS.symbol);
        console.log(response.data.USD.last);
        console.log(response.data.USD.symbol)
    } catch (error) {
        res.status(500).send(`Ocurrió un error:` + error)
    }
});

app.route ("/saludo").get((req, res)=>{
    res.send ("Buen día, bienvenido...");
});

app.route ("/horario").get((req, res)=>{
    res.send (new Date());
});*/