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

-- Deletando Registro no MySQL;

-- Desta forma deleta todos registros da tabela
DELETE FROM usuarios; 
-- Desta forma deleta todos registros da tabela que tem nome Victor
DELETE FROM usuarios WHERE nome = "Victor"; 

-- No console direto do MySQL --
SELECT * FROM usuarios;

-- Desta forma aletara todos registros da tabela
UPDATE usuarios SET nome = "Nome de Teste";

-- Mas com a clausula WHERE filtra os registros alvos
UPDATE usuarios SET nome = "Nome de Teste" WHERE nome = "Luis Silva";

-- No console direto do MySQL --
SELECT * FROM usuarios;
