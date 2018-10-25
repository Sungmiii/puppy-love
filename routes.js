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

router.get('/puppies/:id', (req, res)=> {
  fs.readFile('./data.json', 'utf8', function(err,data){
    let id = req.params.id
    let puppyData = JSON.parse(data)
    let myPuppie = puppyData.puppies.find( function(n){
        return n.id = n   
      })
      res.render('profile', myPuppie)
  })
})

module.exports = router