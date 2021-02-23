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
      res.status(500).json({ message: 'Somthing went wrong :(' })
    })
})

router.post('/', (req, res) => {
  const user_id = req.body.user_id
  const drink_name = req.body.drink_name
  const topping_id = req.body.topping_id
  const cup_id = req.body.cup_id
  const straw_id = req.body.straw_id
  const type_of_tea = req.body.type_of_tea
  const colour = req.body.colour
  db.addBubbleTea(user_id, drink_name, topping_id, cup_id, straw_id, type_of_tea, colour)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong :(' })
    })
})

router.get('/users', (req, res) => {
  db.getUsers()
  .then(users => {
    res.json(users)
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Somthing went wrong :(' })
  })
})

router.post('/users', (req, res) => {
  db.addUser(req.body.username)
  .then(() => {
    res.sendStatus(200)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Somthing went wrong :(' })
  })
})

router.get('/cups', (req, res) => {
  db.getCups()
  .then(cups => {
    res.json(cups)
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Somthing went wrong :(' })
  })
})

router.get('/straws', (req, res) => {
  db.getStraws()
  .then(straws => {
    res.json(straws)
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Somthing went wrong :(' })
  })
})

router.get('/toppings', (req, res) => {
  db.getToppings()
  .then(toppings => {
    res.json(toppings)
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Somthing went wrong :(' })
  })
})

router.get('/usersTeas', (req, res) => {
  db.getUsersTeas(req.body.user_id)
  .then(teas => {
    res.json(teas)
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Somthing went wrong :(' })
  })
})

router.get('/tea', (req, res) => {
  db.getBubbleTea(req.body.bubble_tea_id)
  .then(tea => {
    res.json(tea)
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Somthing went wrong :(' + err })
  })
})





module.exports = router
