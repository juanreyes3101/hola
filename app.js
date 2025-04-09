const express = require('express');
const path = require('path');
const app = express();

// Middleware para archivos estáticos (muy importante)
app.use(express.static(path.join(__dirname, 'public')));

// Motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rutas
const authRoutes = require('./routes/auth');
app.use('/', authRoutes);

// Servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
