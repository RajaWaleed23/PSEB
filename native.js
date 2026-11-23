// const http = require('http'); 
// http.createServer((req, res) => { if (req.url === '/')
//     res.end ('Hello'); 
//     else 
//     res.writeHead(404).end(); 
// }).listen(4000);

const express = require('express'); 
const app = express();
app.use(express.json()); 
// app.use('/api/user',require('./routes/users'));
app.get('/', (req, res) => {
  res.send('Hello from Express');
});
app.listen(5000);