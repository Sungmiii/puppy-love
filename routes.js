const express = require('express')
const router = express.Router()
const fs = require('fs')


router.get('/', (req, res) => {
  const content = {
    title: "PUPPY LOVE | HOME"
  }
  res.render('index', content)
})

router.get('/edit', (req, res) => {
  res.render('create')
})
router.get('/puppies', (req, res) => {
  fs.readFile('./data.json', 'utf8', function (err, data) {
    let puppies = JSON.parse(data);
    res.render("home", puppies)
  })
})

router.get("/puppies/:id", (req, res) => {
  fs.readFile("./data.json", "utf8", function (err, data) {
    var id = Number(req.params.id);
    var puppies = JSON.parse(data).puppies;
    for (var i = 0; i < puppies.length; i++) {
      if (puppies[i].id === id) {
        var puppy = puppies[i];
        res.render("profile", puppy);
      }
    }
  });
});

router.post("/puppies/comment/:id", (req, res) => {
  console.log(req.body.comment)
  fs.readFile("./data.json", "utf8", function (err, data) {
    var id = Number(req.params.id);
    var puppies = JSON.parse(data).puppies;
    for (var i = 0; i < puppies.length; i++) {
      if (puppies[i].id === id) {
        var puppy = puppies[i];
        if (!puppy.comments) {
          puppy.comments = []
        } else {
          puppy.comments.push(req.body.comment)
        }

      }
    }
    fs.writeFile('./data.json', JSON.stringify({ puppies: puppies }, null, 4), function (err) {
      res.redirect('/puppies/' + puppy.id) //send to another 'profile' page with "message send"
    })
  });
});



module.exports = router