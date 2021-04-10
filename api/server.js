const express = require('express')
const helmet = require('helmet')

const actionRouter = require('./actions/actions-router')
const projectRouter = require('./projects/projects-router')

const server = express()

server.use(express.json())
server.use(helmet())
server.use('/api/actions', actionRouter)
server.use('/api/projects', projectRouter)

server.use('/', (req,res) => {
  res.send('<h1>Kill me</h1>')
})

module.exports = server;