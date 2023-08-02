const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const usersFilePath = path.join(__dirname, 'User.json');
const ticketsFilePath = path.join(__dirname, 'data', 'Ticket.json');

const readFile = async (filePath) => {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Ошибка чтения файла:', err);
        throw new Error('Ошибка сервера');
    }
};

const writeFile = async (filePath, data) => {
    try {
        await fs.writeFile(filePath, JSON.stringify(data));
    } catch (err) {
        console.error('Ошибка записи в файл:', err);
        throw new Error('Ошибка сервера');
    }
};

app.get('/users', async (req, res) => {
    try {
        const users = await readFile(usersFilePath);
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { loginOrEmail, password } = req.body;
        const users = await readFile(usersFilePath);

        const user = users.find(
            (user) =>
                (user.login === loginOrEmail || user.email === loginOrEmail) &&
                user.password === password
        );

        if (!user) {
            return res
                .status(401)
                .json({ message: 'Неверный логин/электронная почта или пароль' });
        }

        return res.status(200).json({ message: 'Успешный вход', user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/register', async (req, res) => {
    try {
        const { login, name, email, password } = req.body;
        const users = await readFile(usersFilePath);

        const existingUser = users.find(
            (user) => user.login === login || user.email === email
        );
        if (existingUser) {
            return res
                .status(400)
                .json({ message: 'Пользователь с таким логином или email уже существует' });
        }

        const newUser = { login, name, email, password };

        users.push(newUser);

        await writeFile(usersFilePath, users);

        return res.status(200).json({ message: 'Успешная регистрация', user: newUser });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/tickets', async (req, res) => {
    try {
        const tickets = await readFile(ticketsFilePath);
        res.status(200).json(tickets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/purchase', async (req, res) => {
    try {
        const itemCounts = req.body.itemCounts;
        const tickets = await readFile(ticketsFilePath);

        for (let itemName in itemCounts) {
            const item = tickets.find(ticket => ticket.name === itemName);
            if (item) {
                item.count -= itemCounts[itemName];
            }
        }

        await writeFile(ticketsFilePath, tickets);

        return res.status(200).json({ success: true, message: 'Успешная покупка' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/tickets', async (req, res) => {
    try {
        const newTicket = req.body;
        const tickets = await readFile(ticketsFilePath);

        let maxId = 0;
        tickets.forEach(ticket => {
            if (ticket.id && ticket.id > maxId) {
                maxId = ticket.id;
            }
        });
        newTicket.id = maxId + 1;

        tickets.push(newTicket);

        await writeFile(ticketsFilePath, tickets);

        return res.status(201).json(newTicket);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.put('/tickets/:id', async (req, res) => {
    try {
        const ticketId = req.params.id;
        const updatedTicket = req.body;

        const tickets = await readFile(ticketsFilePath);
        const index = tickets.findIndex(ticket => ticket.id === ticketId);

        if (index === -1) {
            return res.status(404).json({ message: 'Билет не найден' });
        }

        tickets[index] = updatedTicket;

        await writeFile(ticketsFilePath, tickets);

        return res.status(200).json(updatedTicket);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.delete('/tickets/:id', async (req, res) => {
    try {
        const ticketId = req.params.id;
        const tickets = await readFile(ticketsFilePath);

        const index = tickets.findIndex(ticket => ticket.id === ticketId);

        if (index === -1) {
            return res.status(404).json({ message: 'Билет не найден' });
        }

        tickets.splice(index, 1);

        await writeFile(ticketsFilePath, tickets);

        return res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
