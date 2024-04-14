import express, { } from 'express';
const app = express();
import path from 'path'

const __dirname = import.meta.dirname;
app.use(express.static(path.join(__dirname, '/assets')) )


const usuarios = ["Ana", "Maria", "Alicia", "Juan", "Juana"];


app.get('/abracadabra/usuarios', (req, res) => {
    res.json(usuarios);
});


const validarUsuario = (req, res, next) => {
    const usuario = req.params.usuario;
    next()
    if (usuarios.includes(usuario)) {
        next();
    } else {
        res.sendFile(join(__dirname, 'assets/who.jpeg')); 
    }
};


app.get('/abracadabra/juego/:usuario', validarUsuario, (req, res) => {
    res.send(`Bienvenido al juego, ${req.params.usuario}!`);
});


app.get('/abracadabra/conejito/:n', (req, res) => {
   
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

  
    const n = parseInt(req.params.n);

    
    if (n === numeroAleatorio) {
        
        res.sendFile(join(__dirname, 'conejito.jpg'));
    } else {
       
        res.sendFile(join(__dirname, 'voldemort.jpg'));
    }
});


app.use((req, res) => {
    res.status(404).send("Esta página no existe...");
});


app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
