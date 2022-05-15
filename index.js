const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hot Damn!')
})

app.get('/test66', (req, res) => {
    res.send('Okay DOne!')
  })
  

app.listen(port, () => {
  console.log(`app r=nn=ing on ${port}`)
})