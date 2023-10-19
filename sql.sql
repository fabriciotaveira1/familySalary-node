CREATE TABLE Beneficiarios (
    BeneficiarioID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(255) NOT NULL,
    CPF VARCHAR(11) NOT NULL,
    DataNascimento DATE NOT NULL,
    Endereco VARCHAR(255) NOT NULL,
    Telefone VARCHAR(20),
    Email VARCHAR(100),
    DataCadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela para armazenar informações de Contas de Beneficiários
CREATE TABLE Contas (
    ContaID INT PRIMARY KEY AUTO_INCREMENT,
    BeneficiarioID INT,
    Saldo DECIMAL(10, 2) NOT NULL,
    Status ENUM('Ativa', 'Bloqueada') NOT NULL,
    DataUltimaAtualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (BeneficiarioID) REFERENCES Beneficiarios(BeneficiarioID)
);

-- Tabela para armazenar informações de Usuários (Funcionários do Órgão)
CREATE TABLE Usuarios (
    UsuarioID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(255) NOT NULL,
    NomeUsuario VARCHAR(50) NOT NULL,
    Senha VARCHAR(255) NOT NULL,
    Tipo ENUM('Funcionario', 'Admin') NOT NULL,
    DataCadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);