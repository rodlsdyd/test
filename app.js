// app.js
import charsRouter from './routes/characters.router.js'
import express from 'express';
import Chars from './schemas/characters.schema.js'
import connect from './schemas/index.js';
const app = express();
const PORT = 4000;

connect();
Chars();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
  });


  app.use('/api', [charsRouter]);

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});