# 🎓 Sistema Acadêmico

Sistema acadêmico completo desenvolvido com foco em aprendizado prático de desenvolvimento fullstack.

Este projeto permite o gerenciamento de alunos com operações completas de CRUD (Create, Read, Update, Delete), integrando frontend, backend e banco de dados.

---

## 🚀 Funcionalidades

- 📄 Listar alunos
- ➕ Cadastrar novos alunos
- ✏️ Editar informações de alunos
- ❌ Excluir alunos
- 🔄 Atualização automática da lista

---

## 🛠️ Tecnologias Utilizadas

### 🔹 Frontend
- HTML5
- CSS3
- JavaScript (Vanilla)

### 🔹 Backend
- Node.js
- Express

### 🔹 Banco de Dados
- MySQL

### 🔹 Comunicação
- API REST

---

## 📁 Estrutura do Projeto

```
sistema-academico/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   └── routes/
│   │       └── alunoRoutes.js
│   ├── node_modules/
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── index.html
│   └── style.css
│
├── database/
│   └── database.sql
│
└── README.md
```

---

## ⚙️ Como executar o projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/bhzitalo/sistema-academico.git
```

---

### 2️⃣ Configurar o banco de dados

- Abra o MySQL
- Execute o script:

```text
database/database.sql
```

---

### 3️⃣ Configurar o backend

```bash
cd backend
npm install
node server.js
```

Servidor rodando em:
```
http://localhost:3000
```

---

### 4️⃣ Abrir o frontend

Abra o arquivo:

```text
frontend/index.html
```

---

## 🔗 Rotas da API

### 📄 Listar alunos
```
GET /alunos
```

### ➕ Cadastrar aluno
```
POST /alunos
```

### ✏️ Atualizar aluno
```
PUT /alunos/:id
```

### ❌ Deletar aluno
```
DELETE /alunos/:id
```

---

## 💡 Aprendizados

Este projeto foi desenvolvido com foco em:

- Integração entre frontend e backend
- Consumo de API com JavaScript
- Manipulação de banco de dados MySQL
- Estruturação de projetos fullstack
- Organização de código em camadas

---

## 📌 Melhorias futuras

- 🔐 Sistema de autenticação (JWT)
- 🎨 Interface estilo dashboard
- 📊 Painel com estatísticas
- ⚛️ Migração para React
- 🌐 Deploy em produção

---

## 👨‍💻 Autor

Desenvolvido por **Ítalo Souza**  
Estudante de Análise e Desenvolvimento de Sistemas

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos.
