const express = require ('express')
const router = express.Router()
// const fs = require ('fs')

router.get('/', (req, res) =>{
  res.send("hello")
})

module.exports = router