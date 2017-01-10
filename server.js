'use strict'

const app = require('express')();
let home = require('./home.js');

app.get('/', (req, res) => {
  res.send(home);
});

app.get('/:time', (req, res) => {
  if(parseInt(req.params.time)){
    var date = new Date(parseInt(req.params.time)).toDateString().split(' ').slice(1);
    date[1] += ',';
    res.json({
      "unix": parseInt(req.params.time),
      "natural": date.join(' ')
    });
  } else {
    res.json({
      "unix": Date.parse(req.params.time),
      "natural": req.params.time
    });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('//*************************//');
  console.log('SERVER LISTENING ON PORT 3000');
  console.log('//*************************//');
});
