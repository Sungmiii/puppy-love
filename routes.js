const express = require ('express')
const router = express.Router()
// const fs = require ('fs')

router.get('/puppies', (req, res) =>{
  fs.readFile('./data.json', 'utf8', function(err, data) {
    let puppies = JSON.parse(data) ;

    res.render("puppies/home", puppies)
  })
})

module.exports = router