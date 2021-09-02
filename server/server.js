const path = require('path')
const express = require('express')
const camel = require ('camelcase-keys')
const snake = require ('snakecase-keys')
const db = require ('./db/db')
// const cors = require('cors') // <- if you use this, npm install cors

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
// server.use(cors('*'))

server.get('/api/about', (req, res) => {
  return db.getCreators()
    .then(creators => {
      return res.json(camel(creators))
    })
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

module.exports = server
