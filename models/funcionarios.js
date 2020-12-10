const conexao = require("../infra/conexao");

class Funcionarios {
    adiciona(funcionario, res) {
        const sql = "INSERT INTO Funcionarios SET ?";
        const nomeEhValido = funcionario.nome.length >= 5;
        if (nomeEhValido === false) {
            res.status(400).json(erros);
        } else {
            conexao.query(sql, funcionario, (erro) => {
                if (erro) {
                    res.status(400).json(erro);
                } else {
                    res.status(201).json(funcionario);
                }
            });
        }
    }

    lista(res) {
        const sql = "SELECT * FROM Funcionarios";

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            }
        });
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM Funcionarios WHERE id=${id}`;
        conexao.query(sql, (erro, resultados) => {
            const funcionario = resultados[0];
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(funcionario);
            }
        });
    }

    altera(id, valores, res) {
        const sql = "UPDATE Funcionarios SET ? WHERE id=?";

        conexao.query(sql, [valores, id], (erro) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json({...valores, id });
            }
        });
    }

    deleta(id, res) {
        const sql = 'DELETE FROM Funcionarios WHERE id=?';
        conexao.query(sql, id, (erro) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json({ id });
            }
        });
    }
}
module.exports = new Funcionarios();