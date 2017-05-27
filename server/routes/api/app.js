const express = require('express'); 
const router = express.Router();
const http = require('http');

/* GET api listing. */ 
router.get('/', (req, res) => { res.send('api works'); });

router.get('/submitform', (req, res) => { res.send('submit form api works'); });


/*upload resume*/
module.exports = router;