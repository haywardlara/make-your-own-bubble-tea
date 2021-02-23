const express = require('express')

const db = require('../db/bubble_tea')

const router = express.Router()

router.get('/', (req, res) => {
  db.getBubbleTeas()
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
