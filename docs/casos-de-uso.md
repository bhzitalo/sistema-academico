# 🎯 Casos de Uso — Sistema Acadêmico

## 📌 1. Introdução

Este documento descreve os principais casos de uso do Sistema Acadêmico, representando as interações entre os usuários e o sistema.

Os casos de uso ajudam a entender como o sistema será utilizado na prática.

---

## 👥 2. Atores do Sistema

- 👨‍🎓 Aluno
- 👨‍🏫 Professor
- 🛠️ Administrador

---

## 📋 3. Lista de Casos de Uso

| Código | Caso de Uso |
|------|------------|
| UC01 | Cadastrar aluno |
| UC02 | Atualizar dados do aluno |
| UC03 | Cadastrar professor |
| UC04 | Atualizar dados do professor |
| UC05 | Cadastrar curso |
| UC06 | Atualizar curso |
| UC07 | Realizar matrícula |
| UC08 | Cancelar matrícula |
| UC09 | Consultar cursos |
| UC10 | Gerar relatórios |

---

## 📖 4. Detalhamento dos Casos de Uso

---

### 🎓 UC01 — Cadastrar Aluno

**Ator:** Aluno / Administrador  

**Descrição:** Permite cadastrar um novo aluno no sistema.

**Fluxo Principal:**
1. O usuário acessa a tela de cadastro
2. Informa os dados pessoais
3. O sistema valida os dados
4. O sistema salva as informações

**Fluxo Alternativo:**
- Se o CPF já existir:
  - O sistema bloqueia o cadastro

---

### 📚 UC05 — Cadastrar Curso

**Ator:** Administrador  

**Descrição:** Permite cadastrar um novo curso.

**Fluxo Principal:**
1. O administrador acessa o cadastro de cursos
2. Informa nome, carga horária, ementa e pré-requisitos
3. O sistema valida os dados
4. O sistema salva o curso

---

### 📝 UC07 — Realizar Matrícula

**Ator:** Aluno  

**Descrição:** Permite que um aluno se matricule em um curso.

**Fluxo Principal:**
1. O aluno acessa a lista de cursos
2. Seleciona um curso
3. Solicita matrícula
4. O sistema verifica pré-requisitos
5. O sistema registra a matrícula

**Fluxo Alternativo:**
- Se não atender pré-requisitos:
  - O sistema impede a matrícula

---

### ❌ UC08 — Cancelar Matrícula

**Ator:** Aluno  

**Descrição:** Permite cancelar uma matrícula existente.

**Fluxo Principal:**
1. O aluno acessa suas matrículas
2. Seleciona o curso
3. Solicita cancelamento
4. O sistema verifica prazo
5. O sistema cancela a matrícula

**Fluxo Alternativo:**
- Fora do prazo:
  - O cancelamento é bloqueado

---

### 🔍 UC09 — Consultar Cursos

**Ator:** Aluno / Professor  

**Descrição:** Permite visualizar cursos disponíveis.

**Fluxo Principal:**
1. O usuário acessa a lista de cursos
2. O sistema exibe os cursos disponíveis

---

### 📊 UC10 — Gerar Relatórios

**Ator:** Administrador  

**Descrição:** Permite gerar relatórios do sistema.

**Fluxo Principal:**
1. O administrador acessa a área de relatórios
2. Seleciona o tipo de relatório
3. O sistema gera e exibe os dados

---

## 📌 5. Considerações Finais

Os casos de uso representam as principais interações do sistema e servem como base para o desenvolvimento e testes.

Eles também auxiliam na criação de diagramas e na implementação das funcionalidades.