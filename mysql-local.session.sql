USE sistema_academico;

SELECT 
    aluno.nome AS aluno,
    curso.nome AS curso,
    matricula.data_matricula
FROM matricula
JOIN aluno ON matricula.aluno_id = aluno.id
JOIN curso ON matricula.curso_id = curso.id;