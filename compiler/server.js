const path = require('path');
const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../docs/index.html'));
});

app.get('/favicon.ico', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../docs/favicon.ico'));
});

app.get('/fonts/:folder/:font', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../docs/fonts/' + request.params.folder + '/' + request.params.font));
});

require('http')
  .createServer(app)
  .listen(5000, (error) => {
    if (error) {
      console.log(error);
      return;
    }

    console.info('==> Listening at http://localhost:5000');
  }
);

