import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import path from 'path';
import estudiantesRouter from './routes/estudiantes.js';  // Importa el archivo de rutas

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configurar body-parser para manejar solicitudes POST
app.use(bodyParser.urlencoded({ extended: false }));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Usar el router de estudiantes
app.use('/', estudiantesRouter);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
