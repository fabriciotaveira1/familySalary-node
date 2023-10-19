CREATE DATABASE IF NOT EXISTS salarioFamilia character set utf8mb4 collate utf8mb4_unicode_ci;
Use salarioFamilia;
-- Tabela para armazenar informações de Contas de Beneficiários

CREATE TABLE Beneficiarios(
	beneficiarioID INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(11) NOT NULL,
    dataNascimento DATE NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    telefone VARCHAR(20),
    email VARCHAR(100),
    dataCadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Contas(
	contaId INT PRIMARY KEY AUTO_INCREMENT,
    beneficiarioId INT,
    saldo DECIMAL(10,2) NOT NULL,
    status ENUM('Ativa', 'Bloqueada') NOT NULL,
    dataUltimaAtualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (beneficiarioId) REFERENCES Beneficiarios(BeneficiarioId)
);
-- Tabela para armazenar informações de Usuários (Funcionários do Órgão)

CREATE TABLE Usuarios(
	usuarioId INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    nomeUsuario VARCHAR(50) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    tipo  ENUM('Funcionario', 'Admin') NOT NULL,
    dataCadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


