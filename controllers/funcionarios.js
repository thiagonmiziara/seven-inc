const Funcionario = require('../models/funcionarios');

module.exports = (app) => {
    app.get('/employees', (req, res) => {
        Funcionario.lista(res)
    });

    app.get('/employees/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Funcionario.buscaPorId(id, res);

    });

    app.post('/employees', (req, res) => {
        const funcionario = req.body;
        Funcionario.adiciona(funcionario, res);

    });

    app.patch('/employees/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const valores = req.body;

        Funcionario.altera(id, valores, res);

    });

    app.delete('/employees/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Funcionario.deleta(id, res);
    });


};