import express, { static as st } from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import cors from 'cors';
import pkg from 'body-parser';
const { urlencoded } = pkg;
import session from 'express-session';
import loginToAPI from './config/apiConfig.js';


// import { buscarPaciente } from './controllers/apiController';

let claves = {
    "agarcia@osseg.org.ar": "Alejandra.2024",
    "vdiaz@osseg.org.ar": "Valeria.2024",
    "fmartire@osseg.org.ar": "Fabiana.2024",
    "lfernandez@osseg.org.ar": "Liliana.2024",
    "aspinelli@osseg.og.ar": "Anamaria.2024",
    "lsaconi@osseg.org.ar": "Laura.2024",
    "apinto@osseg.org.ar": "Andres.2024",
    "lmoreno@osseg.org.ar": "Lucia.2024",
    "cmorrone@osseg.org.ar": "Carolina.2024",
    "mmastrocola@osseg.org.ar": "Melisa.2024",
    "rcastro@osseg.org.ar": "Romina.2024",
    "paguirre@osseg.org.ar": "Pablo.2024",
    "bsantoro@osseg.org.ar": "Beatriz.2024",
    "sdevoto@osseg.org.ar": "Susana.2024",
    "pmautone@osseg.org.ar": "Patricio.2024",
    "jgriguoli@osseg.org.ar": "Jorge.2024",
    "apose@osseg.org.ar": "Adriana.2024",
    "sayala@osseg.org.ar": "Sonia.2024",
    "vcalderon@osseg.org.ar": "Valeria.2024",
    "vlujan@osseg.org.ar": "Veronica.2024",
    "mvignoni@osseg.org.ar": "Monica.2024",
    "rlage@osseg.org.ar": "Mariadelrosario.2024",
    "srasmussen@osseg.org.ar": "Silvia.2024",
    "nperovich@osseg.org.ar": "Nair.2024",
    "macampbell@osseg.org.ar": "Maria.2024",
    "joelbeenue@gmail.com" : "Joel1234"
}

const app = express();
const port = 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

app.use(urlencoded({ extended: true }));
app.use(st(join(__dirname, 'public')));

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
}));

app.use(cors({
    origin: 'https://audifarmsalud.dev',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));




// app.post('/buscar', buscarPaciente);


// Middleware para pasar la variable user a las vistas
app.use((req, res, next) => {
    res.locals.user = req.session.userId ? { id: req.session.userId } : null;
    next();
});


app.get('/', (req, res) => {
    if (req.session.userId) {
        res.redirect('/osseg_seguimiento1'); // Redirige al usuario autenticado a la página principal
    } else {
        res.render('login', { error: null });
    }
});


// Renderiza la página principal según el estado de autenticación
app.get('/osseg_seguimiento1', function(req, res) {
    if (true) {
        loginToAPI()
            .then(function(sessionId) {
                req.session.sessionId = sessionId;
                // res.render('index', { data: null, error: null });
            })
            .catch(function(error) {
                // res.render('index', { data: null, error: 'Error en la autenticación' });
            });
    } else {
        res.redirect('/'); // Redirige al login si el usuario no está autenticado
    }
});


// Escucha en el puerto especificado
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});