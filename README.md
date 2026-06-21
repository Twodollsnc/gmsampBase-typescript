# 🎮 SA-MP Gamemode — TypeScript & Node.js

![SA-MP](https://img.shields.io/badge/SA--MP-0.3.7-orange)
![Node.js](https://img.shields.io/badge/Node.js-16+-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue)
![MySQL](https://img.shields.io/badge/MySQL-8+-blue)
![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)

---

## 📌 Sobre o Projeto

Esta é uma gamemode inovadora para **SA-MP 0.3.7** que utiliza o plugin **Kainure** para integrar o runtime do **Node.js** diretamente no servidor. O objetivo é permitir o desenvolvimento de sistemas complexos utilizando as melhores práticas de **TypeScript**, garantindo um código limpo, tipado e escalável.

O projeto conta com:

- Sistema de banco de dados robusto com MySQL
- Criptografia de senhas com BCrypt
- Comandos e eventos processados em TypeScript
- Arquitetura moderna e organizada

Projeto criado com foco em:

✔ Código limpo e padronizado (Clean Code)  
✔ Alta performance no processamento de dados  
✔ Facilidade de manutenção e expansão  
✔ Segurança avançada para dados de jogadores  

---

## 🏗️ Arquitetura do Projeto

O projeto segue um fluxo de responsabilidades bem definido para facilitar a manutenção:

| Camada         | Função                                               |
|----------------|------------------------------------------------------|
| `src/main.ts`  | Ponto de entrada (Entrypoint) do servidor            |
| `src/publics/` | Handlers para eventos nativos do SA-MP (OnPlayerConnect, etc) |
| `src/commands/`| Definição de comandos do servidor                    |
| `src/data/`    | Conexão e manipulação do banco de dados MySQL        |
| `src/service/` | Lógica de negócio e serviços auxiliares              |

---

## 📁 Estrutura de Pastas

```
gmTypeScript/
├── Kainure/
│   ├── core/           → Arquivos base da ponte Node/SA-MP
│   ├── src/
│   │   ├── commands/   → Lógica dos comandos (/car, etc)
│   │   ├── data/       → Setup e conexão com MySQL
│   │   ├── dialogs/    → Handlers de diálogos (Login/Registro)
│   │   ├── publics/    → Eventos (OnPlayerConnect, etc)
│   │   └── main.ts     → Inicialização da Gamemode
│   ├── types/          → Definições de tipos do SA-MP
│   ├── config.json     → Configurações do plugin Kainure
│   └── tsconfig.json   → Configurações do compilador TypeScript
├── gamemodes/          → Arquivo .amx base do SA-MP
├── plugins/            → Plugin Kainure.dll (O coração do projeto)
├── scriptfiles/        → Arquivos de dados (propriedades, veículos)
├── server.cfg          → Configuração principal do servidor
└── package.json        → Dependências do Node.js
```

---

## 📡 Integração com Banco de Dados

A comunicação com o MySQL é feita de forma assíncrona para não travar o servidor:

```typescript
import { db } from './data/connection';

// Exemplo de busca de jogador
const [rows] = await db.execute(
  'SELECT * FROM jogadores WHERE nome = ?',
  [playerName]
);
```

### Endpoints Internos (Tabelas)

| Tabela      | Descrição                                      |
|-------------|------------------------------------------------|
| `jogadores` | Armazena ID, nome, senha (hash), IP e data     |

---

## 🛡️ Segurança

- **BCrypt:** Todas as senhas são criptografadas antes de serem salvas.
- **MySQL2:** Utiliza Prepared Statements para evitar SQL Injection.
- **TypeScript:** Tipagem forte para evitar erros de lógica em tempo de execução.

---

## 🛠️ Tecnologias Utilizadas

- **SA-MP 0.3.7** — Plataforma multiplayer
- **Node.js** — Runtime para execução do código JS
- **TypeScript** — Linguagem principal com tipagem estática
- **MySQL** — Banco de dados relacional
- **Kainure Plugin** — Ponte de comunicação entre C++ e Node.js
- **mysql2/promise** — Driver MySQL moderno e assíncrono

---

## ⚙️ Instalação e Execução

### 1️⃣ Prepare o Ambiente
Certifique-se de ter o **Node.js (v16+)** e o **XAMPP (MySQL)** instalados.

### 2️⃣ Instale as Dependências
Na pasta raiz do projeto, execute:
```bash
npm install
```

### 3️⃣ Configure o Banco de Dados
Edite o arquivo `Kainure/src/data/connection.ts` com suas credenciais:
```typescript
password: 'SUA_SENHA_AQUI'
```

### 4️⃣ Inicie o Servidor
1. Certifique-se de que o MySQL está ligado no XAMPP.
2. Clique duas vezes no arquivo **`samp-server.exe`**.

> 💡 O servidor criará automaticamente o banco de dados `ServerSamp` na primeira execução.

---

## 📋 Padrão de Nomenclatura

| Arquivo      | Conteúdo                          |
|--------------|-----------------------------------|
| `*.ts`       | Código fonte em TypeScript        |
| `*.js`       | Código compilado (na pasta dist)  |
| `*.inc`      | Includes do Pawn (se necessário)  |
| `*.dll`      | Plugins compilados para Windows   |
