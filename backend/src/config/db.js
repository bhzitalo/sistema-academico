const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'coxinha123',
  database: 'sistema_academico'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
  } else {
    console.log('Conectado ao MySQL com sucesso!');
  }
});

module.exports = connection;