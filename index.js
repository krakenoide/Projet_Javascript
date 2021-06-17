const express = require('express');
const md5 = require('md5');
const app = express();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ':b4tchplZ:',
    database: 'mini_forum'
});

connection.connect();

app.use(express.json());


/* Login */

app.post('/login', (req, res) => {
    connection.query(`SELECT id, username, admin FROM users WHERE username = "${req.body.username}" AND password = "${md5(req.body.password)}"`, async (err, result) => {
        if (err) throw err;

        let user = result[0];

        if (!user) {
            res.status(404).send();
            return;
        }
    
        const topicsFromDb = await getAllTopicsFromDb();
        const messagesFromDb = await getAllMessagesFromDb();
    
        user.topics = topicsFromDb.filter(topic => topic.author_id === user.id);
        user.messages = messagesFromDb.filter(message => message.author_id === user.id);
    
        user.topics.forEach(topic => {
            topic.messages = messagesFromDb.filter(message => message.topic_id === topic.id);
        });
    
        user.topics = user.topics.map(topic => {
            delete topic.author_id;
    
            topic.messages = topic.messages.map(message => {
                delete message.topic_id;
                delete message.author_id;
    
                return message;
            })
    
            return topic;
        });
    
        res.json(user);
    });
});


/* Users */

app.get('/api/user', async (req, res) => {
    const usersFromDb = await getAllUsersFromDb();
    const topicsFromDb = await getAllTopicsFromDb();
    const messagesFromDb = await getAllMessagesFromDb();

    let users = usersFromDb.map(user => {
        user.topics = topicsFromDb.filter(topic => topic.author_id === user.id);
        user.messages = messagesFromDb.filter(message => message.author_id === user.id);

        user.topics.forEach(topic => {
            topic.messages = messagesFromDb.filter(message => message.topic_id === topic.id);
        });

        return user;
    });

    users = users.map(user => {
        user.topics = user.topics.map(topic => {
            delete topic.author_id;

            topic.messages = topic.messages.map(message => {
                delete message.topic_id;
                delete message.author_id;

                return message;
            })

            return topic;
        });

        return user;
    });

    res.json(users);
});                    

app.get('/api/user/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    let user = await getUserFromDb(id);

    if (!user) {
        res.status(404).send();
        return;
    }

    const topicsFromDb = await getAllTopicsFromDb();
    const messagesFromDb = await getAllMessagesFromDb();

    user.topics = topicsFromDb.filter(topic => topic.author_id === user.id);
    user.messages = messagesFromDb.filter(message => message.author_id === user.id);

    user.topics.forEach(topic => {
        topic.messages = messagesFromDb.filter(message => message.topic_id === topic.id);
    });

    user.topics = user.topics.map(topic => {
        delete topic.author_id;

        topic.messages = topic.messages.map(message => {
            delete message.topic_id;
            delete message.author_id;

            return message;
        })

        return topic;
    });

    res.json(user);
});

app.post('/api/user', (req, res) => {
    connection.query(`INSERT INTO users (username, password) VALUES ("${req.body.username}", "${md5(req.body.password)}")`, (err, user) => {
        if (err) throw err;

        res.json({
            id: user.insertId,
            username: req.body.username,
            topics: []
        });
    });
});

app.patch('/api/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const username = req.body.username;
    const password = req.body.password;
    const passwordConfirm = req.body.passwordConfirm;
    const oldPassword = req.body.oldPassword;

    if (password !== passwordConfirm) throw err;

    new Promise((resolve, reject) => {
        connection.query(`SELECT id FROM users WHERE username = "${username}" AND password = "${md5(oldPassword)}"`, async (err, result) => {
            if (err || !result.length) reject();
            resolve();
        });
    }).then(() => {
        connection.query(`UPDATE users SET username = "${username}", password = "${md5(password)}" WHERE id = ${id}`, async (err) => {
            if (err) throw err;
    
            let user = await getUserFromDb(id);
            const topicsFromDb = await getAllTopicsFromDb();
            const messagesFromDb = await getAllMessagesFromDb();
    
            user.topics = topicsFromDb.filter(topic => topic.author_id === user.id);
            user.messages = messagesFromDb.filter(message => message.author_id === user.id);
    
            user.topics.forEach(topic => {
                topic.messages = messagesFromDb.filter(message => message.topic_id === topic.id);
            });
    
            user.topics = user.topics.map(topic => {
                delete topic.author_id;
    
                topic.messages = topic.messages.map(message => {
                    delete message.topic_id;
                    delete message.author_id;
    
                    return message;
                })
    
                return topic;
            });
    
            res.json(user);
        });
    }).catch(error => {
        res.status(500).send();
    });
});

app.delete('/api/user/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    const user = await getUserFromDb(id);
    const topicsFromDb = await getAllTopicsFromDb();
    const messagesFromDb = await getAllMessagesFromDb();

    user.messages = messagesFromDb.filter(message => message.author_id === id);
    user.topics = topicsFromDb.filter(topic => topic.author_id === id);

    user.topics.forEach(topic => {
        connection.query(`DELETE FROM messages WHERE topic_id = ${topic.id}`, (err) => {
            if (err) throw err;
        });
    });

    setTimeout(() => {
        connection.query(`DELETE FROM topics WHERE author_id = ${id}`, (err) => {
            if (err) throw err;
    
            connection.query(`DELETE FROM users WHERE id = ${id}`, (err) => {
                if (err) throw err;
                res.status(200).send();
            });
        });
    }, 1000);
});


/* Topics */

app.get('/api/topic', async (req, res) => {
    const topicsFromDb = await getAllTopicsFromDb();
    const messagesFromDb = await getAllMessagesFromDb();
    const usersFromDb = await getAllUsersFromDb();

    topicsFromDb.forEach(topic => {
        topic.author = usersFromDb.find(user => user.id === topic.author_id);
        topic.messages = messagesFromDb.filter(message => message.topic_id === topic.id);
    });

    let topics = topicsFromDb.map(topic => {
        delete topic.author_id;

        topic.messages = topic.messages.map(message => {
            message.author = usersFromDb.find(user => user.id === message.author_id);

            delete message.topic_id;
            delete message.author_id;

            return message;
        })

        return topic;
    });

    res.json(topics);
});                    

app.get('/api/topic/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    let topic = await getTopicFromDb(id);

    if (!topic) {
        res.status(404).send();
        return;
    }

    const messagesFromDb = await getAllMessagesFromDb();
    const usersFromDb = await getAllUsersFromDb();

    topic.author = usersFromDb.find(user => user.id === topic.author_id)
    topic.messages = messagesFromDb.filter(message => message.topic_id === topic.id);

    delete topic.author_id;

    topic.messages = topic.messages.map(message => {
        message.author = usersFromDb.find(user => user.id === message.author_id);

        delete message.topic_id;
        delete message.author_id;

        return message;
    });

    res.json(topic);
});

app.post('/api/topic', (req, res) => {
    const title = req.body.title;
    const date = req.body.date;
    const user = req.body.user;
    const content = req.body.content;

    connection.query(`INSERT INTO topics (title, date, author_id) VALUES ("${title}", "${date}", "${user.id}")`, (err, topic) => {
        if (err) throw err;

        connection.query(`INSERT INTO messages (content, date, topic_id, author_id) VALUES ("${content}", "${date}", "${topic.insertId}", "${user.id}")`, (err, message) => {
            if (err) throw err;

            res.json({
                id: topic.insertId,
                title: title,
                date: date,
                author: user,
                messages: [{
                    id: message.insertId,
                    content: content,
                    date: date,
                    author: user
                }]
            });
        });
    });
});

app.patch('/api/topic/:id', (req, res) => {
    const id = parseInt(req.params.id);

    connection.query(`UPDATE topics SET title = "${req.body.title}" WHERE id = ${id}`, async (err) => {
        if (err) throw err;

        let topic = await getTopicFromDb(id);
        const messagesFromDb = await getAllMessagesFromDb();
        const usersFromDb = await getAllUsersFromDb();

        topic.author = usersFromDb.find(user => user.id === topic.author_id);
        topic.messages = messagesFromDb.filter(message => message.topic_id === topic.id);

        delete topic.author_id;

        topic.messages = topic.messages.map(message => {
            message.author = usersFromDb.find(user => user.id === message.author_id);

            delete message.topic_id;
            delete message.author_id;

            return message;
        });

        res.json(topic);
    });
});

app.delete('/api/topic/:id', (req, res) => {
    const id = parseInt(req.params.id);

    connection.query(`DELETE FROM messages WHERE topic_id = ${id}`, (err) => {
        if (err) throw err;

        connection.query(`DELETE FROM topics WHERE id = ${id}`, (err) => {
            if (err) throw err;
            res.status(200).send();
        });
    });
});


/* Messages */

app.get('/api/message', async (req, res) => {
    const messagesFromDb = await getAllMessagesFromDb();
    const usersFromDb = await getAllUsersFromDb();
    const topicsFromDb = await getAllTopicsFromDb();

    const messages = messagesFromDb.map(message => {    
        message.author = usersFromDb.find(user => user.id === message.author_id);

        message.topic = topicsFromDb.find(topic => message.topic_id === topic.id);
        message.topic.author = usersFromDb.find(user => user.id === message.topic.author_id);

        delete message.author_id;
        delete message.topic_id;

        delete message.topic.author_id;

        return message;
    });

    res.json(messages);
});                    

app.get('/api/message/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    let message = await getMessageFromDb(id);

    if (!message) {
        res.status(404).send();
        return;
    }

    const topicsFromDb = await getAllTopicsFromDb();
    const usersFromDb = await getAllUsersFromDb();

    message.author = usersFromDb.find(user => user.id === message.author_id);

    message.topic = topicsFromDb.find(topic => message.topic_id === topic.id);
    message.topic.author = usersFromDb.find(user => user.id === message.topic.author_id);

    delete message.author_id;
    delete message.topic_id;

    delete message.topic.author_id;
    delete message.topic.topic_id;

    res.json(message);
});

app.post('/api/message', (req, res) => {
    const content = req.body.content;
    const date = req.body.date;
    const user = req.body.user;
    const topic = req.body.topic;

    connection.query(`INSERT INTO messages (content, date, author_id, topic_id) VALUES ("${content}", "${date}", "${user.id}", "${topic.id}")`, (err, message) => {
        if (err) throw err;

        res.json({
            id: message.insertId,
            content: content,
            date: date,
            author: user,
            topic: topic
        });
    });
});

app.patch('/api/message/:id', (req, res) => {
    const id = parseInt(req.params.id);

    connection.query(`UPDATE messages SET content = "${req.body.content}" WHERE id = ${id}`, async (err) => {
        if (err) throw err;

        let message = await getMessageFromDb(id);
        const usersFromDb = await getAllUsersFromDb();
        const topicsFromDb = await getAllTopicsFromDb();

        message.author = usersFromDb.find(user => user.id === message.author_id);

        message.topic = topicsFromDb.find(topic => message.topic_id === topic.id);
        message.topic.author = usersFromDb.find(user => user.id === message.topic.author_id);

        delete message.author_id;
        delete message.topic_id;

        delete message.topic.author_id;
        delete message.topic.topic_id;

        res.json(message);
    });
});

app.delete('/api/message/:id', (req, res) => {
    const id = parseInt(req.params.id);

    connection.query(`DELETE FROM messages WHERE id = ${id}`, (err) => {
        if (err) throw err;
        res.status(200).send();
    });
});


/* Requests */

function getAllUsersFromDb() {
    return new Promise((resolve) => {
        connection.query('SELECT id, username, admin FROM users', (err, users) => {
            if (err) throw err;
            resolve(users);
        });
    });
}

function getUserFromDb(id) {
    return new Promise((resolve) => {
        connection.query('SELECT id, username, admin FROM users WHERE id = ' + id, (err, user) => {
            if (err) throw err;
            resolve(user[0]);
        });
    });
}

function getAllTopicsFromDb() {
    return new Promise((resolve) => {
        connection.query('SELECT id, title, date, author_id FROM topics', (err, topics) => {
            if (err) throw err;
            resolve(topics);
        });
    });
}

function getTopicFromDb(id) {
    return new Promise((resolve) => {
        connection.query('SELECT id, title, date, author_id FROM topics WHERE id = ' + id, (err, user) => {
            if (err) throw err;
            resolve(user[0]);
        });
    });
}

function getAllMessagesFromDb() {
    return new Promise((resolve) => {
        connection.query('SELECT id, content, date, topic_id, author_id FROM messages', (err, messages) => {
            if (err) throw err;
            resolve(messages);
        });
    });
}

function getMessageFromDb(id) {
    return new Promise((resolve) => {
        connection.query('SELECT id, content, date, author_id, topic_id FROM messages WHERE id = ' + id, (err, message) => {
            if (err) throw err;
            resolve(message[0]);
        });
    });
}

app.listen(8080, () => {
    console.log('Server on');
});
