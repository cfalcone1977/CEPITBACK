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