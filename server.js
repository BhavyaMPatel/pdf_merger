const express = require('express')
const path=require('path')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const {mergepdf} = require('./merge')
const app = express()

app.use('/static',express.static('public'))

const port = 3000


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"templetes/index.html"));
})

//Here We Will Merge Only 2 PDFS

app.post('/merge', upload.array('pdfs', 3), async (req, res, next) => {
    await mergepdf(path.join(__dirname,req.files[0].path),path.join(__dirname,req.files[1].path),path.join(__dirname,req.files[2].path))
    
    res.redirect("http://localhost:3000/static/FinalTickets.pdf")
    // req.files is array of `pdf` files
    // req.body will contain the text fields, if there were any
  })

app.listen(port, () => {
  console.log(`Example app listening on port https://localhost:${port}`)
})