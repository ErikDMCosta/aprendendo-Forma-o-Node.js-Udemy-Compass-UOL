-- No console do MySQL --
SHOW DATABASES;
CREATE DATABASE sistemadecadastro;
SHOW DATABASES;
USE sistemadecadastro;

-- No editor de código --
CREATE TABLE usuarios(
  nome VARCHAR(50),
  email VARCHAR(100),
  idade INT
);

-- No console do MySQL --
SHOW TABLES;
DESCRIBE usuarios;

-- Inserindo Dados
INSERT INTO usuarios(nome, email, idade) VALUES(
  "Victor Lima",
  "email@teste@.com",
  8
);

