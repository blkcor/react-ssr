import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})

export default app
