const express = require('express')
const app = express()
app.set('view engine', 'ejs')
const port = 3000

app.get('/', (req, res) => {

  res.render('test_page', {
    time : Date.now(),
    data : 'dennis'
  })

})

app.use('/static', express.static(__dirname + '/public'));

app.get('*', (req, res) => {
  res.send('nothing here')
})

let server = app.listen(port, () => {
  console.log(`start working on port ${port}`)
})
