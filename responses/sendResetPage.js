'use strict';
let state = require('/home/kali/Downloads/Node.js-master/week1/homework/src/index');
let sum = state
function sendResetPage(response) {
  response.setHeader('Content-Type', 'text/html');
  response.write(`
    <!html>
    <html>
      <head>
        <title>Hello</title>
      </head>
      <body>
      ${sum}
      </body>
    </html>
  `);
}

module.exports = sendResetPage;
