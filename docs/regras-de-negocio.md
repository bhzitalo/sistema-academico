# 📋 Regras de Negócio — Sistema Acadêmico

## 📌 1. Introdução

Este documento define as regras de negócio do Sistema Acadêmico, garantindo que o sistema funcione conforme as normas e restrições da instituição.

As regras de negócio determinam **como o sistema deve se comportar**, independentemente da interface.

---

## 🎯 2. Objetivo

Garantir consistência, integridade e controle dos processos acadêmicos, como cadastro, matrícula e gerenciamento de cursos.

---

## 👨‍🎓 3. Regras Relacionadas a Alunos

### RN01 - Cadastro de Aluno
- O aluno deve possuir CPF válido e único no sistema
- O sistema não deve permitir cadastro duplicado

### RN02 - Atualização de Dados
- O aluno pode atualizar seus próprios dados
- Algumas informações podem ser restritas (ex: CPF)

---

## 👨‍🏫 4. Regras Relacionadas a Professores

### RN03 - Cadastro de Professor
- O professor deve possuir identificação única
- Deve informar formação e disciplinas

### RN04 - Atualização de Dados
- O professor pode atualizar suas informações profissionais

---

## 📚 5. Regras Relacionadas a Cursos

### RN05 - Cadastro de Curso
- Todo curso deve possuir:
  - Nome
  - Carga horária
  - Ementa
- Cursos podem ter pré-requisitos

### RN06 - Alteração de Curso
- Alterações não devem afetar matrículas já realizadas

---

## 📝 6. Regras de Matrícula

### RN07 - Matrícula de Aluno
- O aluno só pode se matricular em cursos disponíveis

### RN08 - Pré-requisitos
- O sistema deve verificar pré-requisitos antes da matrícula
- Caso não atenda, a matrícula deve ser bloqueada

### RN09 - Matrícula Duplicada
- O aluno não pode se matricular duas vezes no mesmo curso

### RN10 - Cancelamento
- O cancelamento só pode ocorrer dentro do prazo definido

---

## 🔍 7. Regras de Consulta

### RN11 - Consulta de Cursos
- Todos os usuários podem visualizar cursos disponíveis

### RN12 - Relatórios
- Apenas administradores podem acessar relatórios completos

---

## 🔐 8. Regras de Segurança

### RN13 - Autenticação
- Todos os usuários devem realizar login

### RN14 - Controle de Acesso
- O sistema deve respeitar níveis de permissão:
  - Aluno
  - Professor
  - Administrador

### RN15 - Proteção de Dados
- Dados pessoais devem ser protegidos conforme a LGPD

---

## ⚠️ 9. Regras Gerais do Sistema

### RN16 - Integridade dos Dados
- O sistema deve garantir consistência entre alunos, cursos e matrículas

### RN17 - Validação de Dados
- Todos os dados inseridos devem ser validados antes de serem salvos

### RN18 - Disponibilidade
- O sistema deve estar disponível para uso contínuo, salvo manutenções programadas

---

## 📌 10. Considerações Finais

As regras de negócio são fundamentais para garantir o correto funcionamento do sistema.

Qualquer alteração nessas regras deve ser analisada cuidadosamente, pois pode impactar diretamente no comportamento do sistema.