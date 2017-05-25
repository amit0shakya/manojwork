
const express = require('express'); 

const router = express.Router();

/* GET api listing. */ 

router.get('/', (req, res) => { res.send('api works'); });

router.get('/submitform', (req, res) => { res.send('submit form api works'); });

module.exports = router;