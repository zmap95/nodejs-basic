require('dotenv').config();
const express = require('express')
const app = express()
const http = require('http');
const userRouter = require('./routes/users');

app.use(
    express.urlencoded({
      extended: true
    })
  )
  
app.use(express.json())
app.use('/users', userRouter);
http.createServer(app).listen(3000);
