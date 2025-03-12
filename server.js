const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware para servir arquivos estáticos
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Simulação de banco de dados de usuários
const users = {
    'user@example.com': 'password123'
};

// Rota para autenticação
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (users[email] && users[email] === password) {
        res.redirect('/account.html');
    } else {
        res.send('Email ou senha inválidos');
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});