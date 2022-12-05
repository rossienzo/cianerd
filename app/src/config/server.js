const bodyParser = require("body-parser");
const express = require("express");
const routes = require('../routes/routes');
const path = require("path");

// conficura o caminho da pasta
const dirName = (path.join(__dirname, '../../')).replace(/\\/g, '/');

const app = express();
const PORT = process.env.port || 3000;

/* Configura as variáveis 'view engine' e 'views' para utiliziar o template ejs*/
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* Configura o middleware para exibir os arquivos IMGs, CSS e JS */
app.use("/", express.static(`${dirName}/public`));
app.use("/contato", express.static(`${dirName}/public`));

// Transforma os dados da requisição em objeto
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Rotas */
app.use(routes);

app.listen(PORT, () => {
    console.log(`Listen in ${PORT}`);
});

module.exports = app;