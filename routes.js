const express = require('express')
const router = express.Router()
const fs = require('fs')


router.get('/', (req, res) => {
  const content = {
    title: "PUPPY LOVE | HOME"
  }
  res.render('index', content)
})

router.get('/puppies', (req, res) => {
  fs.readFile('./data.json', 'utf8', function (err, data) {
    let puppies = JSON.parse(data);

    res.render("home", puppies)
  })
})

module.exports = router