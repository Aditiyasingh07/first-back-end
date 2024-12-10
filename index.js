require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/you", (req, res)=>{
    res.send('This is me')
})

app.get("/youtube", (req, res)=>{
    res.send('<h1>This is my Youtube Link</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
