// шаблон сервера
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const fs = require('fs');

// для того, чтобы можно было обрабатывать req.body
app.use(bodyParser.text());
app.use(bodyParser.json());

// разрешаем CORS запросы на стороне сервера
app.use(cors());


app.get('/users', function(req, res) {
  const userData = fs.readFileSync('users.data');
  res.send('[' + userData + ']');

});

app.post('/user-register', function(req, res) {
  if (!fs.existsSync('users.data')) {
    fs.writeFile('users.data', JSON.stringify(req.body), { flag: 'a+' }, function() {
      console.log('Пришли данные с клиента', req.body);
    });
  } else {
    fs.writeFile('users.data', ',' + JSON.stringify(req.body), { flag: 'a+' }, function() {
      console.log('Пришли данные с клиента2', req.body);
    });
  }
  res.send('success!');
});

app.listen(80, (err) => {
  if (err) return console.log('something bad happened', err);
  console.log('server is listening 80')
});