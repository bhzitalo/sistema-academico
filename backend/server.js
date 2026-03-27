const express = require('express');
const cors = require('cors');
const connection = require('./src/config/db');
const alunoRoutes = require('./src/routes/alunoRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API do Sistema Acadêmico funcionando!');
});

app.use('/alunos', alunoRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});