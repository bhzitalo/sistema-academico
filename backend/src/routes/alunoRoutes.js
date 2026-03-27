const express = require('express');
const router = express.Router();
const connection = require('../config/db');

// GET - listar alunos
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM aluno';

  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Erro ao buscar alunos:', err);
      return res.status(500).json({ erro: 'Erro ao buscar alunos' });
    }

    res.json(results);
  });
});

// POST - cadastrar aluno
router.post('/', (req, res) => {
  if (!req.body) {
    return res.status(400).json({ erro: 'Body da requisição não enviado' });
  }

  const { nome, cpf, email, data_nascimento } = req.body;

  if (!nome || !cpf || !email || !data_nascimento) {
    return res.status(400).json({
      erro: 'Todos os campos são obrigatórios: nome, cpf, email e data_nascimento'
    });
  }

  const sql = `
    INSERT INTO aluno (nome, cpf, email, data_nascimento)
    VALUES (?, ?, ?, ?)
  `;

  connection.query(
    sql,
    [nome, cpf, email, data_nascimento],
    (err, result) => {
      if (err) {
        console.error('Erro ao cadastrar aluno:', err);
        return res.status(500).json({ erro: 'Erro ao cadastrar aluno' });
      }

      res.json({
        mensagem: 'Aluno cadastrado com sucesso!',
        id: result.insertId
      });
    }
  );
});

// DELETE - deletar aluno
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM aluno WHERE id = ?';

  connection.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Erro ao deletar aluno:', err);
      return res.status(500).json({ erro: 'Erro ao deletar aluno' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ erro: 'Aluno não encontrado' });
    }

    res.json({ mensagem: 'Aluno deletado com sucesso!' });
  });
});

// PUT - atualizar aluno
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nome, cpf, email, data_nascimento } = req.body;

  if (!nome || !cpf || !email || !data_nascimento) {
    return res.status(400).json({
      erro: 'Todos os campos são obrigatórios: nome, cpf, email e data_nascimento'
    });
  }

  const sql = `
    UPDATE aluno
    SET nome = ?, cpf = ?, email = ?, data_nascimento = ?
    WHERE id = ?
  `;

  connection.query(
    sql,
    [nome, cpf, email, data_nascimento, id],
    (err, result) => {
      if (err) {
        console.error('Erro ao atualizar aluno:', err);
        return res.status(500).json({ erro: 'Erro ao atualizar aluno' });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ erro: 'Aluno não encontrado' });
      }

      res.json({ mensagem: 'Aluno atualizado com sucesso!' });
    }
  );
});

module.exports = router;