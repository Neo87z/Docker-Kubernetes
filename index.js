const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Doneee!')
})

app.listen(port, () => {
  console.log(`app r=nn=ing on ${port}`)
})