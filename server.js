const app = require('express')();

app.get('/', (req, res) => {

});

app.get('/:time', (req, res) => {

});

app.listen(process.env.PORT || 3000, () => {
  console.log('//*************************//');
  console.log('SERVER LISTENING ON PORT 3000');
  console.log('//*************************//');
});
