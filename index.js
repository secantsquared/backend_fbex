require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Sanity check on root.' })
})

server.listen(process.env.PORT || 5000, () =>
  console.log('Server is alive and kickin on http://127.0.0.1:5000')
)
