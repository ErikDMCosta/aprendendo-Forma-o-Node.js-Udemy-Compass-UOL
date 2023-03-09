-- No console do MySQL --
SHOW DATABASES;
CREATE DATABASE sistemadecadastro;
SHOW DATABASES;
USE sistemadecadastro;

-- No editor de código em seguida no console --
CREATE TABLE usuarios(
  nome VARCHAR(50),
  email VARCHAR(100),
  idade INT
);

-- No console direto do MySQL --
SHOW TABLES;
DESCRIBE usuarios;

-- No editor de código em seguida no console --
-- Inserindo Dados
INSERT INTO usuarios(nome, email, idade) VALUES(
  "Victor Lima",
  "email@teste@.com",
  8
);

INSERT INTO usuarios(nome, email, idade) VALUES(
  "Luis Silva",
  "email@teste@.com",
  28
);

-- Inverter ordens não funciona mais no MySQL
INSERT INTO usuarios(idade, email, nome)VALUES(
  39
  "email@teste@22.com",
  "Lucas",
);

-- No console direto do MySQL --

-- Inverter ordens não funciona mais no MySQL
INSERT INTO usuarios(idade, email, nome)VALUES(
  8
  "maria@teste@22.com",
  "Maria Clara",
);

SELECT * FROM usuarios;-- No console direto do MySQL --
SELECT * FROM usuarios;

-- WHERE - Listando com Filtros
SELECT * FROM usuarios WHERE idade = 8;
SELECT * FROM usuarios WHERE nome = "Lucas";
SELECT * FROM usuarios WHERE idade >= 18;
