const express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
console.log('PORT IS: ', PORT);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(`${__dirname}/../client/dist`));

app.get('/*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
