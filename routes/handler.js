const express = require('express');
const router = express.Router();

router.get('/tweets', (req,res) => {
  const str = [{
    "name": "Krunchas",
    "msg": "I'm Gay",
    "username": "krunchas"
  }]
  res.end(JSON.stringify(str));
});

router.post('/addTweet', (req,res) => {
  res.end('NA');
});

module.exports = router;