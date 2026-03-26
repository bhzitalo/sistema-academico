# 🎯 Diagrama de Casos de Uso — Sistema Acadêmico

## 📌 1. Objetivo

Este documento apresenta o diagrama de casos de uso do Sistema Acadêmico, representando as interações entre os atores do sistema e suas principais funcionalidades.

---

## 👥 2. Atores do Sistema

- **Aluno**
- **Professor**
- **Administrador**

---

## 📋 3. Casos de Uso Identificados

### Aluno
- Cadastrar-se
- Atualizar dados
- Consultar cursos
- Realizar matrícula
- Cancelar matrícula
- Consultar status da matrícula

### Professor
- Cadastrar-se
- Atualizar dados
- Consultar cursos
- Consultar turmas

### Administrador
- Gerenciar alunos
- Gerenciar professores
- Gerenciar cursos
- Gerenciar matrículas
- Consultar relatórios

---

## 🖼️ 4. Diagrama de Casos de Uso

```mermaid
flowchart LR
    A[Aluno]
    P[Professor]
    AD[Administrador]

    UC1((Cadastrar aluno))
    UC2((Atualizar dados do aluno))
    UC3((Consultar cursos))
    UC4((Realizar matrícula))
    UC5((Cancelar matrícula))
    UC6((Consultar status da matrícula))

    UC7((Cadastrar professor))
    UC8((Atualizar dados do professor))
    UC9((Consultar turmas))

    UC10((Cadastrar curso))
    UC11((Atualizar curso))
    UC12((Gerenciar alunos))
    UC13((Gerenciar professores))
    UC14((Gerenciar matrículas))
    UC15((Consultar relatórios))

    A --> UC1
    A --> UC2
    A --> UC3
    A --> UC4
    A --> UC5
    A --> UC6

    P --> UC7
    P --> UC8
    P --> UC3
    P --> UC9

    AD --> UC10
    AD --> UC11
    AD --> UC12
    AD --> UC13
    AD --> UC14
    AD --> UC15
```

## 🧠 5. Interpretação do Diagrama

O diagrama mostra como cada ator interage com o sistema:

- O Aluno possui funcionalidades voltadas ao seu cadastro e participação nos cursos.
- O Professor acessa funções relacionadas aos seus dados e turmas.
- O Administrador possui controle total sobre os cadastros, cursos, matrículas e relatórios.

## ✅ 6. Considerações Finais

O diagrama de casos de uso facilita a visualização das responsabilidades de cada perfil dentro do sistema e serve como base para a implementação das funcionalidades.