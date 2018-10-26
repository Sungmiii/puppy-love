let supertest = require('supertest');
let cheerio = require('cheerio');
let server =require('../server')

test("check landing page is working", (done) => {
    supertest(server).get('/').end(function (err, res) {
        expect(err).toBeNull()
        let expected = 'PUPPY LOVE'
        let $ = cheerio.load(res.text)
        let actual = $('a').first().text()
        expect(actual).toEqual(expected)

        done()

    })
})

test("check text id is correct", (done) => {
    supertest(server).get('/').end(function (err, res) {
        console.log(res.text)
        expect(err).toBeNull()
        let expected = 'Fido'
        let $ = cheerio.load(res.text)
        let actual = $('h2').first().text()
        expect(actual).toEqual(expected)

        done()

    })
}) 