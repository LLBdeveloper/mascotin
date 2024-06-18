import express from "express";
import displayRoutes from "express-routemap";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import casosRouter from './routes/casos.router.js';

const app = express();
const PUERTO = 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PUERTO, () => {
    displayRoutes(app);
    console.log(`Puerto ${PUERTO} ACTIVADO.`);
});

app.use("/static", express.static(path.join(__dirname, './src/public')));




app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use("/casos", casosRouter); // Usar el router de casos

app.get("/contacto", (req, res) => {
    res.send(`Vista de contacto e información sobre cómo subir tu caso`);
});

app.post("/contacto/formulario", (req, res) => {
    res.send(`BOTON FORMULARIO DE CONTACTO`);
});

app.get('*', (req, res) => {
    res.status(400)
    res.send('ESTA RUTA NO ESTA DEFINIDA !')
})
