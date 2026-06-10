const express = require('express');
const app = express();
// Middleware obligatorio para que Express entienda JSON
app.use(express.json());
// Ruta de la Pregunta 6 (Registro)
app.post('/registro', (req, res) => {const nombre = req.body.nombre;const mensaje = req.body.mensaje;
  res.json({estado: "Datos recibidos",nombre: nombre,mensaje: mensaje});});
// Ruta de la Pregunta 8 (Incidencia)
app.post('/incidencia', (req, res) => {
  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;
res.json({mensaje: "Incidencia registrada",tipo: tipo,descripcion: descripcion});});
// Encender el servidor en el puerto 3000
app.listen(3000, () => {console.log('Servidor ejecutándose en puerto 3000');});
