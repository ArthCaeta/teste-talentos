# Teste Talentos

Esse projeto CRUD foi realizado como teste para uma vaga de estágio na empresa Talentos Brasil.

# Stack utilizada

**Back-end:** Express, Typescript, MySQL e Insomnia.

# Rotas e Funcionalidades

**GET /posts:** Retorna todos os posts existentes.

**GET /posts/:id:** Retorna um post específico com base no seu ID.

**POST /posts:** Cria um novo post.

**PUT /posts/:id:** Atualiza um post existente com base no seu ID.

**DELETE /posts/:id:** Exclui um post existente com base no seu ID.

# Script tabela MySQL

```
`CREATE TABLE `teste_talentos`.`posts` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `description` VARCHAR(150) NULL,
    `category` VARCHAR(45) NULL,
     PRIMARY KEY (`id`)
  );
```

# Variáveis Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

```
MY_SQL_DB_HOST=127.0.0.1
MY_SQL_DB_USER='Seu User'
MY_SQL_DB_PASSWORD='Sua senha'
MY_SQL_DB_PORT=3306
MY_SQL_DB_DATABASE='Seu banco de dados'
MY_SQL_DB_CONNECTION_LIMIT=4
```

## Para rodar o projeto

Depois de tudo configurado, rode o comando:

`npm run dev`

o console deve responder com

`Server is running on http://localhost:3333`

## Aprendizados

Obtive um grande aprendizado realizando esse projeto, por precisar de todas as ferramentas que a internet nos proporciona, me fez realizar atividades que eu não tinha tanta experiência. Isso tornou possível que eu superasse os obstáculos que surgiram.

## Desafios

Como o maior foco durante meus estudos foram na parte de front-end, enfrentei algumas dificuldades em como poderia realizar o projeto de maneira contundente, sem ter muito contato com a stack utilizada.

## Autores

- [ArthurCaetano](https://www.github.com/ArthCaeta)
