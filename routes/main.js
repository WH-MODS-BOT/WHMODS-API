__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'WHMODSBOT',
            namaowner: 'MRW4H1F',
            instagram: '@i.am.w4h1d',
            youtube : 'MR.W4H1D'
        }
    }
    res.json(config)
})

module.exports = router
