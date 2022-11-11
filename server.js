const express = require('express')
const path=require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"templetes/index.html"));
})



app.listen(port, () => {
  console.log(`Example app listening on port https://localhost:${port}`)
})