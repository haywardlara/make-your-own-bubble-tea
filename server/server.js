const express = require('express')
const path = require('path')

const bubbleRoutes = require('./routes/bubble_tea')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/bubble_tea', bubbleRoutes)

module.exports = server
