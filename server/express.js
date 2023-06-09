const express = require('express');
const app = express()
const port = 8080

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let fibonacciNo = [0]

app.get('/', (req, res) => {
  res.send(`<center>Test api<br>
    find fibonacci no.<br>
    by Phumiphat</center>`)
})

app.get('/fibonacci-no', (req, res) => {
  res.json(fibonacciNo)
})

app.get('/fibonacci-no/:state', (req, res) => {
  const state = req.params.state
  if (state === 'add' || state === 'del') {
    if (state === 'add') {
      if (fibonacciNo.length === 0) {
        fibonacciNo.push(0)
      }
      if (fibonacciNo.length === 1) {
        fibonacciNo.push(1)
      } else {
        const n = fibonacciNo[fibonacciNo.length - 1] + fibonacciNo[fibonacciNo.length - 2]
        fibonacciNo.push(n)
      }
    } else if (state === 'del') {
      if (fibonacciNo.length > 1) {
        fibonacciNo.pop()
        fibonacciNo.pop()
      }
      if (fibonacciNo.length < 1) {
        fibonacciNo.push(0)
      }
    }
    res.status(200).json('update value success!')
  } else {
    res.status(404).json( 'can\'t update value!')
  }
})


app.listen(port, () => {
  console.log(`Application listening on port: http://localhost:${port}`)
})
