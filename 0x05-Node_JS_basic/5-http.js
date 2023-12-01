const http = require('http');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.write('This is the list of our students');
    res.write();
  }
});

app.listen(1245);

module.exports = app;
