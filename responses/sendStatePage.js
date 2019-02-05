'use strict';
let state = require('/home/kali/Downloads/Node.js-master/week1/homework/src/index');
function sendStatePage(response) {
  response.setHeader('Content-Type', 'text/html');
  response.write(`
    <!html>
    <html>
      <head>
        <title>Hello</title>
      </head>
      <body>
        ${state}
      </body>
    </html>
  `);
}

module.exports = sendStatePage;
