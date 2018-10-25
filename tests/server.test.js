let supertest = require('supertest');
let server = require('../server');
let cheerio = require('cheerio');

test("check landing page is working", (done) => {
    supertest(server).get('/').end(function (er, res) {
        expect(err).toBeNull()
        let expected = 'Puppy Love'
        let $ = cheerio.load(res.text)
        let actual = $('h1').first().text()
        expect(actual).toEqual(expected)

        done()

    })
})

test("check that image is matching id", (done) => {
    supertest(server).get('/').end(function (er, res) {
        expect(err).toBeNull()
        let expected = 'Fido'
        let $ = cheerio.load(res.text)
        let actual = $('.id').first().text()
        expect(actual).toEqual(expected)

        done()

    })
})