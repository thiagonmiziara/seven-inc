class Tabelas {
    init(conexao) {
        console.log('tabelas foram chamadas');
        this.conexao = conexao;
        this.criarFuncionarios();
    }

    criarFuncionarios() {
        const sql = 'CREATE TABLE IF NOT EXISTS Funcionarios(id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, dataDeNascimento date, salario DECIMAL(10,3), cargo text, PRIMARY KEY(id) )'
        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro);
            } else {
                console.log('Tabela Funcionários criada com sucesso!');
            }
        });
    }
}

module.exports = new Tabelas;