const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.send('Byop API')
});

app.post('/task', function (req, res) {
    res.send('Post task')
});

app.get('/task', function (req, res) {
    res.send('get task')
});

app.delete('/task/ID', function (req, res) {
    res.send('Delete task')
});

app.get('/tasks', function (req, res) {
    res.send('List tasks')
});

app.get('/task/ID', function (req, res) {
    res.send('Get task by ID')
});

app.put('/task/ID', function (req, res) {
    res.send('Put task by ID')
});


app.listen(4200, function () {
    console.log('App listening on port 4200.')
});