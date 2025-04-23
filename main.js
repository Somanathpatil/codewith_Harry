const express = require('express')

const blog = require('./routes/blog')


const app = express()
const port = 3000

app.use(express.static('public')) 
app.use('/blog', blog)  

app.get('/', (req, res) => {
  console.log("Hey its a get request")
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  console.log('Hey its a post request')
  res.send('About Us')
})

app.get("/index",(req,res)=>{
  console.log("hey its index")
  res.sendFile('templates/index.html', { root: __dirname })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})