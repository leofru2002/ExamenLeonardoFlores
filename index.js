const express = require('express'); // Importar express
const routerApi = require('./routes'); // Importar las rutas
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
const app = express(); // Asignar express a mi aplicación
const port = 3001; // Asignación puerto donde se ejecutará el proy
const providersRouter = require('./routes/providers.router');
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola servidor de express');
});
app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

app.use('/api/providers', providersRouter);


routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi puerto ' + port);
});
